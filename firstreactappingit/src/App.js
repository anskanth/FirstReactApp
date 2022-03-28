import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
    return <>
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/SecondPage">Second Page</Link>
            </nav>
            <Routes>
                <Route exact path="/" element={<Home />}>
                </Route>
                <Route exact path="/SecondPage" element={<SecondPage />}>
                </Route>
            </Routes>
        </BrowserRouter>
    </>;
}

function Home() {
    // React.useEffect(
    //     () => {
    //         fetch("https://google.com")
    //     }
    // );
    return (
        <div>
            <h1>This is the Home Page</h1>
        </div>
    );
}

function SecondPage() {
    return (
        <div>
            <h1>This is Second Page</h1>
        </div>
    );

}

export default App;