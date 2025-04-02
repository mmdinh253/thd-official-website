import React, { useEffect, useState } from "react";
import {DayPilot,
  // DayPilotCalendar,
  DayPilotMonth
} from "@daypilot/daypilot-lite-react";
import "./Calendar.css";

const Calendar = () => {
  // const [view, setView] = useState("Week");
  const [startDate, setStartDate] = useState(DayPilot.Date.today());
  const [events, setEvents] = useState([]);

  const eventCategories = {
    "Sinh Hoat": "##88E788",
    "Holy Week": "#800080",
    "Meeting": "#ffffff",
    "Fundraiser": "#ffcc00",
    "Training": "#0000ff",
    "No Thieu Nhi": "#ff0000",
    "Retreat": "#800080",
    "Holiday": "#ffd700",
    "Camp": "#ffd700",
  };

  useEffect(() => {
    const data = [
      { id: 1, text: "First Day of Sinh Hoat", category: "Sinh Hoat", start: "2025-03-23T13:30:00", end: "2025-03-23T16:00:00" },
      { id: 2, text: "Holy Week (Triduum)", category: "Holy Week", start: "2025-04-17T00:00:00", end: "2025-04-19T23:59:59" },
      { id: 3, text: "Holy Thursday", category: "Holy Week", start: "2025-04-17T00:00:00", end: "2025-04-17T23:59:59" },
      { id: 4, text: "Good Friday", category: "Holy Week", start: "2025-04-18T00:00:00", end: "2025-04-18T23:59:59" },
      { id: 5, text: "Easter Vigil", category: "Holy Week", start: "2025-04-19T00:00:00", end: "2025-04-19T23:59:59" },
      { id: 5, text: "Easter", category: "Holiday", start: "2025-04-20T00:00:00", end: "2025-04-20T23:59:59" },
      { id: 6, text: "Mother's Day", category: "Holiday", start: "2025-05-11T00:00:00", end: "2025-05-11T23:59:59" },
      { id: 7, text: "DTDP training", category: "Training", start: "2025-05-03T00:00:00", end: "2025-05-03T23:59:59" },
      { id: 7, text: "DTDP training", category: "Training", start: "2025-05-10T00:00:00", end: "2025-05-10T23:59:59" },
      { id: 7, text: "DTDP training", category: "Training", start: "2025-05-17T00:00:00", end: "2025-05-17T23:59:59" },
      { id: 7, text: "DTDP training camp - with Doan Thanh Giuse", category: "Camp", start: "2025-05-23T00:00:00", end: "2025-05-25T23:59:59" },
      { id: 7, text: "HLHT Cap 3", category: "Camp", start: "2025-06-04T00:00:00", end: "2025-06-08T23:59:59" },
      { id: 8, text: "Memorial Day", category: "Holiday", start: "2025-05-26T00:00:00", end: "2025-05-26T23:59:59" },
      { id: 6, text: "Father's Day", category: "Holiday", start: "2025-06-15T00:00:00", end: "2025-06-15T23:59:59" },
      { id: 7, text: "Camp with Doan Thanh Gia", category: "Camp", start: "2025-06-20T00:00:00", end: "2025-06-22T23:59:59" },
      { id: 7, text: "Summer Break - No TNTT", category: "No Thieu Nhi", start: "2025-06-29T00:00:00", end: "2025-08-31T23:59:59" },
    ];

    // Assign colors dynamically based on category
    const formattedData = data.map(event => ({
      ...event,
      start: new DayPilot.Date(event.start),
      end: new DayPilot.Date(event.end),
      backColor: eventCategories[event.category] || "#cccccc", // Default color if category not found
    }));

    setEvents(formattedData);
  }, []);

  const handlePrevious = () => { setStartDate(startDate.addMonths(-1)); };

  const handleNext = () => { setStartDate(startDate.addMonths(1)); };

  return (
    <div className="container">
      <div className="content">
        <div className="toolbar">
          {/* <div className="toolbar-group">
            <button
              onClick={() => setView("Week")}
              className={view === "Week" ? "selected" : ""}
            >
              Week
            </button>
            <button
              onClick={() => setView("Month")}
              className={view === "Month" ? "selected" : ""}
            >
              Month
            </button>
          </div> */}
          <div className="current-month-container">
            <button onClick={handlePrevious} className="standalone">←</button>
            <div className="current-month-title">
              <span className="current-month">
                {startDate.toString("MMMM yyyy")}
              </span>
            </div>
          </div>
          <button onClick={handleNext} className="standalone">→</button>
          <button
            onClick={() => setStartDate(DayPilot.Date.today())}
            className="standalone"
          >
            Today
          </button>
        </div>

        {/* <DayPilotCalendar
          viewType={"Week"}
          startDate={startDate}
          events={events}
          visible={view === "Week"}
          durationBarVisible={false}
          eventMoveHandling={"Disabled"}
          eventResizeHandling={"Disabled"}
          timeRangeSelectedHandling={"Disabled"}
        /> */}
        <DayPilotMonth
          startDate={startDate}
          events={events}
          // visible={view === "Month"}
          eventBarVisible={false}
          eventMoveHandling={"Disabled"}
          eventResizeHandling={"Disabled"}
          timeRangeSelectedHandling={"Disabled"}
        />

        {/* Color Legend */}
        <div className="legend">
          {Object.entries(eventCategories).map(([category, color]) => (
            <div key={category} className="legend-item">
              <span className="color-box" style={{ backgroundColor: color }}></span>
              <span>{category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
