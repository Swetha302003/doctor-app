import React from 'react';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="border rounded-xl shadow-md p-5 mb-5 bg-white">
      <h2 className="text-xl font-semibold text-blue-800">{doctor.name}</h2>
      <p><strong>Specialty:</strong> {doctor.specialty}</p>
      <p><strong>Location:</strong> {doctor.location}</p>
      <p><strong>Experience:</strong> {doctor.experience}</p>
      <p><strong>Rating:</strong> {doctor.rating}</p>
      <p><strong>Stories:</strong> {doctor.stories}</p>
      <p><strong>Fee:</strong> ₹{doctor.fee}</p>
      <p><strong>Clinic:</strong> {doctor.clinic}</p>
      <p><strong>Availability:</strong> {doctor.availability}</p>
      <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Book Clinic Visit
      </button>
    </div>
  );
};

export default DoctorCard;
