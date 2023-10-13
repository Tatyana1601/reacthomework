import { Route, Routes } from "react-router-dom";
import "./App.css";
import Post from "./pages/Post";
import Home from "./pages/Home";
import Header from "./pages/Header";
import PageNotFound from "./pages/PageNotFound";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/posts" element={<Home />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <footer className="footer">Footer</footer>
    </>


  )
}
export default App;
