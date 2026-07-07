import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl">My React Tailwind Homepage</h1>
      </header>
      <main className="flex-grow p-4">
        <h2 className="text-2xl">Welcome to the Homepage!</h2>
        <p>This is a simple homepage built with React and Tailwind CSS.</p>
      </main>
      <footer className="bg-blue-600 text-white p-4">
        <p>&copy; 2023 My Website</p>
      </footer>
    </div>
  );
};

export default App;