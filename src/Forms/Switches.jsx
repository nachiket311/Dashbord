import React, { useState } from "react";

const Switches = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Gilad Gray", enabled: true },
    { id: 2, name: "Jason Killian", enabled: false },
    { id: 3, name: "Antoine Llorca", enabled: false },
  ]);

  const toggleUser = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, enabled: !user.enabled } : user
      )
    );
  };
  return (
    <>
      <h4 className="text-lg font-semibold text-start">Switches</h4>
      <p>Switches toggle the state of a single setting on or off.</p>
      <div className="h-max w-full flex-col justify-start flex-wrap items-center gap-3">
        <p className="text-blue-600">Assign Responsibility</p>
        <div className="space-y-4 p-4">
          {users.map((user) => (
            <div key={user.id} className="flex items-center gap-4">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={user.enabled}
                  onChange={() => toggleUser(user.id)}
                  className="sr-only peer"
                />
                <div className="w-12 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-400 transition-colors duration-300"></div>
                <div className="absolute top-1/2 left-0.5 -translate-y-1/2 w-6 h-6 peer-checked:bg-blue-600 bg-white rounded-full shadow-md transition-transform duration-300 peer-checked:translate-x-[1.5rem]"></div>
              </label>
              <span className="w-max">{user.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Switches;
