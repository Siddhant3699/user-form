import { useState } from "react";
import _ from "lodash";

import "./UserForm.css";

import {
  DESIGNATIONS,
  EMPTY_USER,
  GENDERS,
  QUALIFICATIONS,
} from "../../resources/constants";
import {
  ReactiveDatepicker,
  ReactiveEmail,
  ReactiveFile,
  ReactiveRadioButtons,
  ReactiveSelect,
  ReactiveText,
} from "../inputs/reactive-inputs";

export default function UserForm() {
  const [user, setUser] = useState(EMPTY_USER);

  return (
    <div className="user-form">
      <form>
        <ReactiveText
          inputLabel="First Name"
          onChange={(firstName) => {
            setUser({
              ...user,
              firstName,
            });
          }}
        />
        <ReactiveText
          inputLabel="Last Name"
          onChange={(lastName) => {
            setUser({
              ...user,
              lastName,
            });
          }}
        />
        <ReactiveEmail
          inputLabel="Email"
          id="email"
          onChange={(email) => {
            setUser({
              ...user,
              email,
            });
          }}
        />
        <ReactiveText
          inputLabel="Phone Number"
          onChange={(phoneNumber) => {
            setUser({
              ...user,
              phoneNumber,
            });
          }}
        />
        <ReactiveDatepicker
          inputLabel="Date of Birth"
          id="dob"
          onChange={(dob) => {
            setUser({
              ...user,
              dob,
            });
          }}
        />
        <ReactiveSelect
          inputLabel="Highest Education"
          options={QUALIFICATIONS}
          onChange={(qualification) => {
            setUser({
              ...user,
              qualification,
            });
          }}
        />
        <ReactiveSelect
          inputLabel="Designation"
          options={DESIGNATIONS}
          onChange={(designation) => {
            setUser({
              ...user,
              designation,
            });
          }}
        />
        <ReactiveRadioButtons
          inputLabel="Gender"
          options={GENDERS}
          defaultValue={GENDERS[0].value}
          onChange={(gender) => {
            setUser({
              ...user,
              gender,
            });
          }}
        />
        <ReactiveFile
          inputLabel="Profile Picture"
          id="profilePic"
          onChange={(profilePic) => {
            setUser({
              ...user,
              profilePic,
            });
          }}
        />
        <input
          type="submit"
          disabled={_.isEqual(user, EMPTY_USER)}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log(user);
          }}
        />
      </form>
    </div>
  );
}
