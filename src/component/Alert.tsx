import { useState } from "react";

const Alert = () => {
  const [show, setShow] = useState(false);
  const text = "";
  const name = "Siid";
  return (
    <>
      <button className="btn btn-danger mt-1" onClick={() => setShow(!show)}>
        Alert
      </button>
      {show && <div className="alert mt-2">Alert</div>}
      <h2>{text || "No Alert"}</h2>
      <h2>{text && "hello"}</h2>
      <h2 style={{ color: "blue" }}>{name || "No Alert"}</h2>
      <h2 style={{ color: "blue" }}>{name && "hello"}</h2>
    </>
  );
};

export default Alert;
