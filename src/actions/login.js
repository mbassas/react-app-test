
export const LOGIN_ACTION = 'LOGIN_ACTION';

export default (user) => ({
    type: LOGIN_ACTION,
    data: user
});