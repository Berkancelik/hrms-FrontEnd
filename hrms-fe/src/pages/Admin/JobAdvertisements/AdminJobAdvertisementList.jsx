  
import React,{useState,useEffect} from 'react'

import { Table, Label, Icon, Button } from "semantic-ui-react";
import JobAdvertisementService from '../../../services/jobAdvertisementService'

export default function AdminJobAdvertisementList() {

const [jobAdvertisements, setJobAdvertisements] = useState([])

useEffect(()=>{
let jobAdvertisementService = new JobAdvertisementService();
jobAdvertisementService.getAllActiveFalseAndOpenTrueJobAdverts().then((result)=>setJobAdvertisements(result.data.data))

},[])

let changeIsActiveByEmployee = (id)=> {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.changeActiveStatus(id);
    window.location.reload();}

    return (
        <div>
    
      <Table>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Şekli</Table.HeaderCell>
            <Table.HeaderCell>İş Tipi</Table.HeaderCell>
            <Table.HeaderCell>Maaş Miktarı</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell> Admin tarafından onay durumu</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Onay </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
       

        <Table.Body>
        {jobAdvertisements.map((jobAdvertisement,key)=>(

        <Table.Row key={key}>
                <Table.HeaderCell collapsing>
                {jobAdvertisement.employer.companyName}
              </Table.HeaderCell>
              <Table.Cell>{jobAdvertisement.city.name}</Table.Cell>
              <Table.Cell>{jobAdvertisement.jobPosition.jobTitle}</Table.Cell>
              <Table.Cell>{jobAdvertisement.openPositionCount}</Table.Cell>
              <Table.Cell>{jobAdvertisement.workType.workType}</Table.Cell>
              <Table.Cell>{jobAdvertisement.workHour.workHour}</Table.Cell>
              <Table.Cell>{jobAdvertisement.salaryMin}-{jobAdvertisement.salaryMax}</Table.Cell>
              <Table.Cell>{jobAdvertisement.deadline}</Table.Cell>
              <Table.Cell>{jobAdvertisement.description}</Table.Cell>
            {jobAdvertisement.active ? (
                <Table.Cell>
                  <Label color="green" style={{ width: "100%" }}>
                    Aktif
                  </Label>
                </Table.Cell>
            ) :(
                <Table.Cell>
                  <Label color="orange" style={{ width: "100%" }}>
                    Pasif
                  </Label>
                </Table.Cell>
              )}

<Table.Cell collapsing>
                <Button
                  onClick={() => changeIsActiveByEmployee(jobAdvertisement.id)}
                  color="green"
                  icon
                  labelPosition="left"
                >
                  <Icon name="checkmark" size="large" />
                  Değiştir
                </Button>
              </Table.Cell>
        </Table.Row>


        ))}
        </Table.Body>
        </Table>
        </div>
    );
}