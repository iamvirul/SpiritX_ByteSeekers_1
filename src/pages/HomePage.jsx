import React from 'react';

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-blue-600 text-white p-4">
                <h1 className="text-2xl">Welcome to My Website</h1>
            </header>
            <main className="flex-grow p-4">
                <h2 className="text-xl mb-4">Home Page</h2>
                <p className="mb-4">This is a sample home page using Tailwind CSS.</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Get Started
                </button>
            </main>
            <footer className="bg-gray-800 text-white p-4">
                <p>&copy; 2023 My Website. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;