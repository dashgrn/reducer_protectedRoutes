import { types } from "../types/Types"

export const login = (name) => ({
    type: types.login,
    payload: {
        name
    }
})

export const logout = () => ({
    type: types.logout
})