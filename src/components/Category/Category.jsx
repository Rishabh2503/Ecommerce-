import "./Category.scss";
import cart1 from "../../assets/category/cat-1.jpg"
const Category = () => {
    return <div className="shop-by-category">
        <div className="categories">
            <div className="category">
              <img src={cart1} alt="cart" />
            </div>
            <div className="category">
              <img src={cart1} alt="cart" />
            </div>
            <div className="category">
              <img src={cart1} alt="cart" />
            </div>
            <div className="category">
              <img src={cart1} alt="cart" />
            </div>
        </div>
    </div>;
};

export default Category;
