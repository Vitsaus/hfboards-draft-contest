import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { BoardPage } from "./pages/BoardPage";
import { PlayersPage } from "./pages/PlayersPage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="board/:user" element={<BoardPage />} />
          <Route path="players" element={<PlayersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
