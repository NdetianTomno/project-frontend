import React, { useEffect, useState } from 'react';

function NairobiList() {
  const [nairobiList, setNairobiList] = useState([]);
  const [newNairobi, setNewNairobi] = useState({
    parking_lot: '',
    location: '',
    address: '',
    slot_no: '',
    price: '',
    time_in: '',
    time_out: ''
  });
  const [selectedNairobi, setSelectedNairobi] = useState(null);

  useEffect(() => {
    fetchNairobiData();
  }, []);

  const fetchNairobiData = () => {
    fetch('http://127.0.0.1:8000/nairobi')
      .then(response => response.json())
      .then(data => setNairobiList(data))
      .catch(error => console.log(error));
  };

  const createNairobi = () => {
    fetch('http://127.0.0.1:8000/nairobi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNairobi),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setNewNairobi({
          parking_lot: '',
          location: '',
          address: '',
          slot_no: '',
          price: '',
          time_in: '',
          time_out: ''
        });
        fetchNairobiData();
      })
      .catch(error => console.log(error));
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewNairobi(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const deleteNairobi = id => {
    fetch(`http://127.0.0.1:8000/nairobi/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        fetchNairobiData();
      })
      .catch(error => console.log(error));
  };

  const selectNairobi = nairobi => {
    setSelectedNairobi(nairobi);
    setNewNairobi(nairobi);
  };

  const updateNairobi = () => {
    fetch(`http://127.0.0.1:8000/nairobi/${selectedNairobi.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNairobi),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setNewNairobi({
          parking_lot: '',
          location: '',
          address: '',
          slot_no: '',
          price: '',
          time_in: '',
          time_out: ''
        });
        setSelectedNairobi(null);
        fetchNairobiData();
      })
      .catch(error => console.log(error));
  };

  return (
    <div className='nairobi'>
      <h2>Bookings in Nairobi</h2>
      <ul>
        {nairobiList.map(nairobi => (
          <li key={nairobi.id}>
            Parking Lot: {nairobi.parking_lot}<br />
            Location: {nairobi.location}<br />
            Address: {nairobi.address}<br />
            Slot No: {nairobi.slot_no}<br />
            Price: {nairobi.price}<br />
            Time In: {nairobi.time_in}<br />
            Time Out: {nairobi.time_out}<br />
            <button onClick={() => deleteNairobi(nairobi.id)}>Delete</button>
            <button onClick={() => selectNairobi(nairobi)}>Update</button>
          </li>
        ))}
      </ul>
      <h2>Create a New Booking</h2>
      <form onSubmit={selectedNairobi ? updateNairobi : createNairobi}>
        <label>
          Parking Lot:
          <input
            type='text'
            name='parking_lot'
            value={newNairobi.parking_lot}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type='text'
            name='location'
            value={newNairobi.location}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type='text'
            name='address'
            value={newNairobi.address}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Slot No:
          <input
            type='text'
            name='slot_no'
            value={newNairobi.slot_no}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type='text'
            name='price'
            value={newNairobi.price}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Time In:
          <input
            type='text'
            name='time_in'
            value={newNairobi.time_in}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Time Out:
          <input
            type='text'
            name='time_out'
            value={newNairobi.time_out}
            onChange={handleInputChange}
          />
        </label>
        <br />
        {selectedNairobi ? (
          <button type='button' onClick={updateNairobi}>Update</button>
        ) : (
          <button type='submit'>Create</button>
        )}
      </form>
    </div>
  );
}

export default NairobiList;
