import "./App.css";
import io from "socket.io-client";
import { useState, useEffect } from "react";
import Chat from "./Chat";

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };
  useEffect(() => {
    var x = window.location.href;
    var u = new URL(x);
    setRoom(u.searchParams.get("id"));
  }, []);
  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join The Room</h3>
          <input
            type="text"
            placeholder="Enter Username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input type="text" placeholder={room} disabled />
          <button onClick={joinRoom}>Join The Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
