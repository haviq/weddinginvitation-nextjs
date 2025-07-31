import React from 'react';

const EventDetails: React.FC = () => {
    return (
        <div className="event-details">
            <h2 className="text-2xl font-bold">Wedding Details</h2>
            <div className="details">
                <h3 className="text-xl">Schedule</h3>
                <p>Saturday, June 25, 2023</p>
                <p>3:00 PM - Ceremony</p>
                <p>5:00 PM - Reception</p>

                <h3 className="text-xl">Location</h3>
                <p>Sunset Garden, 123 Wedding Lane, City, State</p>

                <h3 className="text-xl">Dress Code</h3>
                <p>Formal Attire</p>

                <h3 className="text-xl">Transportation</h3>
                <p>Shuttle service will be provided from the hotel to the venue.</p>
            </div>
        </div>
    );
};

export default EventDetails;