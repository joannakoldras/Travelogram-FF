import React, {useLocation, useState} from 'react';
import {
    Link
  } from "react-router-dom";

import { FiUser } from "react-icons/fi";
import { HiOutlinePhotograph } from "react-icons/hi";
import { FaSearch } from 'react-icons/fa';
function NavSearchComponent({findEl, changeMode, findUser, reload}) {
const [mode, setmode] = useState("PHOTO");
const [state, setstate] = useState("")
    const handleMode = (e) => {
        setstate("");
        setmode(e);
        changeMode(mode);
        reload();
    }

    const handleChange = (e) => {
        setstate(e);
        if(mode == "PHOTO") {
            reload();
            findEl(e);
            reload();
        }
        if(mode == "USER") {
            reload();
            findUser(e);
            reload();
        }

    }
    
    return (
        <nav>
            <div>
                <span className="logo">
                    <Link to="/myprofile">Travelogram</Link>
                </span>
                <div className="search">
                    <FaSearch />
                    <input value={state} onChange={(e) => {handleChange(e.target.value)}} placeholder="Szukaj" type="text" />
                    <div className="choose-search">
                        <div onClick={() => handleMode("USER")} className="user-search">
                            <FiUser />
                        </div>
                        <div onClick={() => handleMode("PHOTO")} className="photos-search">
                            <HiOutlinePhotograph />
                        </div>
                    </div>
                </div>
                <span className="logout">
                    <button>
                        <Link to="/">Wyloguj się</Link>
                    </button>
                </span>
            </div>
        </nav>
    );
}

export default NavSearchComponent;