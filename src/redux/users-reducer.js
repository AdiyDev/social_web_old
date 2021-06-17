const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
        users: [
            {id: 1, photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Felis_silvestris_silvestris.jpg/800px-Felis_silvestris_silvestris.jpg",followed: false, fullName: "userName", status: "Hi, i'm good", location: {city: "stav", country: "russia"}},
            {id: 2, photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Felis_silvestris_silvestris.jpg/800px-Felis_silvestris_silvestris.jpg",followed: true, fullName: "userName", status: "Hi, i'm good", location: {city: "stav", country: "belarus"}},
            {id: 3, photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Felis_silvestris_silvestris.jpg/800px-Felis_silvestris_silvestris.jpg",followed: false, fullName: "userName", status: "Hi, i'm good", location: {city: "stav", country: "Kotavia"}}
        ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, 
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
                // users: [...state.users] эти записи с копированием индентичны только мап берет и пересобирает 
            }
        case UNFOLLOW:
            return {
                ...state, 
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]} //склеиваем 2 массива которые были и те которые пришли из action
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;