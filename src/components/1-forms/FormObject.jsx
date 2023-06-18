import React, { useState } from "react";

const FormObject = () => {
  const [formvalues, setFormvalues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleFormValues = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.id);
    // console.log(e.target.value);
    setFormvalues({ ...formvalues, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    const { username, email, password } = formvalues;
    alert(`username : ${username}
    email : ${email}
    password : ${password}
    `);
  };

  return (
    <div>
      <form style={{ margin: "5rem" }} onSubmit={handleSubmit}>
        <div class="mb-3">
          <label htmlFor="username" class="form-label">
            Username : <span>{formvalues.username}</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={formvalues.username}
            onChange={handleFormValues}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="email" class="form-label">
            Email address : <span>{formvalues.email}</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={formvalues.email}
            onChange={handleFormValues}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={formvalues.password}
            onChange={handleFormValues}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormObject;
