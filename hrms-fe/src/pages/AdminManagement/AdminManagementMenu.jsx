import { Menu } from "semantic-ui-react"

export default function AdminManagementMenu() {
    let activeItem = "job-advertisements"
    
    return(
        <div>
            <Menu vertical>
                <Menu.Item header>
                    ADMIN
                </Menu.Item>
                <Menu.Item name="jobAdvertisements" active={activeItem ==="job-advertisements"}>İş İlanları</Menu.Item>
            </Menu>
        </div>
    )
}