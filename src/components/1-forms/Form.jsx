import React from "react";

const Form = () => {
  return (
    <div>
      <form style={{ margin: "5rem" }}>
        <div class="mb-3">
          <label htmlFor="username" class="form-label">
            Username
          </label>
          <input type="text" className="form-control" id="username" />
        </div>
        <div class="mb-3">
          <label htmlFor="email" class="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
