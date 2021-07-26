import { React, useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import { createSlots } from "../functions/generateData";

export default function Booking() {
  const [dateSelected, setDateSelected] = useState(false);
  const [slots, setSlots] = useState([]);
  const [slotsForDate, setSlotsForDate] = useState(createSlots());

  useEffect(() => {
    dateSelected === false
      ? setSlots(["Please sekect a date"])
      : setSlots(slotsForDate);
  }, [dateSelected, slotsForDate]);

  const handleDateSelection = () => {
    setDateSelected(true);
  };

  return (
    <div>
      <h1>This is Booking Page</h1>
      <form>
        <label>Select Date</label>
        <input
          type="date"
          placeholder="Select Date"
          onChange={handleDateSelection}
        ></input>
        <br></br>
        <label>Select Slot</label>
        <Dropdown values={slots} />
        <br></br>
        <button>
          <a href="/add-info">Book</a>
        </button>
        <button>
          <a href="/">Cancel</a>
        </button>
      </form>
    </div>
  );
}
