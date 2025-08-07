const categories = [
  { title: "Dentist", color: "bg-pink-200" },
  { title: "Cardiologist", color: "bg-blue-200" },
  { title: "Physician", color: "bg-yellow-200" },
  { title: "Eye Specialist", color: "bg-green-200" },
];

export default function CategoriesGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {categories.map((cat, index) => (
        <div key={index} className={`p-6 rounded shadow text-center ${cat.color}`}>
          <h3 className="font-bold">{cat.title}</h3>
        </div>
      ))}
    </div>
  );
}
