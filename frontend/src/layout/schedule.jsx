import React, { useEffect, useState } from "react";
import axios from "axios";
import "./schedule.css";

const App = () => {
  const [data, setData] = useState({});
  const [rows, setRows] = useState([{ id: Date.now(), date: "", time1: "", time2: "", time3: "" }]);

  const handleAddRow = () => {
    setRows([...rows, { id: Date.now(), date: "", time1: "", time2: "", time3: "" }]);
  };

  useEffect(() => {
    const initialRows = Array.from({ length: 6 }, () => ({
      id: Date.now() + Math.random(),
      date: "",
      time1: "",
      time2: "",
      time3: ""
    }));
    setRows(initialRows);
  }, []);

  const handleChange = (id, field, value) => {

    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, [field]: value } : row
    );
    setRows(updatedRows);

    const updatedData = updatedRows.reduce((acc, row) => {
      const dayIndex = new Date(row.date).getDay();
      if (!acc[dayIndex]) {
        acc[dayIndex] = { date: row.date, time1: "", time2: "", time3: "" };
      }
      acc[dayIndex].time1 = row.time1 || acc[dayIndex].time1;
      acc[dayIndex].time2 = row.time2 || acc[dayIndex].time2;
      acc[dayIndex].time3 = row.time3 || acc[dayIndex].time3;
      return acc;
    }, {});

    setData(updatedData);
  };

  const handleSubmit = async () => {
    try {
      
      const response = await axios.post("http://localhost:3000/addData", JSON.stringify({rows}), {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      console.log(alert('Data submitted successfully'));
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  

  return (
    <div className="wrapper">
      <div className="alert">
        <span
          className="closebtn"
          onClick={(e) => (e.target.parentElement.style.display = "none")}
        >
          &times;&nbsp;
        </span>
        This is an alert box. <br />
        <br />
        <div>
          <a href="./history" style={{ color: "white", textDecoration: "underline" }}>
            Go to Notifications
          </a>
        </div>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <table className="table2">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time 1</th>
              <th>Time 2</th>
              <th>Time 3</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>
                  {`Day ${rows.indexOf(row) + 1}`}
                </td>
                <td className="date">
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={row.date}
                    onChange={(e) => handleChange(row.id, "date", e.target.value)}
                  />
                  <span>
                    {row.date ? new Date(row.date).toLocaleDateString("en-US", { weekday: "long" }) : ""}
                  </span>
                </td>
                {["time1", "time2", "time3"].map((timeField) => (
                  <td  className="field" key={timeField}>
                    <input
                      
                      type="time"
                      value={row[timeField]}
                      onChange={(e) => handleChange(row.id, timeField, e.target.value)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" onClick={handleAddRow}>
          Add
        </button>
        <div className="field">
          <input type="submit" value="Submit" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default App;
