import CategoryNames from "../components/CategoryNames";
import Categorybar from "../components/Navbar";
import Wishlist from "../components/Wishlist";
import Header from "../components/Header";

function FavoritesPage() {
  return (
    <>
      <Header />
      <Categorybar />
      <CategoryNames />
      <Wishlist />
    </>
  );
}
export default FavoritesPage;
