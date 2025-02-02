import React from "react";

const Home = () => {
  return (
    <>
      <body className="bg-gray-100 p-6 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Every Thing Admin Dashboard
            </h1>
            <div className="flex space-x-4">
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
                Manage Sales
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition">
                Add Product
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <p className="text-gray-500 text-sm">Expected Earnings</p>
              <h2 className="text-3xl font-bold text-gray-900">
                $69,700 <span className="text-green-600 text-sm">▲2.2%</span>
              </h2>
              <div className="mt-4">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <p className="text-gray-500 text-sm">Shoes: $7,660</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <p className="text-gray-500 text-sm">Gaming: $2,820</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
                  <p className="text-gray-500 text-sm">Others: $45,257</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <p className="text-gray-500 text-sm">Average Daily Sales</p>
              <h2 className="text-3xl font-bold text-gray-900">
                $2,420 <span className="text-green-600 text-sm">▲2.6%</span>
              </h2>
              <div className="mt-4 flex items-end space-x-1">
                <div className="w-2 bg-blue-500 h-6"></div>
                <div className="w-2 bg-blue-500 h-10"></div>
                <div className="w-2 bg-blue-500 h-4"></div>
                <div className="w-2 bg-blue-500 h-12"></div>
                <div className="w-2 bg-blue-500 h-8"></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <p className="text-gray-500 text-sm">Orders This Month</p>
              <h2 className="text-3xl font-bold text-gray-900">
                1,836 <span className="text-red-600 text-sm">▼2.2%</span>
              </h2>
              <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full"></div>
              </div>
            </div>
          
          </div>

          <div className="mt-6 bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Sales This Month
            </h2>
            <p className="text-3xl font-bold text-gray-900">$14,094</p>
            <p className="text-gray-500 text-sm">Another $48,346 to Goal</p>
            <div className="mt-4">
              <svg
                className="w-full h-32 text-green-500"
                viewBox="0 0 100 50"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
              >
                <polyline
                  points="5,40 15,30 25,32 35,28 45,30 55,26 65,34 75,31 85,36 95,30"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></polyline>
              </svg>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Home;
