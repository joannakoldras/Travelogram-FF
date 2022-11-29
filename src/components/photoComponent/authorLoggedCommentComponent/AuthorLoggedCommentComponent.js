import React from 'react';
import Log from '../../../helpers/Log';
import APICall from '../../../fakeAPI/fakeApi';

function AuthorLoggedCommentComponent({src, name, text, post_id, reload}) {
    const removeComment = () => {
        Log.post_id = post_id;
        APICall.removeComment(Log.data_id, Log.post_id);
        reload();
    }
    return (
        <div className="author-comment">
            <img className="img-logo" src={src} alt=""/>
            <div className="comment">
                <p className="user-name">{name}</p>
                <p className="description-img">{text}</p>
                <div onClick={() => {removeComment()}} className="delete-comment">X</div>
            </div>
        </div>
    );
}

export default AuthorLoggedCommentComponent;