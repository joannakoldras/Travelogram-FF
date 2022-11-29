import React from 'react'

function AuthorCommentComponent({src, name, text}) {
    return (
        <div className="author-comment">
            <img className="img-logo" src={src} alt=""/>
            <div className="comment">
                <p className="user-name">{name}</p>
                <p className="description-img">{text}</p>
            </div>
        </div>
    )
}


export default AuthorCommentComponent;