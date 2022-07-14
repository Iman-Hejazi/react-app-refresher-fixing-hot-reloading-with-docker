import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  isFavorite: (meetupId) => {},
});

export function FavoritesContextProvider({ children }) {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  };

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => {
        return meetup.id !== meetupId;
      });
    });
  };

  const itemIsHandler = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: itemIsHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
