import React, { useState, useEffect } from 'react';

function CarList() {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({
    car_type: '',
    car_model: '',
    number_plate: '',
    owner_name: '',
    phone_number: '',
  });
  const [carId, setCarId] = useState(null);

  useEffect(() => {
    fetchCars('http://127.0.0.1:8000/car');
  }, []);

  const fetchCars = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.log(error));
  };

  const createCar = () => {
    fetch('http://127.0.0.1:8000/car', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCar),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCars(prevCars => [...prevCars, data]);
        setNewCar({
          car_type: '',
          car_model: '',
          number_plate: '',
          owner_name: '',
          phone_number: '',
        });
      })
      .catch(error => console.log(error));
  };

  const updateCar = () => {
    fetch(`http://127.0.0.1:8000/car/${carId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCar),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setNewCar({
          car_type: '',
          car_model: '',
          number_plate: '',
          owner_name: '',
          phone_number: '',
        });
        setCarId(null);
        fetchCars();
      })
      .catch(error => console.log(error));
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewCar(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDelete = carId => {
    fetch(`http://127.0.0.1:8000/car/${carId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          fetchCars();
        } else {
          console.log('Failed to delete car');
        }
      })
      .catch(error => console.log(error));
  };

  const handleUpdate = carId => {
    fetch(`http://127.0.0.1:8000/car/${carId}`)
      .then(response => response.json())
      .then(data => {
        setNewCar({
          car_type: data.car_type,
          car_model: data.car_model,
          number_plate: data.number_plate,
          owner_name: data.owner_name,
          phone_number: data.phone_number,
        });
        setCarId(carId);
      })
      .catch(error => console.log(error));
  };

  const handleCreateSubmit = event => {
    event.preventDefault();
    createCar();
  };

  const handleUpdateSubmit = event => {
    event.preventDefault();
    updateCar();
  };

  return (
    <div className='carlist'>
      <h2>Car Information</h2>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            Car Type: {car.car_type}<br />
            Car Model: {car.car_model}<br />
            Plate Number: {car.number_plate}<br />
            Owner Name: {car.owner_name}<br />
            Phone Number: {car.phone_number}<br />
            <button onClick={() => handleDelete(car.id)}>Delete</button>
            <button onClick={() => handleUpdate(car.id)}>Update</button>
          </li>
        ))}
      </ul>
      <h2>Create a New Car</h2>
      <form onSubmit={handleCreateSubmit}>
        {/* Form input fields */}
        <label>
          Car Type:
          <input
            type='text'
            name='car_type'
            value={newCar.car_type}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Car Model:
          <input
            type='text'
            name='car_model'
            value={newCar.car_model}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Plate Number:
          <input
            type='text'
            name='number_plate'
            value={newCar.number_plate}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Owner Name:
          <input
            type='text'
            name='owner_name'
            value={newCar.owner_name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type='text'
            name='phone_number'
            value={newCar.phone_number}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type='submit'>Create</button>
      </form>
      {/* Update form */}
      {carId && (
        <div>
          <h2>Update Car</h2>
          <form onSubmit={handleUpdateSubmit}>
            {/* Form input fields */}
            <label>
              Car Type:
              <input
                type='text'
                name='car_type'
                value={newCar.car_type}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Car Model:
              <input
                type='text'
                name='car_model'
                value={newCar.car_model}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Plate Number:
              <input
                type='text'
                name='number_plate'
                value={newCar.number_plate}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Owner Name:
              <input
                type='text'
                name='owner_name'
                value={newCar.owner_name}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Phone Number:
              <input
                type='text'
                name='phone_number'
                value={newCar.phone_number}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <button type='submit'>Update</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default CarList;
