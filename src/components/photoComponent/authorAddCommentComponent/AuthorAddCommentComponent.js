import React, {useState,useEffect} from 'react';
import { BsArrowRightCircle } from "react-icons/bs";
import APICall from "../../../fakeAPI/fakeApi";
import Log from "../../../helpers/Log";

function AuthorAddCommentComponent({reload}) {
    const [state, setstate] = useState("");
    const [reloadv, setreloadv] = useState(null);
    const addComment = () => {
        APICall.addComment(Log.id, Log.data_id, state);
        reload();
        setreloadv(1);
        setstate('');
    }
    useEffect(() => {

    }, [reloadv])
    return (
        <div className="add-comment">
            <input value={state} onChange={(e) => setstate(e.target.value)} placeholder="Dodaj komentarz" type="text"/>
            <span onClick={() => {addComment()}}> <BsArrowRightCircle /> </span>
        </div>
    );
}

export default AuthorAddCommentComponent;