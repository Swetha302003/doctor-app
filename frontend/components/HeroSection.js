export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-10 rounded-lg shadow my-6 mx-4">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">Your Home for Health</h2>
      <div className="flex gap-4">
        <input type="text" placeholder="Enter location" className="border p-2 rounded w-1/3" />
        <input type="text" placeholder="Search for doctors, specialities" className="border p-2 rounded w-2/3" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
      </div>
    </div>
  );
}
