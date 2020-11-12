import React from "react";
import "./register.scss";
import { RegisterBg } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} alt={RegisterBg} className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Register Page</p>
        <Input label="Fullname" placeholder="Fullname" type="text" />
        <Gap height={15} />
        <Input label="Email" placeholder="Email" type="email" />
        <Gap height={15} />
        <Input label="Password" placeholder="Password" type="password" />
        <Gap height={30} />
        <Button title="Register" onClick={() => history.push("/login")} />
        <Link title="Kembali ke login" onClick={() => history.push("/login")} />
      </div>
    </div>
  );
};

export default Register;
