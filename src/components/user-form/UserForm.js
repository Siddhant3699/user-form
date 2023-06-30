import { DESIGNATIONS, GENDERS, QUALIFICATIONS } from '../../resources/constants';
import { Date, Email, File, RadioButtons, Select, Text } from '../inputs/Inputs';
import './UserForm.css';

export default function UserForm() {
  return (
    <div className="user-form">
      <form>
          <Text label="First Name" id="firstname" />
          <Text label="Last Name" id="lastname" />
          <Email label="Email" id="email"/>
          <Text label="Phone Number" id="phoneNumber" />
          <Date label="Date of Birth" id="dob" />
          <Select label="Highest Education" options={QUALIFICATIONS} />
          <Select label="Designation" options={DESIGNATIONS} />
          <RadioButtons label="Gender" options={GENDERS} />
          <File label="Profile Picture" id="profilePic" />
      </form>
      <input type="submit" />
    </div>
  );
}
