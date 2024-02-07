import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import BookPage from "./pages/BookPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/book/:id" element={<BookPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;