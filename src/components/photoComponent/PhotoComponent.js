import React, {useEffect, useState} from 'react'
import NavComponent from '../navComponent/NavComponent';
import APICall from '../../fakeAPI/fakeApi';
import Log from '../../helpers/Log';
import AuthorComponent from './authorComponent/AuthorComponent';
import AuthorCommentComponent from './authorCommentComponent/AuthorCommentComponent';
import AuthorLoggedCommentComponent from './authorLoggedCommentComponent/AuthorLoggedCommentComponent';
import AuthorAddCommentComponent from './authorAddCommentComponent/AuthorAddCommentComponent';

function PhotoComponent(props) {
    const [state, setstate] = useState(null);
    let res = APICall.getPhotoWithComments(Log.id, Log.data_id);
    let getUserInfo = APICall.getUserLogo(Log.id);

    const reload = () => {
        let st = state + 1;
        setstate(st);
    }
    return (
        <div>
            <NavComponent />
            <div className="container_body">
                <div className="container_profile">
                    <div className="photo-wrap">
                        <img className="img" src={res.src} alt=""/>
                    </div>
                    <div className="comments-list-wrap">
                        <div className="author">
                            <AuthorComponent logo_src={getUserInfo.logo_src}
                                             name={getUserInfo.name}
                                             descr={res.descr}
                            />
                        </div>
                        {
                            res.posts.map(i => {
                                if(i.id == Log.id) {
                                    return (<AuthorLoggedCommentComponent
                                        post_id={i.id_post}
                                        src={APICall.getUserLogo(i.id).logo_src}
                                        name={APICall.getUserLogo(i.id).name}
                                        text={i.text}
                                        reload={reload}
                                    />)
                                } else {
                                    return (
                                        <AuthorCommentComponent 
                                            src={APICall.getUserLogo(i.id).logo_src}
                                            name={APICall.getUserLogo(i.id).name}
                                            text={i.text}
                                        />
                                    )
                                }
                            })
                        }
                        <AuthorAddCommentComponent
                        reload={reload} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoComponent;