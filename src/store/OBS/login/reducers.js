
export default {
    LOGIN_SUBMIT(state, action) {
        localStorage.setItem(
            "userInfo",
            JSON.stringify(Object.assign({}, action.data.user))
        )
    }
}
