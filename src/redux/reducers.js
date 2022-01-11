import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants"

const intialStateSearch = {
    searchField: ''
}

export const searchRobots = (state = intialStateSearch, action = {}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return { 
                ...state, 
                searchField: action.payload
            };
        default: 
            return state;
    }
}

// ===
// switch(action.type) {
//     case CHANGE_SEARCH_FIELD:
//         return Object.assign({}, state, 
//             {searchField: action.payload})
//     default: 
//         console.log('black');
//         break;
// }

const intialStateRobots = {
    isPending: false,
    robots: [],
    err: ''
}

export const requestRobots = (state=intialStateRobots, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return {
                ...state,
                isPending: true
            }
        case REQUEST_ROBOTS_SUCCESS:
            return {
                ...state,
                isPending: false,
                robots: action.payload
            }
        case REQUEST_ROBOTS_FAILED:
            return {
                ...state,
                isPending: false,
                err: action.payload
            }
        default: 
            return state
    }
}