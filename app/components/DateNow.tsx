'use client'

export default function DateNow() {
    const dateNow = new Date();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return (
        <p className="text-neutral-0 text-center">{dayNames[dateNow.getDay()]}, {monthNames[dateNow.getMonth()]} {dateNow.getDate()}, {dateNow.getFullYear()}</p>
    );
}