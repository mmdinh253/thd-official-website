import React, { useState, useEffect, useRef } from 'react';
import { DayPilot, DayPilotMonth } from '@daypilot/daypilot-lite-react';
import "../components/MonthlyCalendar.css";

const MonthlyCalendar = () => {
    const [events, setEvents] = useState([]); 
    const [startDate, setStartDate] = useState(DayPilot.Date.today());
    const [popupEvent, setPopupEvent] = useState(null);
    const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0});
    const [currentDay, setCurrentDay] = useState(DayPilot.Date.today().toString());
    const popupRef = useRef(null);

    useEffect(() => {
        setEvents([
            { id: 1, text: "Start of Thieu Nhi", start: "03/23/2025", end: "03/23/2025", backColor: "#d5663e", timeStart: "1:30pm",  timeEnd: "4:00pm"},
            { id: 2, text: "Hop Phung Vu", start: "2025-04-27", end: "2025-04-27", backColor: "#d5663e", timeStart: "1:30pm",  timeEnd: "2:30pm" },
            { id: 3, text: "EASTER", start: "2025-04-20", end: "2025-04-20", backColor: "#9933ff", timeStart: "12:30am",  timeEnd: "12:30am" },
            { id: 4, text: "EASTER EGG HUNT", start: "2025-04-20", end: "2025-04-20", backColor: "#9933ff", timeStart: "1:00pm",  timeEnd: "4:00pm" },
            { id: 5, text: "Sa Mac DT/DP", start: "2025-05-23", end: "2025-05-25", backColor: "#3d85c6", timeStart: "1:30pm",  timeEnd: "4:00pm" },
            { id: 6, text: "Sa Mac Doan", start: "2025-06-20", end: "2025-06-22", backColor: "#3d85c6", timeStart: "1:30pm",  timeEnd: "4:00pm" },
        ]);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDay(DayPilot.Date.today().toString());
        }, 60000); // Check every 60 seconds
        return () => clearInterval(interval);
    }, [currentDay]);

    // Extract current month and year
    const dateObj = new Date(startDate);
    dateObj.toLocaleDateString();
    const monthName = dateObj.toLocaleString('default', { month: 'long' });
    const year = dateObj.getFullYear();

    // Handlers to change month and year
    const changeMonth = (offset) => {
        setStartDate((prev) => DayPilot.Date.addMonths(prev, offset));
    };

    const changeYear = (offset) => {
        setStartDate((prev) => DayPilot.Date.addYears(prev, offset));
    };

    const config = {
        eventHeight: 30,
        headerHeight: 30,
        cellHeaderHeight: 25,
        showWeekend: true,
        eventMoveHandling: "Disabled", // Prevents event dragging
        eventResizeHandling: "Disabled", // Prevents resizing

        // Highlight the current day
        // onBeforeCellRender: args => {
        //     const cellDate = args.cell.start.toString(); 
        //     const todayDate = DayPilot.Date.today().toString();

        //     if (cellDate === todayDate) {
        //         args.cell.backColor = "#ffeb3b"; // Highlight today
        //         args.cell.cssClass = "current-day";
        //     }
        // },

        onEventClick: (args) => {
            const { clientX, clientY} = args.originalEvent;

            // Adjust position to prevent overflow
            const adjustLeft = Math.min(clientX, window.innerWidth - 250);
            const adjustTop = Math.min(clientY, window.innerWidth - 200);

            setPopupEvent(args.e.data);
            setPopupPosition({ top: adjustTop, left: adjustLeft });
        }
    };

    return (
        <div>
            {/* Header with Month & Year Navigation */}
            <div className="calendar-header">
                <button onClick={() => changeYear(-1)}>«</button>
                <button onClick={() => changeMonth(-1)}>‹</button>
                <span>{monthName} {year}</span>
                <button onClick={() => changeMonth(1)}>›</button>
                <button onClick={() => changeYear(1)}>»</button>
            </div>

            {/* Calendar Component */}
            <DayPilotMonth
                {...config}
                startDate={startDate.toString()} // Convert DayPilot.Date to string format
                events={events}
            />

            {/* Google Calendar-style Popup */}
            {popupEvent &&
            <div
                ref={popupRef}
                className="event-popup"
                style={{ top: popupPosition.top, left: popupPosition.left}}
            >
                <h3>{popupEvent.text}</h3>
                <p>📅 <strong>Date:</strong> {popupEvent.start} - {popupEvent.end}</p>
                <p>⏰<strong>Time:</strong> {popupEvent.timeStart} - {popupEvent.timeEnd}</p>
                <button onClick={() => setPopupEvent(null)}>Close</button>
            </div>
            }
        </div>
    );
};

export default MonthlyCalendar;
