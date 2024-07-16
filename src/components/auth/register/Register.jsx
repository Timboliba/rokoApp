import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    setStep(step + 1);
  };
  const handlePreview = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data Submit : ", formData);
  };
  const [phone, setPhone] = useState("");
  const sendOTP = () => {};
  return (
    <div
      className="registerContent"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "auto",
        padding: "10%",
        backgroundColor: "red",
      }}
    >
      {step === 1 && (
        <div style={{}}>
          <h2>Step One</h2>
          <form style={{ display: "grid", gap: "10px", alignItems: "center" }}>
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <button onClick={handleNext} style={{ width: "150px" }}>
              Next
            </button>
          </form>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Step Two</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="address"
                value={formData.address}
                placeholder="Address"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="phone"
                name="phone"
                value={formData.phone}
                placeholder="Number"
                onChange={handleChange}
              />
            </div>
            <button onClick={handlePreview}>Preview</button>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      {/* <div className="otpAuth">
      <PhoneInput
      country={'US'}
      value={phone}
      onChange={()=>setPhone("+"+phone)}
      />
      </div>
      <button>Enoyer</button> */}
    </div>
  );
};

export default Register;
