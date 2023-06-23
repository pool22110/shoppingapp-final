import { Link } from "react-router-dom";

function CategoryNames() {
  const Electronics = "electronics";
  const Jewellery = "jewelery";
  const mensClothing = "men's%20clothing";
  const WomensClothing = "women's%20clothing";
  return (
    <>
      <div className="collapse navbar-collapse navbar-brand container navbar ml-auto">
        <Link className="eachCategoryName" to={"/"}>
          All
        </Link>
        <Link
          className="eachCategoryName"
          to={"/cat/" + Electronics}
        >
          Electronics
        </Link>
        <Link
          className="eachCategoryName"
          to={"/cat/" + Jewellery}
        >
          Jewellery
        </Link>
        <Link
          className="eachCategoryName"
          to={"/cat/" + mensClothing}
        >
          Men's Clothing
        </Link>
        <Link
          className="eachCategoryName"
          to={"/cat/" + WomensClothing}
        >
          Women's clothing
        </Link>
      </div>
    </>
  );
}
export default CategoryNames;
