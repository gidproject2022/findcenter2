import React, {useState, useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import {Context} from "../index";
import {login} from "../http/userApi";
import {INFO_ROUTE} from "../utils/consts";

const AuthPage = () => {
    const  {user} = useContext(Context)

    const navigation = useNavigate()

    const signIn = async () => {
        try {
            let data;
            data = await login(email, password)
            user.setUser(user)
            user.setIsAuth(true)
            navigation(INFO_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

  return (
    <form
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 90)",
        flexDirection: "column",
      }}
    >
      <h2>login</h2>
      email
      <input value={email} onChange={e => setEmail(e.target.value)} type={"email"} />
      password
      <input value={password} onChange={e => setPassword(e.target.value)} type={"password"} />
      <button type="button" onClick={signIn}> Log In</button>
      <Link to="/registration">Нет аккаунта? Зарегистрироваться</Link>
    </form>
  );
};

export default AuthPage;
