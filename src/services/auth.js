import Cookies from 'js-cookie';

export function DoLogin(json) {

    Cookies.set('token', json.token, { expires: 1 });
    Cookies.set('id', json.id, { expires: 1 });

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

export function refreshTokenIsValid() {

    if (isLogged() === false && Cookies.get("refreshToken")) {

        return { status: true, refreshToken: Cookies.get('refreshToken') };

    } else {

        return { status: false };
    }
}
