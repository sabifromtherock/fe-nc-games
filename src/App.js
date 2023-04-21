import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ReviewList from "./components/ReviewList";
import SingleReview from "./components/SingleReview";
import CategoryList from "./components/CategoryList";
import NavBar from "./components/NavBar";
import CategoryReviews from "./components/CategoryReviews";
import UsersDropdownMenu from "./components/UsersDropdownMenu";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");

  return (
    <div className="App">
      <Header user={user} />
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<UsersDropdownMenu user={user} setUser={setUser} />}
        />
        <Route path="/reviews" element={<ReviewList />} />
        <Route
          path="/reviews/:review_id"
          element={<SingleReview user={user} />}
        />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/categories/:category" element={<CategoryReviews />} />
      </Routes>
    </div>
  );
}

export default App;
