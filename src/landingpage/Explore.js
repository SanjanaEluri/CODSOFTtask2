import React, { useState } from 'react';
import './explore.css'; // Import your CSS file for styling

export default function Explore() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [totalPeople, setTotalPeople] = useState(1); // Default to 1 person
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [message, setMessage] = useState('');
  const [placesDetails] = useState({
    Araku: {
      costPerPerson: 100,
      rating: '4.5',
      hotels: [
        {
          name: 'Hotel Araku',
          image: 'images/hotel-araku.jpg',
        },
        {
          name: 'Araku Valley Resort',
          image: 'images/hotel-araku-valley.jpg',
        },
      ],
    },
    Charminar: {
      costPerPerson: 50,
      rating: '4.0',
      hotels: [
        {
          name: 'Charminar Hotel',
          image: 'images/hotel-charminaer.jpg',
        },
        {
          name: 'Hyderabad Inn',
          image: 'images/hotel-hyderabad-inn.jpg',
        },
      ],
    },

    kerala: {
      costPerPerson: 50,
      rating: '4.0',
      hotels: [
        {
          name: 'Charminar Hotel',
          image: 'images/keralahotel.jpg',
        },
        {
          name: 'Hyderabad Inn',
          image: 'images/keralahotel2.jpg',
        },
      ],
    },
    'Taj Mahal': {
      costPerPerson: 200,
      rating: '4.8',
      hotels: [
        {
          name: 'Taj Mahal Hotel',
          image: 'images/tajmahalhotel.jpg',
        },
        {
          name: 'Agra Palace',
          image: 'images/tajmahalhotel2.jpg',
        },
      ],
    },
  });

  const handleImageClick = (place) => {
    setSelectedPlace(place);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setMessage(''); // Clear message when modal is closed
  };

  const handleTotalPeopleChange = (e) => {
    setTotalPeople(parseInt(e.target.value, 10));
  };

  const handleHotelChange = (hotel) => {
    setSelectedHotel(hotel);
  };

  const calculateCost = (costPerPerson, totalPeople) => {
    return costPerPerson * totalPeople;
  };

  const handleBookNow = () => {
    if (!totalPeople || !selectedHotel) {
      setMessage('Please fill in all the fields.');
    } else {
      setMessage('Successfully booked!');
    }
  };

  return (
    <div className="explore-container">
      <div className="card" onClick={() => handleImageClick('Araku')}>
        <img src="images/araku.jpg" className="card-img-top" alt="Araku" />
        <div className="card-body">
          <h5 className="card-title">Araku Valley</h5>
          <p className="card-text">Beautiful hill station in Andhra Pradesh, India.</p>
        </div>
      </div>

      <div className="card" onClick={() => handleImageClick('Charminar')}>
        <img src="images/charminaer.jpg" className="card-img-top" alt="Charminar" />
        <div className="card-body">
          <h5 className="card-title">Charminar</h5>
          <p className="card-text">Iconic monument in Hyderabad, India.</p>
        </div>
      </div>

      <div className="card" onClick={() => handleImageClick('Taj Mahal')}>
        <img src="images/tajmahal.jpg" className="card-img-top" alt="Taj Mahal" />
        <div className="card-body">
          <h5 className="card-title">Taj Mahal</h5>
          <p className="card-text">Symbol of love in Agra, India.</p>
        </div>
      </div>

      <div className="card" onClick={() => handleImageClick('kerala')}>
        <img src="images/kerala.jpg" className="card-img-top" alt="Kerala" />
        <div className="card-body">
          <h5 className="card-title">Kerala</h5>
          <p className="card-text">God's own country, India.</p>
        </div>
      </div>

      {showModal && selectedPlace && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>{selectedPlace}</h2>
            <p>Cost per person: ${placesDetails[selectedPlace].costPerPerson}</p>
            <p>Total People: <input type="number" value={totalPeople} onChange={handleTotalPeopleChange} /></p>
            <p>Hotels nearby:</p>
            <ul>
              {placesDetails[selectedPlace].hotels.map((hotel, index) => (
                <li key={index}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedHotel === hotel.name}
                      onChange={() => handleHotelChange(hotel.name)}
                    />
                    <img src={hotel.image} alt={hotel.name} style={{ minWidth: '50px', minHeight: '50px', marginRight: '10px' }} />
                    {hotel.name}
                  </label>
                </li>
              ))}
            </ul>
            <p>Total Cost: ${calculateCost(placesDetails[selectedPlace].costPerPerson, totalPeople)}</p>
            <p>Rating: {placesDetails[selectedPlace].rating}</p>
            <button onClick={handleBookNow}>Book Now</button>
            {message && <p className={message === 'Successfully booked!' ? 'message success' : 'message error'}>{message}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
