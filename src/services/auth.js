import Cookies from 'js-cookie';

export function DoLogin(json) {

    let expire = new Date(new Date().getTime() + 1 * 60 * 1000);

    Cookies.set('token', json.token, { expires: expire });
    Cookies.set('id', json.id, { expires: expire });

    if (json.refreshToken) {
        Cookies.set('refreshToken', json.refreshToken, { expires: 15 });
    } 

}

export function DoLogout() {
    
    Cookies.remove('token');
    Cookies.remove('refreshToken');
    Cookies.remove('id');
}

export function isLogged() {

    if (Cookies.get('token')) {
        return true;
    } else {
        return false;
    }
}

