import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const toggleFavorite = (book,favorites,setFavorites) => {
    const isFavorite = favorites.some((favoriteBook) => favoriteBook.Title === book.Title);
    if (isFavorite) {
      // Favorilerden kaldır
      const newFavorites = favorites.filter((favoriteBook) => favoriteBook.Title !== book.Title);
      setFavorites(newFavorites);
      Cookies.set('favoriteBooks', JSON.stringify(newFavorites));
      toast('Removed From Favorites', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: 'orange-toast', // Custom CSS class for styling
      });
    } else {
      // Favorilere ekle
      const newFavorites = [...favorites, book];
      setFavorites(newFavorites);
      Cookies.set('favoriteBooks', JSON.stringify(newFavorites));
      toast('Added To Favorites', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: 'orange-toast', // Custom CSS class for styling
      });
    }
  };