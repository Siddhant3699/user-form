export const QUALIFICATIONS = [
  {
    key: "none",
    value: "Select Qualification",
    disabled: true,
  },
  {
    key: "postGrad",
    value: "Post Graduation",
    disabled: false,
  },
  {
    key: "grad",
    value: "Graduation",
    disabled: false,
  },
  {
    key: "highSchool",
    value: "H. S. C.",
    disabled: false,
  },
  {
    key: "secondarySchool",
    value: "S. S. C.",
    disabled: false,
  },
];

export const DESIGNATIONS = [
  {
    key: "none",
    value: "Select Designation",
    disabled: true,
  },
  {
    key: "lse",
    value: "Lead Solution Engineer",
    disabled: false,
  },
  {
    key: "sse",
    value: "Senior Solution Engineer",
    disabled: false,
  },
  {
    key: "se",
    value: "Solution Engineer",
    disabled: false,
  },
];

export const GENDERS = [
  {
    key: "male",
    value: "Male",
  },
  {
    key: "female",
    value: "Female",
  },
];

export const EMPTY_USER = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  dob: null,
  qualification: "Select Qualification",
  designation: "Select Designation",
  gender: "Male",
  profilePic: null,
};
