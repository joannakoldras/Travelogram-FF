import React, { useState } from 'react';
import APICall from '../../fakeAPI/fakeApi';
import Log from '../../helpers/Log';
import { useNavigate } from "react-router-dom";

function LoginComponent(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState(false);
    const navigate = useNavigate();

    const handleChange = (t, e) => {
        if(t == "e") {
            setEmail(e.target.value);
        } else if (t == "p") {
            setPassword(e.target.value);
        }
      }

    const handleSubmit = (e) => {   
        e.preventDefault();
        let resultAPICall = APICall.logIn(email, password);
        console.log(resultAPICall);
        if(resultAPICall.auth) {
            Log.setLoggedIn(resultAPICall.id);
            setMsg(false);
            navigate("/myprofile");

        } else {
            setMsg(true);
        }
      }

    return (
        <div className="container">
            <div className="container-panel">
                <div className="panel-login">
                    <form onSubmit={(e) => handleSubmit(e)} action="" method="get">
                        {msg
                            ? <h3 className="wrong_data">Wprowadzone dane są niepoprawne!</h3>
                            : 
                            <></>
                        }
                        <h1>Travelogram</h1>
                        <div>
                            <input value={email} onChange={(e) => {handleChange("e", e)}} placeholder="Adres e-mail" type="email" name="email" id="email" required/>
                        </div>
                        <div>
                            <input value={password} onChange={(e) => {handleChange("p", e)}} placeholder="Hasło" type="password" name="password" required/>
                        </div>
                        <div>
                            <input type="submit" value="Zaloguj się"/>
                        </div>
                        <div className="break_wrap">
                            <div className="break"></div>
                            <span>lub</span>
                        </div>
                        <div className="reg_info">
                            Nie masz konta? <b>Zarejestruj się</b>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent;