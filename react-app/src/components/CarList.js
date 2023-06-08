import React, { useEffect, useState } from 'react';

function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch cars data from backend API
    fetch('http://127.0.0.1:8000/car')
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='carlist'>
      <h2 >Car Information</h2>
      <ul>
        {cars && cars.map(car => (
          <li key={car.id}>
            Car Type:{car.car_type}<br/>
            Car model:{car.car_model} <br/>
            Plate number:{car.number_plate} <br/>
            Owner name:{car.owner_name} <br/>
            Phone number:{car.phone_number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;
