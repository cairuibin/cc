

export default {
    SET_COLLAPSED(state) {
        state.collapsed = !state.collapsed
    },
    SET_ISUSERLOGIN(state,action){
         state.isUserLogin=localStorage.setItem('auth',action.data)
    }
}
