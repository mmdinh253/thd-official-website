import React, { useState, useEffect } from 'react';
import { DayPilot, DayPilotMonth } from '@daypilot/daypilot-lite-react';
import "../components/MonthlyCalendar.css";

const MonthlyCalendar = () => {
    const [calendar, setCalendar] = useState(null);
    const [events, setEvents] = useState([]); 
    const [startDate, setStartDate] = useState(DayPilot.Date.today());
    const [currentDay, setCurrentDay] = useState(DayPilot.Date.today().toString());

    useEffect(() => {
        const interval = setInterval(() => {
            const today = DayPilot.Date.today().toString();
            if (today !== currentDay) {
                setCurrentDay(today);
            }
        }, 60000); // Check every 60 seconds
        return () => clearInterval(interval);
    }, [currentDay]);

    // Extract current month and year
    const dateObj = new Date(startDate);
    const monthName = dateObj.toLocaleString('default', { month: 'long' });
    const year = dateObj.getFullYear();

    // Handlers to change month and year
    const changeMonth = (offset) => {
        // const newDate = new Date(dateObj.setMonth(dateObj.getMonth() + offset));
        // setStartDate(newDate.toISOString().split('T')[0]);
        setStartDate(prev => {
            const newDate = new Date(prev);
            newDate.setMonth(newDate.getMonth() + offset);
            return newDate.toISOString().split('T')[0];
        });
    };

    const changeYear = (offset) => {
        setStartDate(prev => {
            const newDate = new Date(prev);
            newDate.setFullYear(newDate.getFullYear() + offset);
            return newDate.toISOString().split('T')[0];
        });
    };

    const config = {
        eventHeight: 30,
        headerHeight: 30,
        cellHeaderHeight: 25,

        // Highlight the current day
        onBeforeCellRender: args => {
            const cellDate = args.cell.start.toString(); 
            const todayDate = DayPilot.Date.today().toString();

            if (cellDate === todayDate) {
                args.cell.backColor = "#ffeb3b"; // Highlight today
                args.cell.cssClass = "current-day";
            }
        },
    };

    useEffect(() => {
        setEvents([
            { id: 1, text: "Start of Thieu Nhi", start: "2025-03-23", end: "2025-03-23", backColor: "#d5663e" },
            { id: 2, text: "Event 2", start: "2025-11-08", end: "2025-11-09", backColor: "#ecb823" },
            { id: 3, text: "Event 3", start: "2025-11-08", end: "2025-11-08", backColor: "#6aa84f" },
            { id: 4, text: "Event 4", start: "2025-11-14", end: "2025-11-16", backColor: "#3d85c6" },
            { id: 5, text: "Event 5", start: "2025-11-15", end: "2025-11-17", backColor: "#3d85c6" },
        ]);
    }, []);

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
                startDate={startDate}
                events={events}
                controlRef={setCalendar}
            />
        </div>
    );
};

export default MonthlyCalendar;
