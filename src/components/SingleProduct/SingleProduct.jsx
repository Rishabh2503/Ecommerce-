import RelatedProducts from "./RelatedProducts/RelatedProducts";
import "./SingleProduct.scss";
import{FaCartPlus, 
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
    FaPinterest,
    FaTwitter

} from "react-icons/fa";
import prod from "../../assets/products/earbuds-prod-1.webp"

const SingleProduct = () => {
    return <div className="single-product-main-content">
        <div className="layout">
        <div className="single-product-page">
        <div className="left">
            <img src={prod} alt="prod" />
        </div>
        <div className="right">
            <span className="name">Product name</span>
            <span className="price">Price</span>
            <span className="desc">Product desc</span>
            <div className="cart-buttons">
                <div className="quantity-buttons">
                    <span>-</span>
                    <span>6</span>
                    <span>+</span>
                </div>
                <button className="add-to-cart-button">
                    <FaCartPlus size={20} />
                    ADD to Cart
                </button>
            </div>
            <span className="divider" />
            <div className="info-item">
                <span className="text-bold">
                Category:
                <span>Headphone</span>
                </span>
                <span className="text-bold">
                Share:
                <span className="social-icons">
                    <FaFacebookF size={16} />
                    <FaTwitter size={16} />
                    <FaInstagram size={16} />
                    <FaLinkedin size={16} />
                    <FaPinterest size={16} />
                </span>
                </span>
            </div>
        </div>
        </div>
        <RelatedProducts />

        </div>
    </div>;
};

export default SingleProduct;
