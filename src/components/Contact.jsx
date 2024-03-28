/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux';



const Contact = () => {
    const contacts = useSelector((state) => state.contact.contacts);
    console.log("contacts", contacts);
  return (
    <div>
        {contacts.map((contact) => (
        <div
          key={contact.name}
        //   style={{ border: "solid #eaeaea", width: "300px", padding: "24px" }}
          className=' border-solid border-2 bg-white w-[300px]  p-[24px]   '
        >
          <img src={contact.image} alt="" className='' />
          <h2>{contact.name}</h2>
          <h3>{contact.email}</h3>
          <h5>{contact.phone}</h5>
        </div>
      ))}
    </div>
  )
}

export default Contact