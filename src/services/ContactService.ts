import { IRegistration } from "../models/ILogin";

const BACKEND_URL = "https://users-api-qbc4.onrender.com/contact";

export const createContact = async (registrationDetails: IRegistration) => {
  console.log("contact service", registrationDetails);
  const url = `${BACKEND_URL}/createContact`;

  const requestOptions: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registrationDetails),
  };

  const response = await fetch(url, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("POST request successful:", data);
      return data;
    })
    .catch((error) => {
      console.error("There was a problem with your fetch operation:", error);
    });

  return response;
};

export const getAllContacts = async () => {
  const getAllContactsUrl = `${BACKEND_URL}/contacts`;
  const contacts = await fetch(getAllContactsUrl)
    .then(async (response) => {
      return response.json();
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
  return contacts;
};
