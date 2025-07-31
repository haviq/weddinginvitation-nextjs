import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="text-xl font-bold">Wedding Invitation</div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="#hero" scroll={false}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#event-details" scroll={false}>
                            Event Details
                        </Link>
                    </li>
                    <li>
                        <Link href="#gallery" scroll={false}>
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link href="#rsvp" scroll={false}>
                            RSVP
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;