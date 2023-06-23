import { useParams } from "react-router-dom";
import CategoryNames from "../components/CategoryNames";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ProductDetail from "../components/ProductDetail";

function ProductDetailPage() {
  const { id } = useParams();
  return (
    <>
      <Header />
      <Navbar />
      <CategoryNames />
      <ProductDetail data={id} />
    </>
  );
}
export default ProductDetailPage;
