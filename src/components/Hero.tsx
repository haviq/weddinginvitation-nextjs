import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);
    const [countdown, setCountdown] = useState('');

    const weddingDate = new Date('2024-06-15T15:00:00'); // Set your wedding date here

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const timeDiff = weddingDate - now;

            if (timeDiff > 0) {
                const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
                setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            } else {
                setCountdown('Wedding Day!');
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [weddingDate]);

    const toggleMusic = () => {
        setIsMusicPlaying(!isMusicPlaying);
        const audio = document.getElementById('background-music') as HTMLAudioElement;
        if (isMusicPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
    };

    return (
        <div className="hero-section">
            <video autoPlay loop muted className="background-video">
                <source src="/path/to/your/video.mp4" type="video/mp4" />
            </video>
            <div className="overlay">
                <h1 className="couple-names">John & Jane</h1>
                <h2 className="wedding-date">June 15, 2024</h2>
                <div className="countdown-timer">{countdown}</div>
                <button onClick={toggleMusic} className="music-toggle">
                    {isMusicPlaying ? 'Pause Music' : 'Play Music'}
                </button>
                <audio id="background-music" loop>
                    <source src="/music/your-audio-file.mp3" type="audio/mpeg" />
                </audio>
            </div>
        </div>
    );
};

export default Hero;