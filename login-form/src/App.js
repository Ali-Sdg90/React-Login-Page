import { Route, Routes } from "react-router-dom";
import "./App.css";
import FirstPage from "./components/FirstPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
    return (
        <div>
            <Routes>
                <Route path="React-Login-Page/signup" element={<SignUp />} />
                <Route path="React-Login-Page/login" element={<Login />} />
                <Route path="React-Login-Page/" element={<FirstPage />} />
            </Routes>
        </div>
    );
}

export default App;
