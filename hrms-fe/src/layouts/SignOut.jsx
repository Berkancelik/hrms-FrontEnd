  import React from 'react'
import { Menu ,Button} from 'semantic-ui-react'


export default function SignOut({signIn}) {
    return (
        <div>
              <Menu.Item>
            <Button primary onClick={signIn}>Giriş Yap </Button>
            <Button primary style={{marginLeft:'0.5em'}}>Kayıt Ol </Button>
            </Menu.Item>
        </div>
    )
}