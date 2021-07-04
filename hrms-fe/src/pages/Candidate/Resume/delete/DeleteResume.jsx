import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Message, Button } from "semantic-ui-react";
import ResumeService from "../../../../services/resumeService";

export default function DeleteResume({ id }) {
  const history = useHistory();
  let resumeService = new ResumeService();

  const deleteCV = (id) => {
    resumeService
      .delete(id)
      .then(
        toast.success("Özgeçmiş Silindi"),
        history.push(`/candidate/${21}/resumes`),
        window.location.reload()
      );
  };
  return (
    <div>
      <Message size="massive" error>Özgeçmişi silmek istiyor misin?</Message>
      <Button
        style={{ marginBottom: "10pt" }}
        inverted
        color="red"
        floated="right"
        onClick={() => deleteCV(id)}
      >
        SİL
      </Button>
    </div>
  );
}