import React from 'react';

const PhotoGallery: React.FC = () => {
    const photos = [
        '/images/photo1.jpg',
        '/images/photo2.jpg',
        '/images/photo3.jpg',
        '/images/photo4.jpg',
        // Add more photo paths as needed
    ];

    const [currentImage, setCurrentImage] = React.useState<string | null>(null);

    const openLightbox = (image: string) => {
        setCurrentImage(image);
    };

    const closeLightbox = () => {
        setCurrentImage(null);
    };

    return (
        <div className="photo-gallery">
            <h2 className="text-center text-2xl font-bold mb-4">Photo Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos.map((photo, index) => (
                    <div key={index} className="cursor-pointer">
                        <img
                            src={photo}
                            alt={`Wedding photo ${index + 1}`}
                            className="w-full h-auto rounded-lg"
                            onClick={() => openLightbox(photo)}
                        />
                    </div>
                ))}
            </div>

            {currentImage && (
                <div className="lightbox" onClick={closeLightbox}>
                    <img src={currentImage} alt="Lightbox" className="lightbox-image" />
                </div>
            )}

            <style jsx>{`
                .lightbox {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                }
                .lightbox-image {
                    max-width: 90%;
                    max-height: 90%;
                    border-radius: 8px;
                }
            `}</style>
        </div>
    );
};

export default PhotoGallery;