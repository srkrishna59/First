import React, { useState, useEffect } from "react";
import styles from "./Calendar.module.css";
export default function Demo() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysInMonth = (year:any, month:any) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getMonthData = (year:any, month:any) => {
    const totalDays = daysInMonth(year, month);
    const firstDay = new Date(year, month, 1).getDay();

    const data = [];
    let day = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          week.push(null);
        } else if (day > totalDays) {
          break;
        } else {
          week.push(new Date(year, month, day++));
        }
      }
      data.push(week);
    }

    return data;
  };

  const handleDateClick = (date:any) => {
    setSelectedDate(date);
  };

  const handlePrevMonth = () => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1),
    );
  };

  const renderCell = (date:any) => {
    if (!date) return <td></td>;
    // console.log(date)

    const classNames = [styles.cell];
    if (date.getMonth() !== selectedDate.getMonth()) {
      classNames.push(styles.otherMonth);
    }
    if (date.toDateString() === selectedDate.toDateString()) {
      classNames.push(styles.selected);
    }

    return (
      <td
        key={date.toISOString()}
        className={classNames.join(" ")}
        onClick={() => handleDateClick(date)}
      >
        {date.getDate()}
      </td>
    );
  };

  const renderWeek = (week:any, index:any) => {
    return <tr key={index}>{week.map((date:any) => renderCell(date))}</tr>;
  };

  const renderCalendar = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const monthData = getMonthData(year, month);

    return (
      <table className={styles.calendar}>
        <thead>
          <tr>
            <th colSpan={7} style={{backgroundColor:"white"}}>
              <button className={styles.buttonStyles} onClick={handlePrevMonth}>&lt;</button>{" "}
              {/* Previous month button */}
              {selectedDate.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
              <button className={styles.buttonStyles}  onClick={handleNextMonth}>&gt;</button>{" "}
              {/* Next month button */}
            </th>
          </tr>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>{monthData.map((week, index) => renderWeek(week, index))}</tbody>
      </table>
    );
  };
  return <div>{renderCalendar()}</div>;
}
