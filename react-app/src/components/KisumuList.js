import React, { useEffect, useState } from 'react';

function KisumuList() {
  const [kisumuList, setKisumuList] = useState([]);
  const [newKisumu, setNewKisumu] = useState({
    parking_lot: '',
    location: '',
    address: '',
    slot_no: '',
    price: '',
    time_in: '',
    time_out: ''
  });
  const [selectedKisumu, setSelectedKisumu] = useState(null);

  useEffect(() => {
    fetchKisumuData();
  }, []);

  const fetchKisumuData = () => {
    fetch('http://127.0.0.1:8000/kisumu')
      .then(response => response.json())
      .then(data => setKisumuList(data))
      .catch(error => console.log(error));
  };

  const createKisumu = () => {
    fetch('http://127.0.0.1:8000/kisumu', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newKisumu),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setNewKisumu({
          parking_lot: '',
          location: '',
          address: '',
          slot_no: '',
          price: '',
          time_in: '',
          time_out: ''
        });
        fetchKisumuData();
      })
      .catch(error => console.log(error));
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewKisumu(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const deleteKisumu = id => {
    fetch(`http://127.0.0.1:8000/kisumu/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        fetchKisumuData();
      })
      .catch(error => console.log(error));
  };

  const selectKisumu = kisumu => {
    setSelectedKisumu(kisumu);
    setNewKisumu(kisumu);
  };

  const updateKisumu = () => {
    fetch(`http://127.0.0.1:8000/kisumu/${selectedKisumu.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newKisumu),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setNewKisumu({
          parking_lot: '',
          location: '',
          address: '',
          slot_no: '',
          price: '',
          time_in: '',
          time_out: ''
        });
        setSelectedKisumu(null);
        fetchKisumuData();
      })
      .catch(error => console.log(error));
  };

  return (
    <div className='kisumu'>
      <h2>Bookings in Kisumu</h2>
      <ul>
        {kisumuList.map(kisumu => (
          <li key={kisumu.id}>
            Parking Lot: {kisumu.parking_lot}<br />
            Location: {kisumu.location}<br />
            Address: {kisumu.address}<br />
            Slot No: {kisumu.slot_no}<br />
            Price: {kisumu.price}<br />
            Time In: {kisumu.time_in}<br />
            Time Out: {kisumu.time_out}<br />
            <button onClick={() => deleteKisumu(kisumu.id)}>Delete</button>
            <button onClick={() => selectKisumu(kisumu)}>Update</button>
          </li>
        ))}
      </ul>
      <h2>Create a New Booking</h2>
      <form onSubmit={createKisumu}>
        <label>
          Parking Lot:
          <input
            type='text'
            name='parking_lot'
            value={newKisumu.parking_lot}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type='text'
            name='location'
            value={newKisumu.location}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type='text'
            name='address'
            value={newKisumu.address}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Slot No:
          <input
            type='text'
            name='slot_no'
            value={newKisumu.slot_no}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type='text'
            name='price'
            value={newKisumu.price}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Time In:
          <input
            type='text'
            name='time_in'
            value={newKisumu.time_in}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Time Out:
          <input
            type='text'
            name='time_out'
            value={newKisumu.time_out}
            onChange={handleInputChange}
          />
        </label>
        <br />
        {selectedKisumu ? (
          <button type='button' onClick={updateKisumu}>Update</button>
        ) : (
          <button type='submit'>Create</button>
        )}
      </form>
    </div>
  );
}

export default KisumuList;

