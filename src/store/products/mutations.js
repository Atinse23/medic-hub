export default {
    loadItemSuccessful: (state, item) => {
        console.log(item)
        state.isPresent = true;
        state.product = item
    }

}