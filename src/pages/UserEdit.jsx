import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function UserEdit() {
    const { id } = useParams();

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
      });
    
    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
      };
    
    const handleSave = (e) => {
      console.log("User data saved:", userData);
      console.log(id);
    };
    return (
        <div className="container mx-auto p-4">
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            placeholder="Name"
            className="mb-2 w-full rounded border p-2"
          />
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Email"
            className="mb-2 w-full rounded border p-2"
          />
          <input
            type="text"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            className="mb-4 w-full rounded border p-2"
          />
    
          <button
            onClick={handleSave}
            className="rounded bg-green-500 px-4 py-2 text-white">
            Save
          </button>
        </div>
      );
};