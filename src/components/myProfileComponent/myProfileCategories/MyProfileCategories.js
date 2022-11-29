import React, {useState} from 'react';
import Log from "../../../helpers/Log";

function MyProfileCategories({changeCategory}) {
    const [state, setstate] = useState("S");
    const handleClick = (t) => {
            Log.currentCategory = t;
            changeCategory(t);
    }

    
    return (
        <div className="categories">
            <span onClick={()=> handleClick("S")}>Hiszpania</span>
            <span onClick={()=> handleClick("H")}>Holandia</span>
            <span onClick={()=> handleClick("U")}>USA</span>
        </div>
    );
}

export default MyProfileCategories;