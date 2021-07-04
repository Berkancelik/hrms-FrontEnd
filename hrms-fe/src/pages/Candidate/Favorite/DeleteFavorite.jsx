import React from "react";
import { toast } from "react-toastify";
import FavoriteService from "../../../services/favoriteService";
import { Button } from "semantic-ui-react";

export default function DeleteFavorite({id}) {
  let favoriteService = new FavoriteService();

  const deleteFavorite = (id) => {
    favoriteService
      .delete(id)
      .then(
        toast.success("İlan Favorilerden Çıkarıldı!"),
        window.location.reload()
      );
  };
  return (
    <div>
      <Button inverted color="red" onClick={()=>deleteFavorite(id)}>FAVORİDEN ÇIKAR</Button>
    </div>
  );
}