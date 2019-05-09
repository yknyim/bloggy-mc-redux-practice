
// Action Types
export const ACTION_CREATE_POST = 'ACTION_CREATE_POST';
export const ACTION_UPDATE_POST = 'ACTION_UPDATE_POST';
export const ACTION_DELETE_POST = 'ACTION_DELETE_POST';

// Action Creators

export function createPost(payload) {
    // Assumes that the `payload` argument looks like this:
    // {
    //  title: 'lorem ipsum',
    //  content: 'dolor oakley set',
    // }
    return {
        type: ACTION_CREATE_POST,
        payload
    };
}

export function updatePost() {

}

export function deletePost() {

}