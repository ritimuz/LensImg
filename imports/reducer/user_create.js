export const CREATE_USER = 'CREATE_USER'
import Profile from '../collections/index'

export function createUser(data) {
    console.log(data);
    // Profile.insert
    return {
        type: CREATE_USER,
        payload: data
    }
}
