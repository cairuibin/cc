
export default {
    LOGIN_SUBMIT(state, action) {
        localStorage.setItem(
            "userInfo",
            JSON.stringify(Object.assign({}, action.data.user))
        )
    },
    BBB(state, action) {
        console.log(state, action, '212')

    },
    CCC(){
        console.log(';-----------------------------------------')
    }
}
