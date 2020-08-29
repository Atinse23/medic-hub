import actions from './actions'
import getters from './getters'
import mutations from './mutations'





const initialState = {
    product: {},
    isPresent: false
}

export default {
    namespaced: true,
    state: initialState,
    actions,
    mutations,
    getters
};