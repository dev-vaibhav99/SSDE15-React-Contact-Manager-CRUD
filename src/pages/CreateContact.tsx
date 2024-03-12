"use client";
import React, { useState } from "react";
import { Label } from "../components/Form/Label";
import { Input } from "../components/Form/Input";
import { cn } from "../utils/cn";
import { IRegistration } from "../models/ILogin";
import { createContact } from "../services/ContactService";
import { useNavigate } from "react-router-dom";

const CreateContact: React.FC = () => {
  const [registrationDetails, setRegistrationDetails] = useState<IRegistration>(
    {
      firstName: "",
      userRole: "",
      imageUrl:
        "https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg",
      emailId: "",
      contact: "",
      designation: "",
      company: "",
      gender: "male",
      dob: "",
    }
  );

  const navigate = useNavigate();

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRegistrationDetails({
      ...registrationDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createContact(registrationDetails)
      .then((response) => {
        if (response.affectedRows > 0) {
          alert(`Contact added at id : ${response.insertId}`);
          navigate("/contacts");
        }
      })
      .catch((error) => {
        console.log("Backend error", error);
      });
  };

  return (
    <div className="dark my-8">
      <div
        className="max-w-md w-full 
    mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black"
      >
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Sign up to Contacts Manager
        </h2>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer className="mb-4">
              <Label htmlFor="firstName">First name</Label>
              <Input
                id="firstName"
                placeholder="John"
                type="text"
                name="firstName"
                value={registrationDetails.firstName}
                onChange={handleInputChange}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="abc@example.com"
                type="email"
                name="emailId"
                value={registrationDetails.emailId}
                onChange={handleInputChange}
              />
            </LabelInputContainer>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer className="mb-4">
              <Label htmlFor="contact">Contact</Label>
              <Input
                id="contact"
                placeholder="9XXXXXXXXX"
                type="number"
                name="contact"
                value={registrationDetails.contact}
                onChange={handleInputChange}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="userRole">User Role</Label>
              <Input
                id="userRole"
                placeholder="Admin"
                type="text"
                name="userRole"
                value={registrationDetails.userRole}
                onChange={handleInputChange}
              />
            </LabelInputContainer>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer className="mb-4">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                placeholder="FAANG"
                type="text"
                name="company"
                value={registrationDetails.company}
                onChange={handleInputChange}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="designation">Designation</Label>
              <Input
                id="designation"
                placeholder="Team Lead"
                type="text"
                name="designation"
                value={registrationDetails.designation}
                onChange={handleInputChange}
              />
            </LabelInputContainer>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer className="mb-4">
              <Label htmlFor="gender">Gender</Label>
              <Input
                id="gender"
                placeholder="Male"
                type="text"
                name="gender"
                value={registrationDetails.gender}
                onChange={handleInputChange}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input
                id="dob"
                placeholder="DD/MM/YYYY"
                type="date"
                name="dob"
                value={registrationDetails.dob}
                onChange={handleInputChange}
              />
            </LabelInputContainer>
          </div>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Sign up &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default CreateContact;
