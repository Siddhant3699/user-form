import { useState } from "react";
import { INITIAL_FORM } from "../../resources/constants";
import React from "react";
import EmployeeTable from "../../components/employee-table/EmployeeTable";
import EmployeeForm from "../../components/employee-form/EmployeeForm";

import "./EmployeeDetail.css";

const EmployeeDetail = () => {
  const [employeeId, setEmployeeId] = useState(1);
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState(INITIAL_FORM);

  const addOrUpdateEmployeeRecord = (employee, employeeId) => {
    if (!employee.id) {
      addEmployee(employee);
    } else {
      updateEmployee(employee, employeeId);
    }
  };

  const addEmployee = (employee) => {
    setEmployeeId((employeeId) => employeeId + 1);
    employee.id = employeeId;
    setEmployees([...employees, employee]);
  };

  const updateEmployee = (employee, employeeId) => {
    const index = employees.findIndex((employee) => employee.id === employeeId);
    employees[index] = employee;
    setEmployees([...employees]);
  };

  const deleteEmployeeRecord = (employeeId) => {
    const index = employees.findIndex((employee) => employee.id === employeeId);
    employees.splice(index, 1);
    setEmployees([...employees]);
  };

  const getEmployeeToUpdate = (employeeId) => {
    const index = employees.findIndex((employee) => employee.id === employeeId);
    setEmployee(employees[index]);
  };

  const resetForm = () => {
    setEmployee(INITIAL_FORM);
  };

  const updateEmployeeField = (field, value) => {
    const employeeCopy = { ...employee };
    employeeCopy[field] = value;
    setEmployee(employeeCopy);
  };

  return (
    <div className="employee-detail">
      <EmployeeForm
        employee={employee}
        onModify={(employee) => {
          addOrUpdateEmployeeRecord(employee, employee.id);
          resetForm();
        }}
        onFieldValueChange={(field, value) => updateEmployeeField(field, value)}
      />
      <EmployeeTable
        employees={employees}
        onEdit={(employeeId) => getEmployeeToUpdate(employeeId)}
        onDelete={(employeeId) => deleteEmployeeRecord(employeeId)}
      />
    </div>
  );
};

export default EmployeeDetail;
