import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const toggleCard = (book,cards,setCards) => {
    const isCard = cards.some((card) => card.Title === book.Title);
    if (isCard) {
      // Favorilerden kaldır
      const newcards = cards.filter((card) => card.Title !== book.Title);
      setCards(newcards);
      Cookies.set('cardBooks', JSON.stringify(newcards));
      toast('Removed From Cards', {
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
      const newcards = [...cards, book];
      setCards(newcards);
      Cookies.set('cardBooks', JSON.stringify(newcards));
      toast('Added To Cards', {
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