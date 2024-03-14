import { useState } from "react";
import StudentRow from "../StudentRow/StudentRow";

const initialValue = [];
const StudentPanel = () => {
  const [students, setStudents] = useState(initialValue);
  const [forInfo, setForInfo] = useState({});
  const handleAddStudent = () => {
    setStudents((prevState) => {
      if (students.includes(forInfo)) {
        return [...prevState];
      } else {
        return [...prevState, forInfo];
      }
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForInfo((prevState) => {
      const updateState = {
        ...prevState,
        [name]: value,
        id: students.length + 1,
      };
      return updateState;
    });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="text-[25px]">Student Panel</h1>
      <h2>Add Student Form</h2>
      <form className="flex">
        <input
          name="name"
          placeholder="name"
          className="p-2 m-2 border border-gray-400"
          onChange={handleChange}
        />
        <input
          name="family"
          placeholder="family"
          className="p-2 m-2 border border-gray-400"
          onChange={handleChange}
        />
        <input
          name="age"
          placeholder="age"
          className="p-2 m-2 border border-gray-400"
          onChange={handleChange}
        />
        <input
          name="phoneNumber"
          placeholder="phoneNumber"
          className="p-2 m-2 border border-gray-400"
          onChange={handleChange}
        />
        <input
          name="course"
          placeholder="course"
          className="p-2 m-2 border border-gray-400"
          onChange={handleChange}
        />
      </form>
      <button
        className=" px-3 py-1 rounded-lg m-2 bg-[#0072BC] text-white "
        onClick={handleAddStudent}
      >
        Add Student
      </button>
      <table className="w-full border border-gray-400">
        <thead className="border-black border-b">
          <tr>
            <th className="p-2 m-2">#</th>
            <th className="p-2 m-2">Full Name</th>
            <th className="p-2 m-2">Age</th>
            <th className="p-2 m-2">Phone Number</th>
            <th className="p-2 m-2">Course</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return <StudentRow student={student} key={student.id} />;
          })}
        </tbody>
      </table>
    </main>
  );
};

export default StudentPanel;
