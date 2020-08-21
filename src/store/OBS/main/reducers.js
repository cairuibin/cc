
export default {
    CHANGE_ACTIVE(state, { data }) {
        state.activeKey = data;
        sessionStorage.setItem('header_menu_key', data);
    }
}