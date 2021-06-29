import React from "react";
import CoverLetterService from "../../../../services/coverLetterService";
import { toast } from "react-toastify";
import { Message,Button } from "semantic-ui-react";

export default function DeleteCoverLetter({id}) {
  let coverLetterService = new CoverLetterService();

  const deleteCoverLetter = (id) => {
    coverLetterService
      .delete(id)
      .then(toast.success("Ön Yazı Silindi"), window.location.reload());
  };

  return (
    <div>
      <Message size="massive" error>Ön yazıyı silmek ister misin?</Message>
      <Button
        style={{ marginBottom: "10pt" }}
        floated="right"
        inverted
        color="red"
        onClick={() => deleteCoverLetter(id)}
      >
        SİL
      </Button>
    </div>
  );
}