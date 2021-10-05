import logo from "./logo.jpg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BsFillLockFill } from "react-icons/bs";
import "./App.css";
import React, { useState } from "react";
// import { useState, useEffect } from "react";
function App() {
    const [userName, setuserName] = useState("");
    const [pass, setpass] = useState("");
    const [showpass, setshowpass] = useState(false);
    // const [check, setcheck] = useState(true);

    return (
        <div className="App">
            <div className="body">
                <div className="hubt">
                    <p>Đăng nhập</p>
                    <p>My HUBT</p>
                </div>
                <div className="logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="form-login">
                    <div className="user">
                        <FaUserCircle className="icon-user" />
                        <input
                            type="text"
                            value={userName}
                            className=""
                            placeholder="Mã sinh viên của bạn"
                            onChange={(e) => {
                                setuserName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="pass">
                        <BsFillLockFill className="icon-pass" />
                        <input
                            type={showpass ? "text" : "password"}
                            className=""
                            placeholder="Mật khẩu mặc định là myhubt"
                            onChange={(e) => {
                                setpass(e.target.value);
                            }}
                        />
                        <button onClick={(_) => setshowpass((old) => !old)}>
                            {showpass ? (
                                <AiOutlineEyeInvisible size={20} />
                            ) : (
                                <AiOutlineEye size={20} />
                            )}
                        </button>
                    </div>
                </div>
                <div className="ckeck">
                    <input type="checkbox" onClick={(e) => {}} />
                    <span>Lưu mật khẩu</span>
                    <p
                        onClick={(e) => {
                            let a = localStorage.getItem("user", userName);
                            alert(a);
                        }}
                    >
                        Bạn quên mật khẩu ?
                    </p>
                </div>
                <div className="login">
                    <button
                        type="submit"
                        onClick={(e) => {
                            localStorage.setItem("user", userName);
                        }}
                    >
                        Đăng nhập
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
