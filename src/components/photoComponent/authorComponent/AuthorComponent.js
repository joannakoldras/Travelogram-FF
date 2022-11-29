import React from 'react'

function AuthorComponent({logo_src, name, descr}) {
    return (
        <>
            <img className="img-logo" src={logo_src} alt=""/>
            <div className="comment">
                <p className="user-name">{name}</p>
                <p className="description-img">{descr}</p>
            </div>
        </>
    )
}

export default AuthorComponent;