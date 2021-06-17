import React,{useState,useEffect}from 'react'
import EmployerService from "../services/employerService"
import { Table, Header ,Button} from "semantic-ui-react";
export default function EmployerList() {

    const [employers, setEmployers] = useState([])

    useEffect(()=>{
        let employerService = new EmployerService();
        employerService.getEmployers().then(result=>setEmployers(result.data.data))
    },[])

    return (
        <div>
            <Header as="h2">
        Companies
        <Header.Subheader>
          Sistemde mevcut olan şirketler.
        </Header.Subheader>
      </Header>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employers.map((employer) => (
            <Table.Row key={employer.id}>
              <Table.Cell>{employer.companyName}</Table.Cell>
              <Table.Cell> <Button color='grey'>Details</Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer></Table.Footer>
      </Table>
        </div>
    )
}