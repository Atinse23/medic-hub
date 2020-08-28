export default {
    loginSuccess: (state, user) => {
        state.status.loggedIn = true;
        state.user = JSON.parse(user);
    },
    loginFailure: (state) => {
        state.status.loggedIn = false;
        state.user = null;
    },
    logout: (state) => {
        state.status.loggedIn = false;
        state.user = null;
    },
    registerSuccess: (state, user) => {
        state.status.loggedIn = true;
        state.user = user;
    },
    registerFailure: (state) => {

        state.status.loggedIn = false;
    },

}