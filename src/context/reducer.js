


export const reducer = (state, action) => {

    switch (action.type) {
        case "USER_LOGIN": {
            let role = action.payload.isAdmin ? "Admin" : "user"
            return { ...state, isLogin: true, user: action.payload, role: role }
        }
        case "USER_LOGOUT": {
            return { ...state, isLogin: false }
        }
        case "CART": {
            return { ...state, cart: action.payload }
        }
        default: {
            return state
        }
    }
}