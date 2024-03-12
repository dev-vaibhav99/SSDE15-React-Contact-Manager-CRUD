import React, { useEffect, useState } from "react";
import { getAllContacts } from "../services/ContactService";
import { IContacts } from "../models/IContacts";

const AllContacts: React.FC = () => {
  const [contacts, setContacts] = useState<IContacts[]>([]);

  useEffect(() => {
    getAllContacts()
      .then((response) => {
        response.length > 0 && setContacts(response);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(contacts);
  return (
    <div>
      <table>
        <tr>
          <th>Firstname</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Company</th>
          <th>Designation</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>Role</th>
        </tr>
        {contacts?.map((contact: IContacts) => (
          <tr key={contact.id}>
            <td>{contact.firstName}</td>
            <td>{contact.emailId}</td>
            <td>{contact.contact}</td>
            <td>{contact.company}</td>
            <td>{contact.designation}</td>
            <td>{contact.gender}</td>
            <td>{contact.dob?.toString()}</td>
            <td>{contact.userRole}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default AllContacts;
