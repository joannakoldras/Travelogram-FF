import React, {useEffect, useState} from 'react';
import NavSearchComponent from '../navComponent/NavSearchComponent';
import APICall from '../../fakeAPI/fakeApi';
import Log from '../../helpers/Log';
import { useNavigate } from "react-router-dom";

function SearchComponent(props) {
    const [state, setState] = useState(null)
    const [state2, setstate2] = useState(null)
    const navigate = useNavigate();
    const [searchingMode, setsearchingMode] = useState("PHOTO")
    const [r, setr] = useState(0)
    let list;
    let userList;


    const reload = () => {
        let i = r + 1;
        setr(i);
    }

    const changeMode = (e) => {
        setsearchingMode(e);
    }

    const findUser = (string) => {
        if(string == "All") {
            userList = APICall.getAllUsers().map(i => {
                return (<div key={i.id} 
                    className="photo-w">
                    <img className="photo" src={i.logo_src} alt={i.name}/>
                </div>)
            })
            setstate2(userList);
        } else {
            userList = APICall.getUserByName(string).map(i => {
                return (<div key={i.id} 
                    className="photo-w">
                    <img className="photo" src={i.logo_src} alt={i.name}/>
                </div>)
            })
            setstate2(userList);
        }
    }

    const findEl = (string) => {
        if(searchingMode == "PHOTO") {
            if(string == "Holandia") {
                list = APICall.getHollandList().map(i => {
                    return i.map(y => {
                        return (
                            <div key={y.id} onClick={(e) => {
                                    e.target.setAttribute('data-id', y.id);
                                    e.target.setAttribute('data-user-id', y.user_id);
                                    navToPosts(e);
                                }} 
                                className="photo-w">
                                    <img className="photo" src={y.src} alt="photo_"/>
                            </div>
            
                        )
                    });
                });
                setState(list);
            }
    
            if(string == "USA") {
                list = APICall.getUSAList().map(i => {
                    return i.map(y => {
                        return (
                            <div key={y.id} onClick={(e) => {
                                    e.target.setAttribute('data-id', y.id);
                                    e.target.setAttribute('data-user-id', y.user_id);
                                    navToPosts(e);
                                }} 
                                className="photo-w">
                                    <img className="photo" src={y.src} alt="photo_"/>
                            </div>
            
                        )
                    });
                });
                setState(list);
            }
    
            if(string == "Hiszpania") {
                list = APICall.getSpainList().map(i => {
                    return i.map(y => {
                        return (
                            <div key={y.id} onClick={(e) => {
                                    e.target.setAttribute('data-id', y.id);
                                    e.target.setAttribute('data-user-id', y.user_id);
                                    navToPosts(e);
                                }} 
                                className="photo-w">
                                    <img className="photo" src={y.src} alt="photo_"/>
                            </div>
            
                        )
                    });
                });
                setState(list);
            }
    
            if(string == "All") {
                list = APICall.getAllPhotos().map(i => {
                    return i.map(y => {
                        return (
                            <div key={y.id} onClick={(e) => {
                                    e.target.setAttribute('data-id', y.id);
                                    e.target.setAttribute('data-user-id', y.user_id);
                                    navToPosts(e);
                                }} 
                                className="photo-w">
                                    <img className="photo" src={y.src} alt="photo_"/>
                            </div>
            
                        )
                    });
                });
                setState(list);
            }
        }
 
    }
    const navToPosts = (e) => {
        Log.data_id = e.target.getAttribute('data-id');
        Log.id = e.target.getAttribute('data-user-id');
        navigate("/photo");
    }

    useEffect(() => {
        if(searchingMode == "PHOTO") {
            list = APICall.getAllPhotos().map(i => {
                return i.map(y => {
                    return (
                        <div key={y.id} onClick={(e) => {
                                e.target.setAttribute('data-id', y.id);
                                e.target.setAttribute('data-user-id', y.user_id);
                                navToPosts(e);
                            }} 
                            className="photo-w">
                                <img className="photo" src={y.src} alt="photo_"/>
                        </div>
        
                    )
                })
            })
            setState(list);
        }

        if(searchingMode == "USER") {
            userList = APICall.getAllUsers().map(i => {
                <div key={i.id} 
                className="photo-w">
                    <img className="photo" src={i.logo_src} alt={i.name}/>
            </div>
            })
            setstate2(userList);
        }

    }, [])

    return (
        <>
         <NavSearchComponent changeMode={changeMode} findUser={findUser} findEl={findEl} reload={reload} />
         <div className="container_body">
                <div className="container_profile">
                    {searchingMode == "PHOTO" ? state : state2}
                </div>
            </div>
        </>
    )
}

export default SearchComponent;