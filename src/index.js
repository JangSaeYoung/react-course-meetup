import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavoritePage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="all-meetup" element={<AllMeetupsPage />} />
      <Route path="new-meetup" element={<NewMeetupPage />} />
      <Route path="favorites" element={<FavoritePage />} />
    </Routes>
  </BrowserRouter>
);
