import React from "react";
import { Icon, Menu} from "semantic-ui-react";
import './SideBar.css'
import { Link } from 'react-router-dom'
export default function SideBar() {
  return (
    <div>
    <Menu inverted icon="labeled" vertical>
    <Link to="/">
    <Menu.Item as="a">
          <Icon name="home" />
          Ana Sayfa
        </Menu.Item>
        </Link>
    <Link to="/jobtitles">
    <Menu.Item as="a">
          <Icon name="briefcase" />
          İş Pozisyonları
        </Menu.Item>
        </Link>
        <Link to="/candidates">
        <Menu.Item as="a">
          <Icon name="user circle" />
          İş Adayları
        </Menu.Item>
        </Link>
        <Link to="/employers">
        <Menu.Item as="a">
          <Icon name="user circle" />
          İşveren
        </Menu.Item>
        </Link>
        <Link to="/jobadvertisements">
        <Menu.Item as="a">
          <Icon name="laptop" />
          İş arayanlar için iş ilanları
        </Menu.Item>
        </Link>
        <Link to="/employerjobadvertisementlist">
        <Menu.Item as="a">
          <Icon name="briefcase" />
          İş verenler için iş ilanı düzenleme
        </Menu.Item>


        </Link>
      
        <Menu.Item as="a">
          <Icon name="" />
         
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="" />
        
        </Menu.Item>

    </Menu>
      
     
    </div>
  );
}