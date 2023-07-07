import "./EmployeeTable.css";

const EmployeeTable = ({ employees, onEdit, onDelete }) => {
  if (employees.length === 0) {
    return <h2>No data to display</h2>;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Profile Picture</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Date of Birth</th>
          <th>Highest Qualification</th>
          <th>Designation</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => {
          return (
            <tr key={index}>
              <td>
                <img src={employee.profilePic} width="150" height="200"></img>
              </td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.dob}</td>
              <td>{employee.qualification}</td>
              <td>{employee.designation}</td>
              <td>{employee.gender}</td>
              <td>
                <div className="action-buttons">
                  <button
                    onClick={() => {
                      onEdit(employee.id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      onDelete(employee.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
