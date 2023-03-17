import prod from "../../../assets/products/earbuds-prod-1.webp"

import { MdClose } from "react-icons/md";
import "./Search.scss";
const Search = ({setShowSearch}) => {
    return (
    <div className="search-modal">
        <div className="form-field">
            <input 
            type="text"
            autoFocus
            placeholder="Search For Products"
            />
            <MdClose onClick={() => setShowSearch(false)}/>
        </div>
        <div className="search-result-content">
            <div className="search-results">
                <div className="search-result-item">
                <div className="image-container">
                <img src={prod} alt=""></img>
            </div>
            <div className="prod-details">
                <span className="name">Product name</span>
                <span className="desc">Product desc</span>
                
            </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Search;
