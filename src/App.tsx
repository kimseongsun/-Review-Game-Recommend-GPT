import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const google_logo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png";
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Game Recommend GPT</h1>
      <p className="read-the-docs">
        This service will recommend you a game based on your preferences.
        <br></br>Feel free to explore and find your next favorite game!
      </p>
      <div className="card">
        <button>
          <img src={google_logo} className="logo" alt="Vite logo" />
          <br></br>
          Login With Google
        </button>
      </div>
    </>
  );
}

export default App;
