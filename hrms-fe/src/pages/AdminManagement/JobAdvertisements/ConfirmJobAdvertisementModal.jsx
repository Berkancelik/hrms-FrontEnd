import { useState } from "react";
import { Button, Header, Modal, Icon } from "semantic-ui-react";
import JobAdvertConfirmService from "../../../services/jobAdvertisementConfirmService";

export default function ConfirmJobAdvertisementModel({triggerButton, jobAdvertisement}) {
    const[fakeEmployeeId, setFakeEmployeeId] = useState(4);

    const confirmJobAdvertisement = ()=>{
        let jobAdvertConfirmService = new JobAdvertConfirmService();
        jobAdvertConfirmService.add({
            jobAdvertisement:{
                id : jobAdvertisement.id
            },
            employee: {
                id : fakeEmployeeId,
            },
            cofirmed : true,
            confirmedDate: new Date(Date.now()),
        });
    };

    const [open, setOpen] = useState(false);
    return(
        <div>
            <Modal basic onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open} trigger={triggerButton} size= "small" >
                <Header icon>
                    <Icon name ="chekmark"/>
                        İş İanını Onayla                     
                </Header>
                <Modal.Content>
                    <p>İş ilanını onaylamak istediğinize emin misiniz ?</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color="red" inverted onClick={()=>setOpen(false)}>
                        <Icon name ="remove"/> Hayır
                    </Button>
                    <Button color= "green" inverted onClick={() =>{setOpen(false); confirmJobAdvertisement();}}>
                        <Icon name ="checkmark"/> Evet
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    );
    
}