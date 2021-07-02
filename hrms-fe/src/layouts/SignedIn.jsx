import React from 'react'
import { Dropdown,Image, MenuItem } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <MenuItem>
            <Image avatar  src="https://avatars.githubusercontent.com/u/79005929?v=4"/>
            <Dropdown pointing="top left" text="BERKAN ÇELİK">
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info" />
                    <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
                </Dropdown.Menu>
            </Dropdown>   
           </MenuItem>
        </div>
    )
}