import React, { useState} from "react";
import {
  Container,
  Menu,
  Segment,
  Icon,
  Button,
  Dropdown
} from "semantic-ui-react";
import { useHistory } from "react-router";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { NavLink } from "react-router-dom";


export default function Navi() {
    const [isAuthenticated,setIsAuthenticated]=useState(true)
    const history= useHistory()
   
   function handleSignOut() {
     setIsAuthenticated(false)
     history.push("/")
   }
   
   function handleSignIn() {
     setIsAuthenticated(true)
   }
  
    return (
        <div>
           
           <Segment
           inverted
            textAlign='center'
            style={{minHeight: 100,  padding: '1em 0em' }}
            vertical
          >
            <Menu
              inverted 
              secondary
              size='large'
            >
              <Container>
              <Menu.Item  as={NavLink} to="/home">Ana Sayfa</Menu.Item>
              <Menu.Item as={NavLink} to="/jobadvertisements">İş İlanları</Menu.Item>
              <Menu.Item as={NavLink} to="/candidates">İş Adayları</Menu.Item>
              <Menu.Item as={NavLink} to="/employers">İş Verenler</Menu.Item>


              <Menu.Menu style={{marginTop:"1.3em"}} >
          <Dropdown item text='Sistem Çalışanları' pointing="top">
            <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/employees">HRMS Personel</Dropdown.Item>
                   <Dropdown.Item as={NavLink} to="/jobconfirm">Onaylanmamış İlanlar</Dropdown.Item>
                   <Dropdown.Item as={NavLink} to="/employerconfirm">Onaylanmamış Şirketler</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Menu.Menu>
              <Menu.Menu position="right">
                <Menu.Item >
                   <Button as={NavLink} to="/jobadd" circular inverted color='purple'  ><Icon  name="upload" />İşe başvur</Button>
                </Menu.Item>

                <Menu.Item>
                  {isAuthenticated ? (
                    <SignedIn signOut={handleSignOut} />
                  ) : (
                    <SignedOut signIn={handleSignIn} />
                  )}
                </Menu.Item>
              </Menu.Menu>
            </Container>
          </Menu>
          </Segment>      
     
     

       

        </div>
    );

}