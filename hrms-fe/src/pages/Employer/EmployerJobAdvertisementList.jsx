import React,{useState,useEffect} from 'react'
import JobAdvertisementService from '../../services/jobAdvertisementService'
import { Table, Label , Icon, Button} from "semantic-ui-react";
export default function EmployerJobAdvertisementList() {
    const [jobAdvertisemets, setJobAdvertisements] = useState([])
     

useEffect (()=>{
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.getAllByEmployerId(25)
    .then((result)=>setJobAdvertisements(result.data.data))
},[])

let changeIsOpenByEmployer = (id)=> {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.changeOpenStatus(id);
    window.location.reload();
}

    
    return (
        <div>
            <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell rowSpan="2">Şehir</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Pozisyon</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Açık Pozisyon</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Çalışma Şekli</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">İş Tipi</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Maaş Miktarı</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Açıklama</Table.HeaderCell>
            <Table.HeaderCell colSpan="3" textAlign="center"> Durum</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Sizin Tarafınızdan</Table.HeaderCell>
            <Table.HeaderCell>Admin Tarafından</Table.HeaderCell>
            <Table.HeaderCell rowSpan="3">İlanın Durumunu değiştir</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisemets.map((jobAdvertisement, key) => (
            <Table.Row key={key}>
              <Table.Cell>{jobAdvertisement.city.name}</Table.Cell>
              <Table.Cell>{jobAdvertisement.jobTitle.jobTitle}</Table.Cell>
              <Table.Cell>{jobAdvertisement.openTitleCount}</Table.Cell>
              <Table.Cell>{jobAdvertisement.workType.workType}</Table.Cell>
              <Table.Cell>{jobAdvertisement.workHour.workHour}</Table.Cell>
              <Table.Cell>
                {jobAdvertisement.salaryMin} ₺ - {jobAdvertisement.salaryMax} ₺
              </Table.Cell>
              <Table.Cell>{jobAdvertisement.deadline}</Table.Cell>
              <Table.Cell>{jobAdvertisement.description}</Table.Cell>
              {jobAdvertisement.open ? (
                <Table.Cell>
                  <Label color="green" style={{ width: "100%" }}>
                    İş ilanı Açık!
                  </Label>
                </Table.Cell>
              ) : (
                <Table.Cell>
                  <Label color="red" style={{ width: "100%" }}>
                    İş ilanı Kapalı!
                  </Label>
                </Table.Cell>
              )}
              {jobAdvertisement.active ? (
                <Table.Cell>
                  <Label color="green" style={{ width: "100%" }}>
                    Admin tarafından onaylı!
                  </Label>
                </Table.Cell>
              ) : (
                <Table.Cell>
                  <Label color="orange" style={{ width: "100%" }}>
                    Admin tarafından pasif!
                  </Label>
                </Table.Cell>
              )}
              <Table.Cell collapsing>
                <Button
                  onClick={() => changeIsOpenByEmployer(jobAdvertisement.id)}
                  color="green"
                  icon
                  labelPosition="left"
                >
                  <Icon name="checkmark" size="large" />
                  Değiştir!
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
        </div>
    )
}