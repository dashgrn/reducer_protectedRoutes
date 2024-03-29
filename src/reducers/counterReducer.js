import { types } from "../types/Types";

export const initialState = 0

export const init = (value) => {
    return parseInt(value)
}

export const counterReducer = (state, action) => {
    switch (action.type) {
        case types.increment:
            return state+1
        case types.decrement:
            return state-1
        case types.reset:
            return init(initialState)
        default:
            return state
    }
}