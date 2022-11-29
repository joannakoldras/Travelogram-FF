export default class Log {
    
    static isLoggedIn = false;
    static id;
    static currentCategory = "S";
    static data_id;
    static post_id;

    static setLoggedIn(id) {
        this.isLoggedIn = true;
        this.id = id;
    }
    static setLogOut() {
        this.isLoggedIn = false;
    }
}