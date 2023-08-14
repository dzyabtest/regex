/* eslint-disable indent */
// TODO: write your code here
export default class Validator {
    static validateUsername(userName) {
        return /^[a-zA-Z0-9_-]+$/.test(userName) && /^[^0-9_-]/.test(userName) && /[^0-9_-]$/.test(userName) && !/[0-9]{4,}/.test(userName);
    }
}
