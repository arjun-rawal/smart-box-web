import { PlainList } from "flatlist-react";
import React, { useState } from "react";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  let dict = {};

  function addItem() {
    var taskName = prompt("Enter Task Name: ");
    var taskDetails = prompt("Enter details/description");
    dict[taskName] = taskDetails;
    setTasks(tasks.concat(taskName + "😎" + dict[taskName]));
  }

  function renderTask(item) {
    var split = item.split("😎");
    return (
      <a
        className="card"
        style={{
          margin: "0.2rem",
          "flex-basis": "auto",
          padding: " 1rem",
          "text-align": "center",
          border: "1px solid #eaeaea",
          "border-radius": "10px",
        }}
      >
        <h3>{split[0]}</h3>
        <p>{split[1]}</p>
        <img
          src="https://static.thenounproject.com/png/1416596-200.png"
          width="20rem"
          height="20rem"
        />
        <img
          src="https://i.pinimg.com/474x/c7/c1/bd/c7c1bd17a0e462b5cd6f46815f37abcd.jpg"
          width="20rem"
          height="20rem"
        />
      </a>
    );
  }
  function ble() {
    navigator.bluetooth
      .requestDevice({
        acceptAllDevices: true,
        optionalServices: ["9f5cd3d8-1735-4301-80af-b0c41c4aac5e"], // Required to access service later.
      })
      .then((device) => {
        return device.gatt.connect();
      })
      .then((server) => {
        return server.getPrimaryService("9f5cd3d8-1735-4301-80af-b0c41c4aac5e");
      })
      .then((service) => {
        return service.getCharacteristic(
          "b0956118-a560-47d8-8a99-ea714782bd37"
        );
      })
      .then((characteristic) => {
        x = characteristic;
        return lockBlue();

        // characteristic.writeValue(Uint8Array.of(1));
      })
      .catch((error) => {
        setTexts("" + error);
      });
  }
  function lockBlue() {
    x.writeValue(Uint8Array.of(1));
  }
  const [testing, setTexts] = useState("Pair with Smart Box in the bluetooth");

  function classroomSync() {}

  return (
    <div className="container">
      <main>
        <h1>Dashboard</h1>
        <div className="grid">
          <a className="card">
            <h3>Start a Productivity Session&rarr;</h3>
            <p>Connect to Smart Box, add tasks, and more</p>
          </a>
          <a className="card">
            <h3>View Previous Productivity Sessions&rarr;</h3>
          </a>
        </div>

        {/* <PlainList list={tasks} renderItem={(item) => renderTask(item)} /> */}
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
