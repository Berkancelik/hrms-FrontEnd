import React from "react";
import { toast } from "react-toastify";
import { Message,Button } from "semantic-ui-react";
import LinkService from "../../../services/linkService";

export default function DeleteLink({id}) {
  let linkService = new LinkService();

  const deleteLink = (id) => {
    linkService
      .delete(id)
      .then(toast.success("Hesaplar Silindi"), window.location.reload());
  };
  return (
    <div>
      <Message size="massive" error>Hesapları silmek ister misin?</Message>
      <Button style={{marginBottom:"10pt"}} floated="right" inverted color="red" onClick={() => deleteLink(id)}>SİL</Button>
    </div>
  );
}