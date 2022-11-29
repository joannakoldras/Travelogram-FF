import data from "./data";
import Log from '../helpers/Log';

export default class APICall {

    static logIn(e_mail, password) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].e_mail == e_mail && data[i].password == password ) {
                return {
                    auth: true,
                    id: data[i].id
                };
            }
        }
        return false;
    }

    static getAllUsers() {
        return data;
    }

    static getUserByName(name) {
        return data.filter(i => i.name == name);
    }

    static addComment(id, id_data, text) {

        let spain_c = data[id-1].spain_collection;
        let usa_c = data[id-1].usa_collection;
        let holland_c = data[id-1].holland_collection;

        let res;
        let position = 0;
        let pos = 0;

        for(let i = 0; i < spain_c.length; i++) {
            position++;
            if(spain_c[i].id == id_data) {
                res = "SPAIN";
                pos = position - 1;
                break;
            }
        }
        position = 0;
        for(let i = 0; i < usa_c.length; i++) {
            position++;
                if(usa_c[i].id == id_data) {
                    res = "USA";
                    pos = position - 1;
                    break;
                }
        }
        position = 0;
        for(let i = 0; i < holland_c.length; i++) {
            position++;
                if(holland_c[i].id == id_data) {
                    res = "HOLLAND";
                    pos = position - 1;
                    break;
                }
        }
        if(res == "SPAIN") {
            data[id-1].spain_collection[pos].posts.push({
                id: id, 
                id_post: new Date(),
                text: text 
            });
        }

        if(res == "HOLLAND") {
            data[id-1].holland_collection[pos].posts.push({
                id: id, 
                id_post: new Date(),
                text: text 
            });
        }

        if(res == "USA") {
            data[id-1].usa_collection[pos].posts.push(
            {
                id: id, 
                id_post: new Date(),
                text: text 
            });
        }

    }

    static removeComment(id, id_post) {
        if (id) {
            let photos = this.getAllPhotos();
            let comments;
            for (let i = 0; i < photos.length; i++){
                for (let y = 0; y < photos[i].length; y++){
                        if(photos[i][y].id) {
                        if(photos[i][y].id == id && photos[i][y].id != undefined && id !=undefined ) {
                            comments = photos[i][y];
                            break;
                        }
                    }
              }
            }
            comments.posts = comments.posts.filter(i => i.id_post != id_post);
            let user_id = comments.user_id;
            let spain_c = data[user_id-1].spain_collection;
            let usa_c = data[user_id-1].usa_collection;
            let holland_c = data[user_id-1].holland_collection;
            let res;
            let data_index;
            for(let i = 0; i < spain_c.length; i++) {
                if(spain_c[i].id == id) {
                    data_index = i;
                    break;
                }
            }

            for(let i = 0; i < holland_c.length; i++) {
                if(holland_c[i].id == id) {
                    data_index = i;
                    break;
                }
            }

            for(let i = 0; i < usa_c.length; i++) {
                if(usa_c[i].id == id) {
                    data_index = i;
                    break;
                }
            }
            data[user_id-1].spain_collection[data_index].posts = comments.posts;



        } else {
            alert('Error');
        }
    }


    static getSpainPhotos() {
        let photos = [];
        for (let i = 0; i < data.length; i++) {
            photos.push(data[i].spain_collection);
        }
        return photos;
    }

    static getUSAPhotos() {
        let photos = [];
        for (let i = 0; i < data.length; i++) {
            photos.push(data[i].usa_collection);
        }
        return photos;
    }

    
    static getHollandPhotos() {
        let photos = [];
        for (let i = 0; i < data.length; i++) {
            photos.push(data[i].holland_collection);
        }
        return photos;
    }


    static getAllPhotos() {
        let photos = [];
        for (let i = 0; i < data.length; i++) {
            photos.push(data[i].spain_collection);
            photos.push(data[i].usa_collection);
            photos.push(data[i].holland_collection);
        }
        return photos;
    }

    static removeFromAPI(id, type) {
        if(type == "H") {
            let path = data[0].holland_collection;
            let res = path.filter(i => i.id != id);
            data[0].holland_collection = res;
            return res;
        }

        if(type == "U") {
            let path = data[0].usa_collection;
            let res = path.filter(i => i.id != id);
            data[0].usa_collection = res;
            return res;
        }

        if(type == "S") {
            let path = data[0].spain_collection;
            let res = path.filter(i => i.id != id);
            data[0].spain_collection = res;
            return res;
        }
    }

    static getList() {
        return data;
    }

    static getUserLogo(id) {
        let result = data.filter(i => i.id == id);
        return result[0];
    }

    static getPhotoWithComments(id, id_photo) {
        let result = data.filter(i => i.id == id);
        let resSpainCollection = result[0].spain_collection;
        let resHollandCollection = result[0].holland_collection;
        let resUSACollection = result[0].usa_collection;
        let found;
        found = resHollandCollection.filter(i => i.id == id_photo);
        if(found.length == 0) {
            found = resUSACollection.filter(i => i.id == id_photo);
        }

        if(found.length == 0) {
            found = resSpainCollection.filter(i => i.id == id_photo);
        }
        return found[0];
    }

    static getPersonProfile(id) {
        let result = data.filter(i => i.id == id);
        return result;
    }

    static getMyHollandList(id) {
        let result = data.filter(i => i.id == id);
        let res = result.map (i => {
            return {holland: i.holland_collection};
        })
        return res;
    };

    static getMyUSAList(id) {
        let result = data.filter(i => i.id == id);
        let res = result.map (i => {
            return {usa: i.usa_collection};
        })
        return res;
    };


    static getMySpainList(id) {
        let result = data.filter(i => i.id == id);
        let res = result.map (i => {
            return {spain: i.spain_collection};
        })
        return res;
    };


    static getHollandList(id) {
        let res = data.map (i => {
            return i.holland_collection;
        })
        return res;
    };
            
    static getSpainList(id) {
        let res = data.map (i => {
            return i.spain_collection;
        })
        return res;
    };

    static getUSAList(id) {
        let res = data.map (i => {
            return i.usa_collection;
        })
        return res;
    }


    static removePostHollandList(id_user, id_photo, id_post) {
        for (let i = 0; i < data.length; i++) {
            if(id_user == data[i].id) {
                for(let y = 0; y < data[i].holland_collection.length; y++) {
                    if(data[i].holland_collection[y].id == id_photo) {
                        for(let z = 0; z < data[i].holland_collection[y].posts.length; y++) {
                            if(data[i].holland_collection[y].posts[id_post]) {
                                data[i].holland_collection[y].posts.splice(id_post, 1);
                            }
                        }       
                    }
                }
            }
        }

    }
}