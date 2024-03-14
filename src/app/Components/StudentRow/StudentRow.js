const StudentRow = ({ student }) => {
  const { id, name, family, age, phoneNumber, course } = student;
  return (
    <>
      <tr className="border-gray-400 border-b">
        <th className="p-2 m-2">{id}</th>
        <th className="p-2 m-2">
          {name} {family}
        </th>
        <th className="p-2 m-2">{age}</th>
        <th className="p-2 m-2">{phoneNumber}</th>
        <th className="p-2 m-2">{course}</th>
      </tr>
    </>
  );
};

export default StudentRow;
