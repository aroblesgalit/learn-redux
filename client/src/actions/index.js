export const increment = (num) => {
    return {
        type: "INCREMENT",
        payload: num
    };
};

export const decrement = (num) => {
    return {
        type: "DECREMENT",
        payload: num
    };
};

export const signin = () => {
    return {
        type: "SIGN_IN"
    };
};

export const signout = () => {
    return {
        type: "SIGN_OUT"
    };
};