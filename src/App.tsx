// import { useSelector } from "react-redux";
import "./App.scss";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  // const user = useSelector((state) => state.user);
  const user = null;

  return (
    <div className="App">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
