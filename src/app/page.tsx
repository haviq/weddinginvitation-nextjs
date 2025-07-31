import Hero from '../components/Hero';
import PhotoGallery from '../components/PhotoGallery';
import MusicPlayer from '../components/MusicPlayer';
import EventDetails from '../components/EventDetails';
import RSVP from '../components/RSVP';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <MusicPlayer />
      <EventDetails />
      <PhotoGallery />
      <RSVP />
    </div>
  );
};

export default HomePage;