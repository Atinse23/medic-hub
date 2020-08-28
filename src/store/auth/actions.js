import { login, register, logout, } from '../../services/auth-user'

export default {
    async registerUser({ commit }, user) {
        return await register(user).
            then(
                user => {
                    console.log(user)
                    commit('registerSuccess', user);

                    return Promise.resolve(user);
                }
            ).catch(
                err => {
                    console.log(err)
                    commit('registerFailure');
                    return Promise.reject(error)
                }
            )

    },
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
    }
}