import _posts from "../data/posts"

const postReducer = function posts(state = _posts,action){
    switch (action.type){
        case 'REMOVE_PICTURE': return [...state.slice(0,action.index), ...state.slice(action.index + 1)]
        default: return state
    }
}

export default postReducer