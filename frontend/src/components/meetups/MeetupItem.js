import { useContext } from "react";
import FavoritesContext from "../../store/favorite-context";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem({ meetup }) {
  const { id, image, title, address, description } = meetup;

  const favoriteCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoriteCtx.isFavorite(id);
  const togglefavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(id);
    } else {
      favoriteCtx.addFavorite(meetup);
    }
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt="" />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={togglefavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from favorite" : "Add to Favorite"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
