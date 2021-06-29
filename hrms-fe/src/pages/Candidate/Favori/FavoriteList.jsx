import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FavoriteService from "../../../services/favoriteService";
import { Card, Header, Icon, Image, Grid } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import DeleteFavorite from "./DeleteFavorite";

export default function FavoriteList() {
  let { candidateId } = useParams();

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    let favoriteService = new FavoriteService();
    favoriteService
      .getBycandidateId(candidateId)
      .then((result) => setFavorites(result.data.data));
  });
  return (
    <div>
      <Header className="app" as="h2" icon textAlign="left">
        <Header.Content>FAVORİ İŞ İLANLARINIZ</Header.Content>
      </Header>
      <Card.Group>
        {favorites.map((favorite) => (
          <Grid>
            <Grid.Row>
              <Grid.Column width={13}>
                <Card
                  color="yellow"
                  fluid
                  as={NavLink}
                  to={`/jobadvertisements/${favorite.jobAdvertisement.jobAdvertisementId}`}
                >
                  <Card.Content>
                    {!favorite.jobAdvertisement.employer.image ? (
                      <Image
                        rounded
                        floated="left"
                        size="tiny"
                        src="https://aday-spage.mncdn.com/Knet_img_bag-with-gray-bg.832c700.svg?v=p0611211353224"
                      ></Image>
                    ) : (
                      <Image
                        rounded
                        floated="left"
                        size="tiny"
                        src={favorite.jobAdvertisement.employer.image.imageUrl}
                      ></Image>
                    )}

                    <Card.Header>
                      {favorite.jobAdvertisement.jobTitle.jobTitle}
                    </Card.Header>
                    <Card.Meta>
                      {favorite.jobAdvertisement.employer.companyName}
                    </Card.Meta>
                    <Card.Meta>
                      {favorite.jobAdvertisement.workHour.workHour}
                    </Card.Meta>
                    <Card.Description>
                      <Icon name="map marker alternate" />
                      {favorite.jobAdvertisement.city.name}
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column width={3}>
                <DeleteFavorite
                  id={favorite.id}
                ></DeleteFavorite>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        ))}
      </Card.Group>
    </div>
  );
}