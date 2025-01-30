import { useState } from "react";
import "./App.css";
import axios from "axios";

function Form() {
  const [userQuery, setUserQuery] = useState("");

  function handleUserQueryChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setUserQuery(e.target.value);
  }

  async function postUserQuery(userQuery: string) {
    try {
      const response = await axios.post("http://localhost:8080/userQuery", {
        userQuery: userQuery,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div>
        <h5>Game Recommend GPT</h5>
        <textarea
          placeholder="Type here..."
          rows={5}
          cols={40}
          onChange={handleUserQueryChange}
        ></textarea>
        <button
          onClick={() => {
            postUserQuery(userQuery);
          }}
        >
          OK
        </button>
        <p>{userQuery}</p>
      </div>
    </>
  );
}

function MainPage() {
  return (
    <>
      <Form></Form>
    </>
  );
}
export default MainPage;
