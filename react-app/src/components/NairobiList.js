import React, { useEffect, useState } from 'react';

function NairobiList() {
  const [nairobiList, setNairobiList] = useState([]);

  useEffect(() => {
    // Fetch Nairobi data from backend API
    fetch('http://127.0.0.1:8000/nairobi')
      .then(response => response.json())
      .then(data => setNairobiList(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='nairobi'>
      <h2 >Bookings in Nairobi</h2>
      <ul>
        {nairobiList.map(nairobi => (
          <li key={nairobi.id}>
            Parking Lot: {nairobi.parking_lot}<br />
            Location: {nairobi.location}<br />
            Address: {nairobi.address}<br />
            Slot No: {nairobi.slot_no}<br />
            Price: {nairobi.price}<br />
            Time In: {nairobi.time_in}<br />
            Time Out: {nairobi.time_out}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NairobiList;
