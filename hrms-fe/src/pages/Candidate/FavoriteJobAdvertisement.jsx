import React,{useState,useEffect} from "react";
import { Label, Table, Card, Icon,Segment,Container,Button } from "semantic-ui-react";
import * as moment from "moment";
import swal from "sweetalert";
import FavoriteService from "../../services/favoriteService";

export default function FavoriteJobAdvertisement() {
  const [favorites, setFavorites] = useState([]);
 
  useEffect(() => {
    let favoriteService = new FavoriteService();
    favoriteService
      .getByCandidateId(1)
      .then((result) => setFavorites(result.data.data));
  }, []);


  const deleteToFavorites = (id) => {
      let favoriteService=new FavoriteService();
    favoriteService.deleteFavorites(id).then(swal({

        title:"Emin Misiniz?",
        icon:"warning",
        buttons:true,
        dangerMode:true

    })
    .then((willDelete)=>{
        if(willDelete){
        swal("İlan favorilerde kaldırıldı.",{icon:"success"})
        .then(function(){window.location.reload()});
    }}));
};
  return (
    <div>
      <Segment circle="true" style={{ padding: "10em 0em" }} vertical>
        <Container>
          <Card.Group itemsPerRow={2}>
              {favorites.map(favorite=>(

             
            <Card fluid color="green" key={favorite.id}>
              <Card.Content>
                <Card.Header
                  textAlign="center"
                  style={{
                    fontSize: "2em",
                    color: "purple",
                    marginTop: "1em",
                  }}
                >
                  {favorite.jobAdvertisement?.jobTitle?.title}
                </Card.Header>
                <Card.Meta
                  textAlign="center"
                  style={{
                    fontSize: "1.5em",
                    color: "grey",
                    marginTop: "1em",
                  }}
                >
                  <Icon name="building outline" color="brown" />{" "}
                  {favorite.jobAdvertisement?.employer?.companyName}
                </Card.Meta>
                <Card.Meta
                  textAlign="center"
                  style={{
                    fontSize: "1.5em",
                    color: "grey",
                    marginTop: "0.50em",
                  }}
                >
                  <Icon name="map marker" color="blue" />{" "}
                {favorite.jobAdvertisement?.city?.cityName}
                </Card.Meta>

                <Card.Description
                  style={{
                    color: "grey",
                    fontSize: "1.5em",
                    textAlign: "center",
                  }}
                >
                 {favorite.jobAdvertisement?.description}
                </Card.Description>
                <Card.Meta>
                  <Table
                    verticalAlign="middle"
                    basic="very"
                    style={{ marginTop: "2em" }}
                  >
                    <Table.Body>
                      <Table.Row textAlign="center">
                        <Table.Cell>
                          <Label
                            basic
                            color="green"
                            pointing="right"
                            style={{
                              fontSize: "1.2em",
                            }}
                          >
                            Maaş Aralığı:
                          </Label>
                        </Table.Cell>
                        <Table.Cell
                          style={{
                            fontSize: "1.4em",
                          }}
                          textAlign="center"
                        >
                          {" "}
                          {favorite.jobAdvertisement?.salaryMin} <Icon name="lira" /> -{" "}
                          {favorite.jobAdvertisement?.salaryMax}<Icon name="lira" />
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row textAlign="center">
                        <Table.Cell>
                          {" "}
                          <Label
                            basic
                            color="green"
                            pointing="right"
                            style={{
                              fontSize: "1.2em",
                            }}
                          >
                            Çalışma Tipi:
                          </Label>
                        </Table.Cell>
                        <Table.Cell
                          style={{
                            fontSize: "1.4em",
                          }}
                        >
                         {favorite.jobAdvertisement?.workType?.workType}
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row textAlign="center">
                        <Table.Cell>
                          {" "}
                          <Label
                            basic
                            color="green"
                            pointing="right"
                            style={{
                              fontSize: "1.2em",
                            }}
                          >
                            Çalışma Zamanı Tipi:
                          </Label>
                        </Table.Cell>
                        <Table.Cell
                          style={{
                            fontSize: "1.4em",
                          }}
                        >
                          {favorite.jobAdvertisement?.workHour?.workHour}
                        </Table.Cell>
                      </Table.Row>

                      <Table.Row textAlign="center">
                        <Table.Cell>
                          {" "}
                          <Label
                            basic
                            color="green"
                            pointing="right"
                            style={{
                              fontSize: "1.2em",
                            }}
                          >
                            Son Başvuru Tarihi:
                          </Label>
                        </Table.Cell>
                        <Table.Cell
                          style={{
                            fontSize: "1.4em",
                          }}
                        >
                         {moment(favorite.jobAdvertisement?.deadline).format(
                                "DD.MM.yyyy"
                              )}
                        </Table.Cell>
                      </Table.Row>

                      <Table.Row textAlign="center">
                        <Table.Cell>
                          {" "}
                          <Label
                            basic
                            color="green"
                            pointing="right"
                            style={{
                              fontSize: "1.2em",
                            }}
                          >
                            Alınacak Personel Sayısı:
                          </Label>
                        </Table.Cell>
                        <Table.Cell
                          style={{
                            fontSize: "1.4em",
                          }}
                        >
                         {favorite.jobAdvertisement?.opeTnTitleCount}
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                  <Button basic color="red"  size="large"   onClick={(e) =>deleteToFavorites(favorite.id)} ><Icon name="delete"/> Favorilerden Kaldır</Button>
                </Card.Meta>
              </Card.Content>
            </Card>
             ))}
          </Card.Group>
        </Container>
      </Segment>
    </div>
  );
}