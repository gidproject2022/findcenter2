import { $host, $authHost } from "./index";
import jwt_decode from "jwt-decode";
import axios from "axios";
export const registration = async (
  email,
  password,
  age,
  description,
  usertype,
  last_name,
  name,
  ava,
  skills
) => {
  let formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);
  formData.append("age", age);
  formData.append("description", description);
  formData.append("name", name);
  formData.append("last_name", last_name);
  formData.append("usertype", usertype);
  formData.append("ava", ava);
  formData.append("skills", skills);
  const { data } = await $host.post(
    "/api/user/registration",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $host.post(`/api/user/login`, {
    email,
    password,
  });
  console.log(jwt_decode(data.token));
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const check = async () => {
  const { data } = await $authHost().get(`/api/user/auth`, {
    headers: {},
  });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
