import { useParams } from "react-router-dom";
import CategoryNames from "../components/CategoryNames";
import EachCategory from "../components/EachCategory";
import Categorybar from "../components/Navbar";
import Header from "../components/Header"

function CategoryPage() {
  const catName = useParams();

  return (
    <>
      <Header />
      <Categorybar />
      <CategoryNames />
      <EachCategory data={catName} />
    </>
  );
}
export default CategoryPage;
