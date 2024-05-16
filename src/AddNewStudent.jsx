import React from "react";

export default function AddNewStudent({ handleSubmit }) {
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2 className="h2">ADD NEW STUDENT</h2>

        <div className="form-add">
          <input type="text" placeholder="New student's name " />
          <input type="text" placeholder="New student's  email" />
          <input type="text" placeholder="New student's address" />
          <input type="text" placeholder="New student's number phone" />
          <button id="btn-add" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
