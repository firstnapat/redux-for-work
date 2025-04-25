import {ActionTypes} from "../actions/userAction";

const initState = {
    users: [{
      id: 1,
      name: "John Doe",
      email: "jonathan@mail.com",
      Phone: "123-456-7890"
    }],
    currentUser: null,
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}
export default userReducer