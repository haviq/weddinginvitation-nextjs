import React, { useState } from 'react';

const RSVP: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [attending, setAttending] = useState<boolean | null>(null);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || attending === null) {
            setError('Please fill in all fields.');
            return;
        }
        setError('');
        // Simulate a submission to a backend service
        console.log({ name, email, attending });
        setSubmitted(true);
    };

    if (submitted) {
        return <div>Thank you for your RSVP!</div>;
    }

    return (
        <form onSubmit={handleSubmit} className="rsvp-form">
            <h2>RSVP</h2>
            {error && <p className="error">{error}</p>}
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Will you be attending?</label>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="yes"
                            checked={attending === true}
                            onChange={() => setAttending(true)}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="no"
                            checked={attending === false}
                            onChange={() => setAttending(false)}
                        />
                        No
                    </label>
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default RSVP;