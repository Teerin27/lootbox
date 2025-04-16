import React from 'react'

const Main = () => {
  return (
    <div className="font-pixelify">
    
      <div className="relative bg-[url('/assets/bg-clouds.png')] bg-cover w-[900px] h-[500px] border-4 border-blue-300 rounded-xl overflow-hidden">
      {/* Top Left Player Info */}
      <div className="absolute top-4 left-4 bg-white rounded-full p-3 flex items-center gap-3 shadow-lg">
        <img src="src\icon\ProfileSample.png"  className="w-16 h-16 rounded-full" />
        <div>
          <h2 className="font-bold text-lg">Michael Kaiser</h2>
          <p className="text-yellow-500 font-bold">💰 5,000,000</p>
          <p>🎒 20</p>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-center text-5xl font-bold mt-4">Loot<span className="text-yellow-400">B</span>ox</h1>

      {/* Dropdown */}
      <div className="text-center mt-2">
        <select className="bg-white px-4 py-2 rounded shadow">
          <option>Meme Box</option>
        </select>
      </div>

      {/* Chest and Drop Rates */}
      <div className="flex justify-between px-10 mt-4">
        {/* Drop Rates */}
        <div className="text-left font-pixel text-xl">
          <p className="text-green-500">common 40%</p>
          <p className="text-blue-600">uncommon 30%</p>
          <p className="text-purple-600">epic 20%</p>
          <p className="text-yellow-600">legendary 10%</p>
        </div>

        {/* Chest */}
        <div className="flex flex-col items-center">
          <img src="src\icon\ChestBox.png" alt="chest" className="w-40" />
          <p className="text-green-500 font-bold mt-2">Key remaining: 8</p>
          <button className="bg-green-500 text-white px-6 py-2 mt-2 rounded-xl font-bold shadow-md">
            PLAY
          </button>
        </div>

        {/* SHOP Button */}
        <button className="bg-green-900 text-white px-6 py-2 h-12 self-end rounded-xl shadow-md">
          SHOP
        </button>
      </div>

      {/* Bottom Free Keys Info */}
      <div className="absolute bottom-4 w-full text-center font-pixel text-sm">
        <p className="text-green-500">3 Free keys in <span className="text-red-500">5:00</span> minutes</p>
      </div>
    </div>
  
      
      
    </div>
  )
}

export default Main
