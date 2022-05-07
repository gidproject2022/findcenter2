import React, { useState,  } from "react";
import {Link, useNavigate} from "react-router-dom";
import {INFO_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import axios from "axios";
import {observer} from "mobx-react-lite";

const CreateProjectPage = observer(() => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()
    const [last_name, setLastName] = useState()
    const [age, setAge] = useState()
    const [usertype, setUserType] = useState("USER")
    const [description, setDescription] = useState()
    const [file, setFile] = useState(null)
    const [skills, setSkills] = useState()

    const navigation = useNavigate();

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const signUp = async () => {
        let formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        formData.append("age", age);
        formData.append("description", description);
        formData.append("name", name);
        formData.append("last_name", last_name);
        formData.append("usertype", usertype);
        formData.append("ava", file);
        formData.append("skills", skills);
        await axios.post('http://localhost:7000/api/user/registration', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {

            return res
        })
        navigation('/')
    };

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
            <h2>Create Project</h2>
            email
            <input
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                type={"email"}
            />
            password
            <input
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                type="password"
            />
            name
            <input
                value={name}
                onChange={(event) => {
                    setName(event.target.value)
                }}
                type="text"
            />
            last_name
            <input
                value={last_name}
                onChange={(event) => {
                    setLastName(event.target.value);
                }}
                type="text"
            />
            age
            <input
                value={age}
                onChange={(event) => {
                    setAge(event.target.value);
                }}
                type="number"
            />
            description
            <input
                value={description}
                onChange={(event) => {
                    setDescription(event.target.value);
                }}
                type="text"
            />
            usertype
            <select
                value={usertype}
                onChange={(event) => {
                    setUserType(event.target.value);
                }}
            >
                <option value={"SUPPLIER"}>Поставщик образования</option>
                <option value={"USER"}>Пользователь</option>
            </select>
            Ava
            <input
                type="file"
                onChange={selectFile}
            />
            skills
            <input
                type="text"
                value={skills}
                onChange={(event) => {
                    setSkills(event.target.value);
                }}
            />
            <button type="submit" onClick={signUp}>
                Sign Up
            </button>
            <Link to={LOGIN_ROUTE}>Есть аккаунт? Войти</Link>
        </form>
    )
})
export default CreateProjectPage;
