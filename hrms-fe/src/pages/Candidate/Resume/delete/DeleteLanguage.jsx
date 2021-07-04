import React from "react";
import LanguageService from "../../../../services/languageService";
import { toast } from "react-toastify";
import { Message,Button } from "semantic-ui-react";

export default function DeleteLanguage({id}) {
  let languageService = new LanguageService();

  const deleteLanguage = (id) => {
    languageService
      .delete(id)
      .then(toast.success("Yabancı Dil Silindi"), window.location.reload());
  };
  return (
    <div>
      <Message size="massive" error>Yabancı dili silmek ister misin?</Message>
      <Button
        style={{ marginBottom: "10pt" }}
        floated="right"
        inverted
        color="red"
        onClick={() => deleteLanguage(id)}
      >
        SİL
      </Button>
    </div>
  );
}