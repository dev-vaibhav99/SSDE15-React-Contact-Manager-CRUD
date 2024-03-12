export interface ILogin {
  username: string;
  password: string;
}

export interface IRegistration {
  firstName: string;
  userRole: string;
  imageUrl: string;
  emailId: string;
  contact: string;
  designation: string;
  company: string;
  gender: "male" | "female" | "others";
  dob: string;
}
