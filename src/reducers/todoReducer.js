let todoLists = {
    todos: [
    ]
}

const todoReducer = (state = todoLists, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            return {
                ...state
            }
    }
}

export default todoReducer;