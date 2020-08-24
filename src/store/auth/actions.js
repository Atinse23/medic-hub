import { login, register, logout, } from '../../services/auth-user'

export default {
    async loginUser({ commit }, user) {
        return await login(user).then(
            user => {
                console.log(user)
                commit('loginSuccess', user);

                return Promise.resolve(user);
            },
            error => {
                commit('loginFailure');
                return Promise.reject(error)
            }
        );

    },
    async logoutUser({ commit }) {
        logout();
        await commit('logout');
    },
    async registerUser({ commit }, user) {
        return await register(user).then(
            response => {
                commit('registerSuccess');
                return Promise.resolve(response.data);
            },
            error => {
                commit('registerFailure');
                return Promise.reject(error);
            }
        );
    }
}