// import React, { MutableRefObject, useEffect, useRef, useState } from "react";
// import Form from "../components/Form/Form";
// import { Input } from "../components/Form/Input";
// import { ILogin } from "../models/ILogin";
// import Button from "../components/Form/Button";
// import { Label } from "../components/Form/Label";

// const Login = () => {
//   const [loginDetails, setLoginDetails] = useState<ILogin>({
//     username: "",
//     password: "",
//   });

//   const inputRef: MutableRefObject<HTMLInputElement | null> =
//     useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     inputRef?.current?.focus();
//   }, []);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setLoginDetails({
//       ...loginDetails,
//       [e.target.name]: e.target.value,
//     });
//   };
//   const handleLogin = () => {};

//   return (
//     <Form action={handleLogin}>
//       <div>
//         <Label label={`Username`} />
//         {"  "}
//         <Input
//           reference={inputRef}
//           type={`text`}
//           name={`username`}
//           placeholder={`Username`}
//           value={loginDetails?.username}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <Label label={`Password`} /> {"  "}
//         <Input
//           type={`password`}
//           name={`password`}
//           placeholder={`Password`}
//           value={loginDetails?.password}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <Button title={`Login`} type={`submit`} />
//       </div>
//     </Form>
//   );
// };

// export default Login;

export {};
