import React, { useRef, useEffect } from "react";

const Form = () => {
  const refContainer = useRef<HTMLInputElement>(null);

  useEffect(() => {
    refContainer.current?.focus();
  }, []);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    // console.log(formData);
    // const email = formData.get("email");
    // console.log(email);
    // console.log([...formData.entries()]);
    // const newUser = Object.fromEntries(formData);
    // console.log(newUser);
    // e.currentTarget.reset();
    const name = refContainer.current?.value;
    console.log(name);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h4 className="pt-3">Form Data API</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter your name"
            name="name"
            ref={refContainer}
          />
        </div>
        {/* <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="form-control"
            placeholder="Enter your email"
            name="email"
          />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter your password"
            name="password"
          />
        </div> */}
        <div className="d-grid gap-2 col-10 mx-auto pb-3">
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
