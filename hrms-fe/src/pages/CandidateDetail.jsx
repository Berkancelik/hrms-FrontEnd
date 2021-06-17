import React,{useState,useEffect} from 'react'
import { useParams } from "react-router";
import { Button, Card, Image } from "semantic-ui-react";
import CandidateService from '../services/CandidateService';
export default function JobSeekerDetail() {
   
   let {id} =useParams();// parametreleri obje olarak veriyor useParams

   const[candidate,setCandidate] = useState({})
   
useEffect(()=>{

let candidateService = new CandidateService();
candidateService.getById(id).then((result)=>setCandidate(result.data.data))

},[])

    return (
        <div>
            <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/jenny.jpg"
            />
            <Card.Header>{candidate.firstName}</Card.Header>
            <Card.Meta>{candidate.lastName}</Card.Meta>
            <Card.Description>
              {candidate.firstName} iletişim bilgilerinizi görüntülemek için izin istedi
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
               Onayla
              </Button>
              <Button basic color="red">
                Reddet
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
        </div>
    )
}