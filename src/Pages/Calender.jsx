import React from "react";
import Breadcrumb from "../Breadcrumb";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // for drag-n-drop

const Calender = () => {
  return (
    <div className="h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      {/* Header */}
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Calender</p>
          <Breadcrumb />
        </div>
      </div>
      <div className="h-max w-full mt-6 p-4 rounded bg-white">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          initialDate="2023-02-01" 
          headerToolbar={{
            left: "prev,next",
            center: "title",
            right: "timeGridDay,timeGridWeek,dayGridMonth",
          }}
          events={[
            { title: "All Day Event", date: "2023-02-01" },
            { title: "Long Event", start: "2023-02-06", end: "2023-02-09" },
            { title: "Conference", start: "2023-02-13", end: "2023-02-15" },
            { title: "Meeting", start: "2023-02-13T16:00:00" },
            { title: "Birthday Party", start: "2023-02-14T12:30:00" },
            { title: "Repeating Event", start: "2023-02-09T21:30:00" },
          ]}
        />
      </div>
    </div>
  );
};

export default Calender;
