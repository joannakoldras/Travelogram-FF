import React, {useEffect, useState} from 'react'

import { ImBin2 } from 'react-icons/im';

import Log from "../../../helpers/Log";
import APICall from "../../../fakeAPI/fakeApi";
import MyProfileCategories from '../myProfileCategories/MyProfileCategories';
import { useNavigate } from "react-router-dom";

export default function MyProfilePhotos({returnCat, reloadChild}) {
    const [state, setstate] = useState(null);
    const [category, setCategory] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImages, setSelectedImages] = useState([]);
    const [deleteMode, setDeleteMode] = useState(null);
    let results;
    let id = 0;
    const navigate = useNavigate();

    const deleteMode_ = (e) => {
        setDeleteMode(!deleteMode);
    }
    

    const remove = (d) => {
        let res = selectedImages.filter(i => i.name != d);
        setSelectedImages(res);
    }

    const removeFromAPI = (e) => {
        let res = APICall.removeFromAPI(e.target.getAttribute('data-id'), Log.currentCategory);

        let mapped = [];
            for(let y = 0; y < res.length; y++) {
                mapped.push(<div key={res[y].id} onClick={(e) => {
                    e.target.setAttribute('data-id', res[y].id);
                    {deleteMode == true? removeFromAPI(e) : navToPosts(e);}
                }} className="photo-w"><img className="photo" src={res[y].src} alt="photo_"/></div>)
            }
            
            setstate(mapped);
            mapped = [];
    }

    const changeCategory = (t) => {
        results = null;
        setstate(null);
        setCategory(t);
    }

    const navToPosts = (e) => {
        Log.data_id = e.target.getAttribute('data-id');
        Log.id = e.target.getAttribute('data-user-id');
        navigate("/photo");
    }
    useEffect(() => {
        function chooseCat() {
            // } else 
            if (category == null) {
                results = null;
                setstate(null);
            }
            if(category == "S") {
                results = null;
                setstate(null);
                results = APICall.getMySpainList(1).map(i => i.spain);
            }
            if(category == "U") {
                results = null;
                setstate(null);
                results = APICall.getMyUSAList(1).map(i => i.usa);
            }
            if(category == "H") {
                results = null;
                setstate(null);
                results = APICall.getMyHollandList(1).map(i => i.holland);
            }

            if(category != null) {
                let mapped = [];
                for(let i = 0; i < results.length; i++) {
                    for(let y = 0; y < results[0].length; y++) {
                        mapped.push(<div key={results[0][y].id} onClick={(e) => {
                            e.target.setAttribute('data-id', results[0][y].id);
                            e.target.setAttribute('data-user-id', results[0][y].user_id);
                            {deleteMode == true? removeFromAPI(e) : navToPosts(e);}
                        }} className="photo-w"><img className="photo" src={results[0][y].src} alt="photo_"/></div>)
                    }
                    setstate(mapped);
                    mapped = [];
                    break;
                }
            }


        }
        chooseCat();
    }, [category, deleteMode])
    
    return (
        <>
            <MyProfileCategories changeCategory={changeCategory}/>
            <div className="click_to_donwload_data"><div onClick={(e) => {}} className="add-photo"> <input
                className="add-photo"
                type="file"
                name="myImage"
                onChange={(event) => {
                setSelectedImage(event.target.files[0]);
                selectedImages.push(event.target.files[0]);
                }}
            /> <div onClick={(e) => { deleteMode_(e)}} className={deleteMode == true ? "delete-mode-red" : "delete-mode-black"}><ImBin2 /></div>
             </div></div>
            {category == null ? <div>Kliknij w kategorię, aby pobrać dane.</div> : <div></div>}
            {state}
            

            {selectedImage && (
                    selectedImages.map(i=> {
                        id++;
                        return (<div key={id} className="photo-w"><img className="photo" src={URL.createObjectURL(i)} onClick={() => remove(i.name)} alt="photo_"/></div>)
                    }))}

        </>
    );
}
