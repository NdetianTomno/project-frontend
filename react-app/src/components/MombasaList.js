import React, { useEffect, useState } from 'react';

function MombasaList() {
  const [mombasaList, setMombasaList] = useState([]);

  useEffect(() => {
    // Fetch Mombasa data from backend API
    fetch('http://127.0.0.1:8000/mombasa')
      .then(response => response.json())
      .then(data => setMombasaList(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='mombasa'>
      <h2 >Bookings in Mombasa</h2>
      <ul>
        {mombasaList.map(mombasa => (
          <li key={mombasa.id}>
            Parking Lot: {mombasa.parking_lot}<br />
            Location: {mombasa.location}<br />
            Address: {mombasa.address}<br />
            Slot No: {mombasa.slot_no}<br />
            Price: {mombasa.price}<br />
            Time In: {mombasa.time_in}<br />
            Time Out: {mombasa.time_out}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MombasaList;
