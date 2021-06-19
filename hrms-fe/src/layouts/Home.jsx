import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Header, Icon } from "semantic-ui-react";

export default function Home() {
  return (
    <div className="image">
      <Header inverted color="red" as="h1" icon textAlign="left">
          
        <Header.Content style={{ fontSize: "50px" }}>
          HOME
        </Header.Content>
      </Header>
    
     
    </div>
  );
}