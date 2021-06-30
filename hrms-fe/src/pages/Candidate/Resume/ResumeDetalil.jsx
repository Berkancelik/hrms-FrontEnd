import React from "react";
import ResumeService from "../../../services/resumeService";
import {Table,Icon,Image,Segment,Grid,Rating,Message,} from "semantic-ui-react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import AddLinkModal from "../../../modals/CV/add/AddLinkModal";
import UpdateLinkModal from "../../../modals/CV/update/UpdateLinkModal";
import UpdateJobExperienceModal from "../../../modals/CV/update/UpdateJobExperienceModal";
import DeleteJobExperienceModal from "../../../modals/CV/delete/DeleteJobExperienceModal";
import AddEducationModal from "../../../modals/CV/add/AddEducationModal";
import UpdateEducationModal from "../../../modals/CV/update/UpdateEducationModal";
import DeleteEducationModal from "../../../modals/CV/delete/DeleteEducationModal";
import AddLanguageModal from "../../../modals/CV/add/AddLanguageModal";
import UpdateLanguageModal from "../../../modals/CV/update/UpdateLanguageModal";
import DeleteLanguageModal from "../../../modals/CV/delete/DeleteLanguageModal";
import AddSkillModal from "../../../modals/CV/add/AddSkillModal";
import UpdateSkillModal from "../../../modals/CV/update/UpdateSkillModal";
import DeleteSkillModal from "../../../modals/CV/delete/DeleteSkillModal";
import DeleteResumeModal from "../../../modals/CV/delete/DeleteResumeModal";
import DeleteLinkModal from "../../../modals/CV/delete/DeleteLinkModal";
import AddCoverLetterModal from "../../../modals/CV/add/AddCoverLetterModal";
import UpdateCoverLetterModal from "../../../modals/CV/update/UpdateCoverLetterModal";
import DeleteCoverLetterModal from "../../../modals/CV/delete/DeleteCoverLetterModal";
import AddJobExperienceModal from "../../../modals/CV/add/AddJobExperienceModal";


export default function ResumeDetail() {
  let { id } = useParams();
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    let resumeService = new ResumeService();
    resumeService
      .getById(id)
      .then((result) => setResumes([result.data.data]));
  }, []);
  return (
    <div className="card">
      {resumes.map((resume) => (
        <div>
          <Segment color="green" textAlign="center">
            ÖZGEÇMİŞ
            <DeleteResumeModal
              id={resume.id}
            ></DeleteResumeModal>
          </Segment>
          <Grid divided>
            <Grid.Row>
              <Grid.Column width={6}>
                {!resume.candidate.image ? (
                  <Image
                    circular
                    floated="left"
                    size="huge"
                    src="https://cdn.iconscout.com/icon/free/png-256/laptop-user-1-1179329.png"
                  ></Image>
                ) : (
                  <Image
                    circular
                    floated="left"
                    size="medium"
                    src={resume.candidate.image.url}
                  ></Image>
                )}
              </Grid.Column>
              <Grid.Column width={10}>
                <Table color="green" celled striped>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell colSpan="2">
                        İLETİŞİM BİLGİLERİ
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>Ad</Table.Cell>
                      <Table.Cell>
                        {resume.candidate.firstname}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Soyad</Table.Cell>
                      <Table.Cell>
                        {resume.candidate.lastName}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing>
                        <Icon name="mail" /> E-posta Adresi
                      </Table.Cell>
                      <Table.Cell>{resume.candidate.email}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing>
                        <Icon name="birthday" />
                        Doğum Tarihi
                      </Table.Cell>
                      <Table.Cell>
                        {resume.candidate.dateOfBirth}
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          {!resume.link ? (
            <Table color="green" celled striped>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="2">
                    HESAPLAR
                    <AddLinkModal
                      id={resume.id}
                    ></AddLinkModal>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
            </Table>
          ) : (
            <Table color="green" celled striped>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="2">
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={12}>HESAPLAR</Grid.Column>
                        <Grid.Column width={2}>
                          <UpdateLinkModal
                            id={resume.link.id}
                            linkedin={
                              resume.link.linkedin
                            }
                            github={
                              resume.link.github
                            }
                          ></UpdateLinkModal>
                        </Grid.Column>
                        <Grid.Column width={2}>
                          <DeleteLinkModal
                            id={resume.link.id}
                          ></DeleteLinkModal>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell collapsing>
                    <Icon name="linkedin" />
                    LinkedIn Hesabı
                  </Table.Cell>
                  <Table.Cell>
                    <a
                      target="_blank"
                      href={resume.link.linkedin}
                    >
                      {resume.link.linkedin}
                    </a>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="github" />
                    GitHub Hesabı
                  </Table.Cell>
                  <Table.Cell>
                    <a
                      target="_blank"
                      href={resume.link.github}
                    >
                      {resume.link.github}
                    </a>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          )}

          {!resume.letterOfAcceptance   ? (
            <Table color="blue">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="4">
                    ÖN YAZI
                    <AddCoverLetterModal
                      id={resume.id}
                    ></AddCoverLetterModal>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
            </Table>
          ) : (
            <Table color="blue">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="4">
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={12}>ÖN YAZI</Grid.Column>
                        <Grid.Column width={2}>
                          <UpdateCoverLetterModal
                            id={
                              resume.letterOfAcceptance.id
                            }
                            coverLetter={
                              resume.coverLetter.content
                            }
                          ></UpdateCoverLetterModal>
                        </Grid.Column>
                        <Grid.Column width={2}>
                          <DeleteCoverLetterModal
                            id={
                              resume.coverLetter.id
                            }
                          ></DeleteCoverLetterModal>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    {resume.coverLetter.coverLetter}
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          )}

          <Segment color="yellow">
            İŞ DENEYİMLERİ
            <AddJobExperienceModal
              id={resume.id}
            ></AddJobExperienceModal>
            {resume.jobExperiences.map((jobExperience) => (
              <Grid>
                <Grid.Row>
                  <Grid.Column width={14}>
                    <Table
                      style={{ marginTop: "10pt" }}
                      color="yellow"
                      celled
                      striped
                    >
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell collapsing>Çalışma Yeri</Table.Cell>
                          <Table.Cell colSpan="3">
                            {jobExperience.companyName}
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell collapsing>Pozisyon</Table.Cell>
                          <Table.Cell colSpan="3">
                            {jobExperience.jobPosition.positionName}
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell collapsing>Başlangıç Tarihi</Table.Cell>
                          <Table.Cell positive>
                            {jobExperience.startedDate}
                          </Table.Cell>
                          <Table.Cell collapsing>Bitiş Tarihi</Table.Cell>
                          <Table.Cell positive>
                            {jobExperience.endedDate}
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <UpdateJobExperienceModal
                      id={jobExperience.id}
                      companyName={jobExperience.companyName}
                      jobPositionId={jobExperience.jobPositionId}
                      startDateOfWork={jobExperience.startDateOfWork}
                      endedDate={jobExperience.endedDate}
                    ></UpdateJobExperienceModal>
                    <DeleteJobExperienceModal
                      id={jobExperience.id}
                    ></DeleteJobExperienceModal>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            ))}
          </Segment>
          <Segment color="blue">
            EĞİTİM BİLGİLERİ
            <AddEducationModal
              id={resume.id}
            ></AddEducationModal>
            {resume.educations.map((education) => (
              <Grid>
                <Grid.Row>
                  <Grid.Column width={14}>
                    <Table
                      style={{ marginTop: "10pt" }}
                      color="blue"
                      celled
                      striped
                    >
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell collapsing>Okul</Table.Cell>
                          <Table.Cell colSpan="3">
                            {education.schoolName}
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell collapsing>Bölüm</Table.Cell>
                          <Table.Cell colSpan="3">
                            {education.department}
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell collapsing>Başlangıç Tarihi</Table.Cell>
                          <Table.Cell positive>
                            {education.startedDate}
                          </Table.Cell>
                          <Table.Cell collapsing>Bitiş Tarihi</Table.Cell>
                          <Table.Cell positive>
                            {education.endedDate}
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <UpdateEducationModal
                      id={education.id}
                      schoolName={education.schoolName}
                      department={education.department}
                      startedDate={education.startedDate}
                      endedDate={education.endedDate}
                    ></UpdateEducationModal>
                    <DeleteEducationModal
                      id={education.id}
                    ></DeleteEducationModal>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            ))}
          </Segment>
          <Segment color="red">
            YABANCI DİL
            <AddLanguageModal
              id={resume.id}
            ></AddLanguageModal>
            {resume.languages.map((language) => (
              <Grid>
                <Grid.Row>
                  <Grid.Column width={14}>
                    <Table
                      style={{ marginTop: "10pt" }}
                      color="blue"
                      celled
                      striped
                    >
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell collapsing>
                            <Icon name="flag" />
                            Dil
                          </Table.Cell>
                          <Table.Cell colSpan="3">
                            {language.languageName}
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell collapsing>
                            <Icon name="level up" />
                            Seviye
                          </Table.Cell>
                          <Table.Cell>
                            <Rating
                              maxRating={5}
                              defaultRating={language.level}
                              icon="star"
                              size="massive"
                              disabled
                            />
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <UpdateLanguageModal
                      id={language.id}
                      language={language.languageName}
                      level={language.level}
                    ></UpdateLanguageModal>
                    <DeleteLanguageModal
                      id={language.id}
                    ></DeleteLanguageModal>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            ))}
          </Segment>
          <Segment color="violet">
            YETENEKLER
            <AddSkillModal
              id={resume.id}
            ></AddSkillModal>
            {resume.resumeSkills.map((resumeSkill) => (
              <Grid>
                <Grid.Row>
                  <Grid.Column width={12}>
                    <Message style={{ marginTop: "10pt" }} color="green">
                      {resumeSkill.skillName}
                    </Message>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <UpdateSkillModal
                      id={resumeSkill.id}
                      skillName={resumeSkill.skillName}
                    ></UpdateSkillModal>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <DeleteSkillModal
                      id={resumeSkill.id}
                    ></DeleteSkillModal>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            ))}
          </Segment>
        </div>
      ))}
    </div>
  );
}