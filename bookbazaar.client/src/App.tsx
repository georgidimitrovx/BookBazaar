import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import BookPage from "./pages/BookPage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/checkout/Checkout";
import SearchPage from "./pages/SearchPage";
import GenrePage from "./pages/GenrePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/book/:id" element={<BookPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/genre" element={<GenrePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;