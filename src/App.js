import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import MovieDetail from "./components/MovieDetail";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <img src="/image/logo.png" alt="logo" style={{ width: "70px" }} />
        <h4 className="headNav">Top 10 IMDB movies</h4>
      </header>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/movie-list" element={<MovieList />} />
        <Route path="/movie-detail/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}
export default App;
