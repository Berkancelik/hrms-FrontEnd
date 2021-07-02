import moment from "moment";
import React,{ useState, useEffect } from "react";
import {Table,Segment,Container, Icon, Card, Button} from "semantic-ui-react";
import swal from "sweetalert";
import EmployerService from "../../services/employerService";
export default function EmployerUpdateConfirm() {
    const [employers, setEmployers] = useState([]);
    let employerService = new EmployerService();
  
    useEffect(() => {
      let employerService = new EmployerService();
      employerService.getByConfirmStatusFalse().then((result) => setEmployers(result.data.data));
    }, []);
  
    const confirmStatusTrue = (employerId) => {
        employerService.updateConfirmStatus(employerId).then(
          swal({
            title: "Başarılı!",
            text: "Şirket bilgileri onaylandı!",
            icon: "success",
            button: "OK",
          }).then(function () {
            window.location.reload();
          })
        );
      };
    
    return (
        <div>
             <Segment style={{ padding: "18em 0em" }} vertical>
        <Container>
          <Card fluid color="orange">
            {" "}
            <Card.Header
              as="h2"
              textAlign="center"
              style={{ fontSize: "2em", marginBottom: "1em", marginTop: "1em" }}
            >
              <Icon name="edit outline" color="orange" />
              Onay Bekleyen Şirketler
            </Card.Header>
            <Card.Content>
              <Table color="orange">
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Firma Adı</Table.HeaderCell>
                    <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
                    <Table.HeaderCell>Web Adresi</Table.HeaderCell>
                    <Table.HeaderCell>Mail Adresi</Table.HeaderCell>
                    <Table.HeaderCell>Şifre</Table.HeaderCell>
                    <Table.HeaderCell>Kuruluş Tarihi</Table.HeaderCell>
                    <Table.HeaderCell>Onay Durumu</Table.HeaderCell>
                    <Table.HeaderCell>Onay İşlemi</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body >
                  {employers.map((employer) => (
                    <Table.Row key={employer.id} 
                    >
                      <Table.Cell>
                        {employer.employerUpdate.companyName}
                      </Table.Cell>
                      <Table.Cell>{employer.employerUpdate.phoneNumber} </Table.Cell>
                      <Table.Cell>{employer.employerUpdate.webAddress}</Table.Cell>
                      <Table.Cell>{employer.employerUpdate.email}</Table.Cell>
                      <Table.Cell>
                      {employer.employerUpdate.password}
                      </Table.Cell>
                      <Table.Cell>
                          {moment(employer.employerUpdate.createdDate).format("DD.MM.yyyy")}
                      </Table.Cell>
                      <Table.Cell>
                        {employer.employerUpdate.confirmStatus === false
                          ? "Onaylanmadı"
                          : "Onaylandı"}
                      </Table.Cell>
                      <Table.Cell>
                         
                        <Button
                          animated
                          basic
                          color="green"
                          onClick={(e) =>
                            confirmStatusTrue(employer.employerUpdate.id)
                          }
                        >
                          <Button.Content visible>Onayla</Button.Content>
                          <Button.Content hidden>
                            <Icon name="check" />
                          </Button.Content>
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Card.Content>
          </Card>
        </Container>
      </Segment>
        </div>
    )
}