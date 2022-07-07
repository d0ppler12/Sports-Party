import "./App.css";
import io from "socket.io-client";
import { useState, useEffect } from "react";
import Chat from "./Chat";

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [dataisThere, SetdataisThere] = useState(null);
  const [position, Setposition] = useState(null);
  const getdetails = async () => {
    const x = await fetch("https://cricket-api-sportsparty.herokuapp.com/");
    const data = await x.json();
    SetdataisThere(data);
  };
  getdetails();
  setInterval(getdetails, 120000);
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
    Setposition(u.searchParams.get("pos"));
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
        <Chat
          socket={socket}
          username={username}
          room={room}
          data={dataisThere}
          position={position}
        />
      )}
    </div>
  );
}

export default App;
