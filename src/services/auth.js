import Cookies from 'js-cookie';

export function DoLogin(json) {

    Cookies.set('token', json.token, { expires: 999 });
    Cookies.set('id', json.id);
    Cookies.set('name', json.name);
    Cookies.set('email', json.email);
    Cookies.set('experience', json.experience);

}

export function DoLogout() {
    
    Cookies.remove('token');
    Cookies.remove('id');
    Cookies.remove('name');
    Cookies.remove('email');
    Cookies.remove('experience');
}

export function isLogged() {
    if (Cookies.get('token')) {
        return true;
    } else {
        return false;
    }
}