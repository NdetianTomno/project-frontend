import React, { useEffect, useState } from 'react';

function KisumuList() {
  const [kisumuList, setKisumuList] = useState([]);

  useEffect(() => {
    // Fetch Kisumu data from backend API
    fetch('http://127.0.0.1:8000/kisumu')
      .then(response => response.json())
      .then(data => setKisumuList(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='kisumu'>
      <h2 >Bookings in Kisumu</h2>
      <ul>
        {kisumuList.map(kisumu => (
          <li key={kisumu.id}>
            Parking Lot: {kisumu.parking_lot}<br />
            Location: {kisumu.location}<br />
            Address: {kisumu.address}<br />
            Slot No: {kisumu.slot_no}<br />
            Price: {kisumu.price}<br />
            Time In: {kisumu.time_in}<br />
            Time Out: {kisumu.time_out}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KisumuList;
