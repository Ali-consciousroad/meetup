import { createContext, useState } from 'react';

createContext({
    favorites: [],
    totalFavorites: 0,
});

function FavoritesContextProvider(props) {
    const [userFavorites, setUser] = useState([]);

    const context = {
        favorites: userFavorites, 
        totalFavorites: userFavorites.length,
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}