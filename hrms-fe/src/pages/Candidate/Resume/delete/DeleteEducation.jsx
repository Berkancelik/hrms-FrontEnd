  
import React from "react";
import EducationService from "../../../../services/educationService";
import { toast } from "react-toastify";
import { Message,Button } from "semantic-ui-react";

export default function DeleteEducation({id}) {
  let educationService = new EducationService();

  const deleteEducation = (id) => {
    educationService
      .delete(id)
      .then(toast.success("Eğitim Bilgisi Silindi"), window.location.reload());
  };
  return (
    <div>
      <Message size="massive" error>Eğitim bilgisini silmek ister misin?</Message>
      <Button
        style={{ marginBottom: "10pt" }}
        floated="right"
        inverted
        color="red"
        onClick={() => deleteEducation(id)}
      >
        SİL
      </Button>
    </div>
  );
}