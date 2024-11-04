import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/store";

const FormInput = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };
  const updateUser = (e) => {
    e.preventDefault();
    dispatch(setUser({ name: username }));
  };

  return (
    <form onSubmit={updateUser} className=" mx-4">
      <input
        className=" border border-solid border-black rounded-sm"
        required
        type="text"
        value={username}
        onChange={handleInputChange}
        placeholder="Enter username"
      />
      <button
        className=" px-4 ml-2 py-1 bg-slate-500 text-white rounded-2xl hover:bg-slate-700 transition-all duration-300 ease-linear"
        type="submit">
        Update User
      </button>
    </form>
  );
};

export default FormInput;
