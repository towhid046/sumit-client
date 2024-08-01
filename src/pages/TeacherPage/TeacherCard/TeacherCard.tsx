interface TeacherProps {
  name: string;
  image: string;
  phone: string;
  subject: string;
  title: string;
  institution: string;
}
const TeacherCard = ({ teacher }) => {
  const { name, image, subject, title, institution } = teacher;
  return (
    <div className="p-6 rounded border">
      <figure className="flex justify-center mb-5">
        <img
          src={image}
          className="rounded-full w-32 h-32 object-cover"
          alt="Student Image"
        />
      </figure>
      <div className="space-y-1 text-center">
        <h3 className="text-gray-500 font-bold text-xl">Name: {name}</h3>
        <h3 className="text-gray-400 text-lg font-semibold">
          Subject: {subject}
        </h3>
        <h3 className="text-gray-400 text">{title}</h3>
        <p className="text-gray-500 text-base">{institution}</p>
      </div>
    </div>
  );
};

export default TeacherCard;
