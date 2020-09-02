import axios from 'axios';

const transport = axios.create({
    withCredentials: true
})

const API_URL = 'https://medic-end.herokuapp.com'
// const API_URL = 'http://localhost:4000'


export const login = async (user) => {
    return await transport
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

export const register = async (user) => {
    return await transport.post(API_URL + '/register', {
        firstname: user.firstname,
        lastname: user.lastname,
        phonenumber: user.phonenumber,
        email: user.email,
        password: user.password
    }).then(
        res => {
            console.log(res);
            return res.data.user
        }
    ).catch(
        err => console.log(err)
    )
}

export const verifyEmail = () => {
    return transport.post(API_URL + "/api/accounts/verify-registration/", key)
}