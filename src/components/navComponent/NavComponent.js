import React, {useLocation} from 'react';
import {
    Link
  } from "react-router-dom";

import { FaSearch } from 'react-icons/fa';
function NavComponent(props) {
    return (
        <nav>
            <div>
                <span className="logo">
                    <Link to="/myprofile">Travelogram</Link>
                </span>
                <div className="search">
                    <FaSearch />
                    <Link to="/search">
                        <input placeholder="Szukaj" type="text" />
                    </Link>
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

export default NavComponent;