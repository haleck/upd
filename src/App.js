import './App.css';
import {Route, Routes} from "react-router-dom";
import Hello from "./pages/hello";
import Upload from "./pages/upload";
import Main from "./pages/main";
import Success from "./pages/success";
import Error from "./pages/error"

function App() {
    return (
        <Routes>
            <Route path="hello" element={<Hello/>}/>
            <Route path="upload" element={<Upload/>}/>
            <Route path="main" element={<Main/>}/>
            <Route path="success" element={<Success/>}/>
            <Route path="error" element={<Error/>}/>
        </Routes>
    );
}

export default App;
