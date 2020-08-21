
import { LOGIN_SUBMIT, BBB as a, CCC as c } from './action_type'
export const LOGIN_SUBMITFN = (data) => ({
    type: LOGIN_SUBMIT,
    data: data
});

export const BBB = data => (
    {
        type: a,
        data: data
    }
)
export const CCC = data => (
    {
        type: c,
        data: data
    }
)

export default {
    BBB,
    CCC
}