import Cookies from 'js-cookie';

export function DoLogin(json) {

    Cookies.set('token', json.token, { expires: 1 });
    Cookies.set('id', json.id, { expires: 1 });
    Cookies.set('name', json.name, { expires: 1 });
    Cookies.set('email', json.email, { expires: 1 });
    Cookies.set('experience', json.experience, { expires: 1 });

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