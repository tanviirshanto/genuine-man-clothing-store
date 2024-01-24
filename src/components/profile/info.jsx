import React, { useState, useEffect } from "react";

function Info({ user }) {
  const [name, setName] = useState(user.name || ""); // Provide an initial value
  const [contact, setContact] = useState(user.contact || "");
  const [email, setEmail] = useState(user.email || "");
  const [address, setAddress] = useState(user.address || "");

  useEffect(() => {
    // Update state only if user data changes
    setName(user.name || "");
    setContact(user.contact || "");
    setAddress(user.address || "");
    setEmail(user.email || "");
  }, [user]);

  return (
    <div className="mx-5 md:mx-0 max-w-screen">
      <div className="">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Full Name"
          required
        />
      </div>
      <div className="flex pt-2 gap-3">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="example@email.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="contact"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Contact No.
          </label>
          <input
            type="phone"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="+8801........."
            required
          />
        </div>
      </div>

      <div className="pt-2">
        <label
          htmlFor="address"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Address
        </label>
        <input
          type="address"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="House no., Road No, Area Name,  City"
          required
        />
      </div>
    </div>
  );
}

export default Info;
