const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

<<<<<<< HEAD
// let sum = (a = -1,b = 0) => {
//     return a + b;
// }

=======
>>>>>>> a0533e1428c01de93fe62c4d8982f9767f1870bd
let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you? ", likesCount: 15},
        {id: 2, message: "It's my first post ", likesCount: 10},
        {id: 3, message: "Kak tebe takoe Elon Sobaks? ", likesCount: 7},
        {id: 4, message: "Primu v dar Korm dla puppies, ya mnogodetniy papka ", likesCount: 3},
        {id: 5, message: "Kak dela? ", likesCount: 2},
        {id: 6, message: "Kot poel kaktus ", likesCount: 1}
    ],
    newPostText: 'write meaningfully'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 7,
                message: state.newPostText,
                likesCount: 0
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state; //вместо break, что бы switch не проваливался дальше
        default: // если ни по одному case не подошел просто возвращает state
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText: newText});

export default profileReducer;