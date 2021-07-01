import React from "react";
import { Formik, Form } from "formik";
import { Button } from "semantic-ui-react";
import { toast } from "react-toastify";
import FavoriteService from "../../../services/favoriteService";

export default function AddFavorite({ candidateId, jobAdvertisementId }) {
  let favoriteService = new FavoriteService();

  const initialValues = {
    candidateId: "",
    jobAdvertisementId: "",
  };

  const onSubmit = (values) => {
    values.candidateId = candidateId;
    values.jobAdvertisementId = jobAdvertisementId;
    console.log(values);
    favoriteService
      .add(values)
      .then(
        (result) => console.log(result.data.data),
        toast.success("Favorilere Eklendi")
      );
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="ui form">
         <Button type="submit" inverted color="red">FAVORİ EKLE</Button>
        </Form>
      </Formik>
    </div>
  );
}