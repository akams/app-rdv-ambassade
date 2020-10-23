import React, { useState } from 'react';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';

const localizer = momentLocalizer(moment);

function Rdv() {
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvent] = useState([]);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title) {
      setEvent([
        ...events,
        {
          start,
          end,
          title,
        },
      ]);
    }
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <h1>rdv page</h1>
      <div>
        <Calendar
          culture="fr"
          events={events}
          defaultDate={new Date()}
          localizer={localizer}
          views={['week', 'agenda']}
          defaultView={Views.WEEK}
          selectable
          onSelectEvent={(event) => alert(event.title)}
          onSelectSlot={handleSelect}
        />
      </div>
    </>
  );
}

export default Rdv;
