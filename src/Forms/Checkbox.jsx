import React, { useState } from "react";

export default function Checkbox() {
  const [users, setUsers] = useState([
    { id: 1, name: "Gilad Gray", checked: true },
    { id: 2, name: "Jason Killian", checked: false },
    { id: 3, name: "Antoine Llorca", checked: false },
  ]);

  const toggleCheckbox = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, checked: !user.checked } : user
      )
    );
  };

  return (
    <>
      <h4 className="text-lg font-semibold text-start">Checkbox</h4>
      <p>Switches toggle the state of a single setting on or off.</p>
      <div className="h-max w-full flex-col justify-start flex-wrap items-center gap-3">
        <p className="text-blue-600">Assign Responsibility</p>
        <div className="space-y-4 p-4">
          {users.map((user) => (
            <label
              key={user.id}
              className="flex items-center gap-3 text-lg cursor-pointer"
            >
              <input
                type="checkbox"
                checked={user.checked}
                onChange={() => toggleCheckbox(user.id)}
                className="w-5 h-5 text-blue-600 accent-blue-600"
              />
              {user.name}
            </label>
          ))}
        </div>
      </div>
    </>
  );
}
