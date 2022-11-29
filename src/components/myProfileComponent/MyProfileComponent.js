import React, {useState, useEffect} from 'react';
import MyProfileDescriptionComponent from './myProfileDescriptionComponent/MyProfileDescriptionComponent';
import MyProfilePhotos from './myProfilePhotos/MyProfilePhotos';
import NavComponent from '../navComponent/NavComponent';
import Log from "../../helpers/Log";

function MyProfileComponent({reload}) {
    const [category, setCategory] = useState(null);

    const changeCat = (t) => {
        setCategory(t);
    }

    const returnCat = () => {
        return category;
    }

    const reloadChild = () => {
    }



    useEffect(() => {
        
    }, [category])

    return (
        <>
            <NavComponent/>
            <div className="container_body">
                <div className="container_profile">
                    <MyProfileDescriptionComponent/>
                    <MyProfilePhotos reloadChild={reloadChild} returnCat={returnCat} />
                </div>
            </div>
        </>
    );
}

export default MyProfileComponent;