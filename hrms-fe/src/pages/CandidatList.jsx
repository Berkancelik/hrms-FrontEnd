import React , { useEffect, useState }from 'react'
import { Link } from 'react-router-dom'
import CandidateService from '../services/candidateService'
import {  Table, Header ,Button,Image} from "semantic-ui-react";
export default function Candidate() {
   
   const [candidates, setCandidates] = useState([])
   
   useEffect(()=>{
       let candidateService= new CandidateService();
       candidateService.getCandidates().then(result=>setCandidates(result.data.data))
   })
   
    return (
        <div>
             <Header as="h2">
             <Image size='large' avatar src={"../assets/candidate.jpg"} style={{ marginRight: '1.5em' }} />
        Job Seekers
        <Header.Subheader>
          Aşağıda sistemimizde olan iş arayanları görmektesiniz
        </Header.Subheader>
      </Header>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Adı</Table.HeaderCell>
            <Table.HeaderCell>SoyAdı</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>DoğumGünü</Table.HeaderCell> 
            <Table.HeaderCell></Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>
          {candidates.map((candidate) => (
            <Table.Row key={candidate.id}>
              <Table.Cell>{candidate.firstName}</Table.Cell>
              <Table.Cell>{candidate.lastName}</Table.Cell>
              <Table.Cell>{candidate.email}</Table.Cell>
              <Table.Cell>{candidate.dateOfBirth}</Table.Cell>
          <Table.Cell>  <Link to={`/candidates/${candidate.id}`}><Button color='grey'> Details</Button></Link></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer></Table.Footer>
      </Table>
        </div>
    )
}