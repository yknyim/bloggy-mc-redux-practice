
import {
    ACTION_CREATE_POST,
    ACTION_DELETE_POST,
    ACTION_UPDATE_POST
} from '../actions';
import generateId from '../utils';

// A reducer is a function that accepts the current state and an action
// Then, calculates/returns the next new version of state
export default function posts(state={}, action={type: ''}) {

    switch(action.type) {
        case ACTION_CREATE_POST:
            // create a post!
            const id = generateId();
            console.log(`the new id is ${id}`);
            const newState = {
                ...state,
                // TO use a variable as a key in an object literal,
                // wrap the variable in square brackets.
                [id]: action.payload
            };
            // To get the equivalent results,
            // you can use the familiar syntax assignment:
            // newState[id] = action.payload;
            return newState;
        case ACTION_DELETE_POST:
            const deleteState = {
                ...state,
            };
            delete deleteState[action.payload.id];
            return deleteState;
        case ACTION_UPDATE_POST:
            const postToUpdate = state[action.payload.id];
            if (postToUpdate) {
                return {
                    ...state,
                    [action.payload.id]: {
                        title: action.payload.title || state[action.payload.id].title,
                        content: action.payload.content || state[action.payload.id].content,
                    }
                };
            } else {
                // No post to update!
                return state;
            }
        default:
            return state;
    }
}