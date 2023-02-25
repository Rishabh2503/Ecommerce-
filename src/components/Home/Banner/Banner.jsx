import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"
const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
            <h1> Sales</h1>
            <p>
            orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
            <div className="ctas">
                <div className="banner-cta">Read More</div>
                <div className="banner-cta v2">Shop Now</div>
            </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="banner"/>
        </div>
    </div>;
};

export default Banner;
