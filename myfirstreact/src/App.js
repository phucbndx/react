import logo from "./logo.jpg";
// import facebook from "./facebook.svg";
// import gg from "./search.svg";
import "./App.css";
import React, { useState } from "react";
function App() {
    const [userName, setuserName] = useState("");
    const [pass, setpass] = useState("");
    const [showpass, setshowpass] = useState(false);
    const [check, setcheck] = useState(true);
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
                    <input
                        type="text"
                        className="user"
                        placeholder="Mã sinh viên của bạn"
                        onChange={(e) => {
                            setuserName(e.target.value);
                        }}
                    />
                    <div className="pass">
                        <input
                            type={showpass ? "text" : "password"}
                            className=""
                            placeholder="Mật khẩu mặc định là myhubt"
                            onChange={(e) => {
                                setpass(e.target.value);
                            }}
                        />
                        <button
                            onClick={() => {
                                setshowpass(showpass ? false : true);
                            }}
                        >
                            {showpass ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>
                <div className="ckeck">
                    <input
                        type="checkbox"
                        onClick={(e) => {
                            setcheck(check ? false : true);
                            console.log(check);
                        }}
                    />
                    <span>Lưu mật khẩu</span>
                    <p>Bạn quên mật khẩu ?</p>
                </div>
                <div className="login">
                    <button
                        type="submit"
                        value="submit"
                        onClick={() => {
                            alert(userName + ", " + pass);
                        }}
                    >
                        Đăng nhập
                    </button>
                </div>
            </div>

            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Đăng nhập</p>
            </header>
            <div className="input-form">
                <input type="text" />
            </div>
            <div className="pass">
                <input type={showpass ? "text" : "password"} />

                <button
                    onClick={() => {
                        setshowpass(showpass ? false : true);
                    }}
                >
                    show
                </button>
            </div>

            <div>
                <button

                >
                    Tiếp Tục
                </button>
            </div>

            <div className="login">
                <div>
                    <p>Hoặc đăng nhập với</p>
                </div>
            </div>

            <div className="icon-login">
                <div className="fb">
                    <img src={facebook} className="" alt="facebook" />
                    <p>Facebook</p>
                </div>
                <div className="gg ">
                    <img src={gg} className="" alt=" google" />
                    <p>Google</p>
                </div>
            </div> */}
        </div>
    );
}

export default App;
