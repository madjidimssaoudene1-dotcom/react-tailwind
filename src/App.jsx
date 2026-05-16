import React from "react";

function App() {
  return (
    <>
      <div className="App min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
          <h1 className="text-xl font-bold">My React-Tailwind App</h1>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-200 text-2xl">Home</a></li>
            <li><a href="#" className="hover:text-gray-200 text-2xl">About</a></li>
            <li><a href="#" className="hover:text-gray-200 text-2xl">Contact</a></li>
          </ul>
        </nav>

        {/* Heading */}
        <header className="text-center py-10">
          <h2 className="text-4xl font-bold text-gray-800">
            Welcome to My Project
          </h2>
          <p className="text-gray-600 mt-2">
            Built with React and TailwindCSS
          </p>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
          <div className="bg-amber-400 shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Card 1</h3>
            <p className="text-gray-600">This is the first card.</p>
          </div>

          <div className="bg-blue-400 shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Card 2</h3>
            <p className="text-gray-600">This is the second card.</p>
          </div>

          <div className="bg-emerald-500 shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Card 3</h3>
            <p className="text-gray-600">This is the third card.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
