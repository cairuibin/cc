import { CHANGE_ACTIVE } from './action_type'

export const changeIndex = (data) => {
    return {
        type: CHANGE_ACTIVE,
        data: data
    }
}