let initialState = {
    friends: [
        {id: 1, name: "Arkady"},
        {id: 2, name: "Ludmila"},
        {id: 3, name: "Marat"}
        // {id: 4, name: "Danis"}
        // {id: 5, name: "Elena"},
        // {id: 6, name: "Pasha"}
    ]
};

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;