import React, { useEffect, useState } from 'react';

function MombasaList() {
  const [mombasaList, setMombasaList] = useState([]);
  const [newMombasa, setNewMombasa] = useState({
    parking_lot: '',
    location: '',
    address: '',
    slot_no: '',
    price: '',
    time_in: '',
    time_out: ''
  });
  const [selectedMombasa, setSelectedMombasa] = useState(null);

  useEffect(() => {
    fetchMombasaData();
  }, []);

  const fetchMombasaData = () => {
    fetch('http://127.0.0.1:8000/mombasa')
      .then(response => response.json())
      .then(data => setMombasaList(data))
      .catch(error => console.log(error));
  };

  const createMombasa = () => {
    fetch('http://127.0.0.1:8000/mombasa', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMombasa),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setNewMombasa({
          parking_lot: '',
          location: '',
          address: '',
          slot_no: '',
          price: '',
          time_in: '',
          time_out: ''
        });
        fetchMombasaData();
      })
      .catch(error => console.log(error));
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewMombasa(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const deleteMombasa = id => {
    fetch(`http://127.0.0.1:8000/mombasa/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        fetchMombasaData();
      })
      .catch(error => console.log(error));
  };

  const selectMombasa = mombasa => {
    setSelectedMombasa(mombasa);
    setNewMombasa(mombasa);
  };

  const updateMombasa = () => {
    fetch(`http://127.0.0.1:8000/mombasa/${selectedMombasa.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMombasa),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setNewMombasa({
          parking_lot: '',
          location: '',
          address: '',
          slot_no: '',
          price: '',
          time_in: '',
          time_out: ''
        });
        setSelectedMombasa(null);
        fetchMombasaData();
      })
      .catch(error => console.log(error));
  };

  return (
    <div className='mombasa'>
      <h2>Bookings in Mombasa</h2>
      <ul>
        {mombasaList.map(mombasa => (
          <li key={mombasa.id}>
            Parking Lot: {mombasa.parking_lot}<br />
            Location: {mombasa.location}<br />
            Address: {mombasa.address}<br />
            Slot No: {mombasa.slot_no}<br />
            Price: {mombasa.price}<br />
            Time In: {mombasa.time_in}<br />
            Time Out: {mombasa.time_out}<br />
            <button onClick={() => deleteMombasa(mombasa.id)}>Delete</button>
            <button onClick={() => selectMombasa(mombasa)}>Update</button>
          </li>
        ))}
      </ul>
      <h2>Create a New Booking</h2>
      <form onSubmit={selectedMombasa ? updateMombasa : createMombasa}>
        <label>
          Parking Lot:
          <input
            type='text'
            name='parking_lot'
            value={newMombasa.parking_lot}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type='text'
            name='location'
            value={newMombasa.location}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type='text'
            name='address'
            value={newMombasa.address}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Slot No:
          <input
            type='text'
            name='slot_no'
            value={newMombasa.slot_no}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type='text'
            name='price'
            value={newMombasa.price}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Time In:
          <input
            type='text'
            name='time_in'
            value={newMombasa.time_in}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Time Out:
          <input
            type='text'
            name='time_out'
            value={newMombasa.time_out}
            onChange={handleInputChange}
          />
        </label>
        <br />
        {selectedMombasa ? (
          <button type='button' onClick={updateMombasa}>Update</button>
        ) : (
          <button type='submit'>Create</button>
        )}
      </form>
    </div>
  );
}

export default MombasaList;
