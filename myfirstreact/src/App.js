import logo from "./logo.jpg";
import facebook from "./facebook.svg";
import gg from "./search.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Đăng nhập</p>
            </header>
            <div className="input-form">
                <form>
                    <input type="text" />
                </form>
                <form>
                    <input type="password" />
                </form>
                <div>
                    <input type="submit" value=" Tiếp tục" />
                </div>
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
            </div>
        </div>
    );
}
export default App;
