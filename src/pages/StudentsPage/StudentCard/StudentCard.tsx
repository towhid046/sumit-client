const StudentCard = ({ student }) => {
  const { name, image, studentId, studentClass, phone, institution } = student;
  return (
    <div className="p-6 rounded border">
      <figure className="flex justify-center mb-5">
        <img
          src={image}
          className="rounded-full w-32 h-32 object-cover"
          alt="Student Image"
        />
      </figure>
      <div className="space-y-1">
        <h3 className="text-gray-400 font-bold text-lg">ID: {studentId}</h3>
        <h2 className="text-gray-600 font-bold text-xl">Name: {name}</h2>
        <h3 className="text-gray-500 text-lg font-semibold">
          Class: {studentClass}
        </h3>
        <p className="text-gray-500 text-base">{institution}</p>
      </div>
    </div>
  );
};

export default StudentCard;
