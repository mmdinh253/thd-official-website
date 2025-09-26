import Calendar from 'react-calendar';
import '../components/Calendar.css';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
    // Helper: strip time, keep only date
    const toDateOnly = (date) => {
        const d = new Date(date);
        d.setHours(0, 0, 0, 0); // reset time to midnight
        return d;
    };

    // Events of the year
    const events = [
        {
            start: new Date("October 5, 2025 13:45:00"),
            end: new Date("October 5, 2025 16:00:00"),
            title: "Doan TNTT THD Anniversary"
        },
        {
            start: new Date("October 26, 2025 13:45:00"),
            end: new Date("October 26, 2025 19:45:00"),
            title: "Bingo Night"
        },
        {
            start: new Date("November 30, 2025"),
            end: new Date("November 30, 2025"),
            title: "No TNTT - Thanksgiving Break"
        },
        {
            start: new Date("December 13, 2025 09:00:00"),
            end: new Date("December 14, 2025 16:00:00"),
            title: "TNTT Tinh Tam (Retreat)"
        },
        {
            start: new Date("December 21, 2025"),
            end: new Date("January 11, 2026"),
            title: "No TNTT - Winter Break"
        },
        {
            start: new Date("February 15, 2026"),
            end: new Date("February 15, 2026"),
            title: "No TNTT - Tet"
        },
        {
            start: new Date("April 5, 2026"),
            end: new Date("April 5, 2026"),
            title: "No TNTT - Easter Egg Hunt"
        },
        {
            start: new Date("May 3, 2026"),
            end: new Date("May 3, 2026"),
            title: "Le Bon Mang Cong Doan Thanh Giuse"
        },
        {
            start: new Date("May 10, 2026"),
            end: new Date("May 10, 2026"),
            title: "Mother's Day"
        },
        {
            start: new Date("May 22, 2026"),
            end: new Date("May 24, 2026"),
            title: "Sa Mac Huan Luyen Doi Truong/Doi Pho"
        },
        {
            start: new Date("May 24, 2026"),
            end: new Date("May 24, 2026"),
            title: "No TNTT - Memorial Day"
        },
        {
            start: new Date("June 14, 2026"),
            end: new Date("June 14, 2026"),
            title: "Last Day of Sinh Hoat"
        },
        {
            start: new Date("June 19, 2026"),
            end: new Date("June 21, 2026"),
            title: "Sa Mac Doan"
        },
    ];

    // Check if a calendar date falls within an event's range
    const findEventForDate = (date) => {
        const day = toDateOnly(date);
        return events.find(event => {
            const start = event.start ? toDateOnly(event.start) : toDateOnly(event.date);
            const end = event.end ? toDateOnly(event.end) : start; // fallback to single day
            return day >= start && day <= end;
        });
    };

    return (
        <div className='app'>
            <h1 className='text-center'>Events</h1>
            <div className='calendar-container'>
                <Calendar
                    calendarType="gregory" // weeks start on Sunday
                    value={new Date()} // default to "today"
                    tileClassName={({ date }) => {
                        const event = findEventForDate(date);
                        if (event) {
                            if (event.title.includes("No TNTT")) return "event-noTNTT";
                            return "event-marked";
                        }
                        return "";
                    }}
                    prev2Label={null}
                    next2Label={null}
                    selectRange={false}
                />
            </div>
            <div className='events-list'>
                <h2>Event List</h2>
                <ul>
                    {events.map((event, index) => (
                        <li key={index}>
                            <strong>{event.title}</strong>:{" "}
                            {event.start.toDateString()}
                            {event.end > event.start
                                ? ` → ${event.end.toDateString()}`
                                : ""}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MyCalendar;
