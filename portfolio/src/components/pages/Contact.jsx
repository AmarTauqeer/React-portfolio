import React, { useState } from "react";

const Contact = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputs.name || !inputs.email || !inputs.message) {
      alert("Please fill all the fields first");
      return false;
    }
    alert("Thanks " + inputs.name + " for your message");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="heading">Contact</h2>
      <div className="contact">
        <div className="row justify-content-center">
          <div className="col-md-2">
            <label className="contact-label">Name</label>
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-2">
            <label className="contact-label">Email</label>
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              type="text"
              name="email"
              value={inputs.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-2">
            <label className="contact-label">Message</label>
          </div>
          <div className="col-md-6">
            <textarea
              className="form-control"
              name="message"
              rows={5}
              value={inputs.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-2">
            <label className="contact-label"></label>
          </div>
          <div className="col-sm-6">
            <button type="submit" className="btn btn-success form-control">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Contact;
