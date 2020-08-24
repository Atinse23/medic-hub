import axios from 'axios';

const API_URL = 'https://medic-end.herokuapp.com'


export const login = async (user) => {
    return await axios
        .post(API_URL + '/login', {
            email: user.email,
            password: user.password
        })
        .then(response => {

            var base64Url = response.data.msg.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            console.log(jsonPayload);

            if (response) {
                localStorage.setItem('userToken', JSON.stringify(response.data))
                localStorage.setItem('userData', jsonPayload)

            }
            return jsonPayload;
        });
}

export const logout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData')
}

export const register = (user) => {
    return axios.post(API_URL + '/api/accounts/register/', {
        email: user.email,
        password: user.password,
        first_name: user.first_name,
        last_name: user.last_name,
        company_name: user.company_name,
        website: user.website,
        role: user.role,
        corporate: user.corporate,

    });
}

export const verifyEmail = () => {
    return axios.post(API_URL + "/api/accounts/verify-registration/", key)
}