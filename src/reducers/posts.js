
import {
    ACTION_CREATE_POST
} from '../actions'

// A reducer is a function that accepts the current state and an action
// Then, calculates/returns the next new version of state
export default function posts(state={}, action={type: ''}) {

    switch(action.type) {
        case ACTION_CREATE_POST:
            // create a post!
            console.log(`Sounds like you want to create a post!`)
        break;
        default:
            return state
        break;
    }
}