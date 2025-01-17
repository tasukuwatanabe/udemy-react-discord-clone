import { useEffect } from "react";
import "./App.scss";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";
import Sidebar from "./components/sidebar/Sidebar";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";

function App() {
  const user = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

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
