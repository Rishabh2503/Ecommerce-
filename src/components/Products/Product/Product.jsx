import "./Product.scss";
import {useNavigate} from "react-router-dom"
const Product = ({id,data}) => {
    const navigate = useNavigate();
    return <div className="product-card">
        <div className="thumbnail" onClick={() => navigate("/product/" +id)}>
        <img src={process.env.REACT_APP_STRIPE_APP_DEV_URL + data.img.data[0].attributes.url} alt="" />

        </div>
        <div className="prod-details">
            <span className="name">{data.title}</span>
            <span className="price">&#8377;{data.price}</span>
        </div>
    </div>;
};

export default Product;
