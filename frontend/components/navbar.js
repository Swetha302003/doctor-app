export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-white shadow px-6 py-4">
      <h1 className="text-blue-600 font-bold text-xl">HealthHub</h1>
      <div className="flex gap-6 text-gray-700 font-medium">
        <a href="#">For Corporates</a>
        <a href="#">For Providers</a>
        <a href="#">Security & Help</a>
        <a href="#">Login</a>
        <a href="#">Signup</a>
      </div>
    </nav>
  );
}

