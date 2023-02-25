import { BrowserRouter,Routes, Route } from "react-router-dom";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import AppContext from './utils/context'



function App() {
    return(
        <AppContext>
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/category/:id' element={<Category />}></Route>
                <Route path='/product/:id' element={<SingleProduct />}></Route>
            </Routes>
            <Newsletter />
            <Footer />
        </BrowserRouter>
        </AppContext>
    )
}

export default App;
