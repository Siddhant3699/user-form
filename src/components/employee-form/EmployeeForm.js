import _ from "lodash";

import "./EmployeeForm.css";

import {
  ReactiveRadioButtons,
  ReactiveSelect,
  ReactiveInput,
  ReactiveFile,
} from "../../common/form-controls/FormControls";

import {
  DESIGNATIONS,
  GENDERS,
  QUALIFICATIONS,
  INITIAL_FORM,
} from "../../resources/constants";

const EmployeeForm = ({ employee, onModify, onFieldValueChange }) => {
  const onSubmit = (event) => {
    handleEvent(event);
    onModify(employee);
  };

  const handleEvent = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <div className="employee-form">
      <form onSubmit={onSubmit}>
        <ReactiveInput
          inputLabel="First Name"
          type="text"
          fieldValue={employee.firstName}
          onChange={(firstName) => onFieldValueChange("firstName", firstName)}
        />
        <ReactiveInput
          inputLabel="Last Name"
          type="text"
          fieldValue={employee.lastName}
          onChange={(lastName) => onFieldValueChange("lastName", lastName)}
        />
        <ReactiveInput
          inputLabel="Email"
          type="email"
          fieldValue={employee.email}
          onChange={(email) => onFieldValueChange("email", email)}
        />
        <ReactiveInput
          inputLabel="Phone Number"
          type="text"
          fieldValue={employee.phoneNumber}
          onChange={(phoneNumber) =>
            onFieldValueChange("phoneNumber", phoneNumber)
          }
        />
        <ReactiveInput
          inputLabel="Date of Birth"
          type="date"
          fieldValue={employee.dob}
          onChange={(dob) => onFieldValueChange("dob", dob)}
        />
        <ReactiveSelect
          inputLabel="Highest Qualification"
          fieldValue={employee.qualification}
          options={QUALIFICATIONS}
          onChange={(qualification) =>
            onFieldValueChange("qualification", qualification)
          }
          placeholder="Select Qualification"
        />
        <ReactiveSelect
          inputLabel="Designation"
          fieldValue={employee.designation}
          options={DESIGNATIONS}
          onChange={(designation) =>
            onFieldValueChange("designation", designation)
          }
          placeholder="Select Designation"
        />
        <ReactiveRadioButtons
          inputLabel="Gender"
          name="gender"
          fieldValue={employee.gender}
          options={GENDERS}
          onChange={(gender) => onFieldValueChange("gender", gender)}
        />
        <ReactiveFile
          inputLabel="Profile Picture"
          onChange={(profilePic) => {
            const blob = URL.createObjectURL(profilePic);
            onFieldValueChange("profilePic", blob);
          }}
        />
        <input type="submit" disabled={_.isEqual(employee, INITIAL_FORM)} />
      </form>
    </div>
  );
};

export default EmployeeForm;
