import React from "react";
// import "./register.scss";
import { LoginBg } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} alt={LoginBg} className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Email" type="email" />
        <Gap height={15} />
        <Input label="Password" placeholder="Password" type="password" />
        <Gap height={30} />
        <Button title="Login" onClick={() => history.push("/")} />
        <Link
          title="Belum punya akun, silahkan daftar"
          onClick={() => history.push("/register")}
        />
      </div>
    </div>
  );
};

export default Login;
