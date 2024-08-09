import { Link } from "react-router-dom";
import { TiPencil } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";
import { StudentObject } from "../../../../CommonTypes/CommonTypes";
type StudentProps = {
  index: number;
  student: StudentObject[];
};
const Student = ({ index, student }: StudentProps) => {
  const { name, image, studentId, studentClass, phone, institution } = student;

  return (
    <tr className="text-center">
      <th>{index}</th>
      <td>{name}</td>
      <td>{studentId}</td>
      <td>{phone}</td>
      <td>{studentClass}</td>
      <td>{institution}</td>
      <td className="flex gap-5 justify-center">
        <Link to={`/update-student`} className="tooltip" data-tip="Edit">
        <button className="btn bg-base-200 border btn-sm">
          <TiPencil className="text-lg text-success" />
        </button>
        </Link>
        <button
          //   onClick={() => handleDeleteService(_id)}
          className="btn bg-base-200 border btn-sm tooltip"
          data-tip="Delete"
        >
          <RiDeleteBin6Line className="text-lg text-error" />
        </button>
      </td>
    </tr>
  );
};

export default Student;
