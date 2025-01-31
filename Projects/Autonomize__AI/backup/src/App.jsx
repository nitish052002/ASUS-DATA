import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="pages-section">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
