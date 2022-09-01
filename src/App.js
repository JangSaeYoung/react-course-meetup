import { Link, Outlet } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavoritePage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <Link to="/">
        <AllMeetupsPage />
      </Link>
      <Link to="/new-meetup">
        <NewMeetupPage />
      </Link>
      <Link to="/favorites">
        <FavoritePage />
      </Link>
      <Outlet />
    </div>
  );
}

export default App;
