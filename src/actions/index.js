var id = 0;
export const addMessage = (message, user_name) => ({
    type: 'ADD_MESSAGE',
    id: id++,
    date: new Date().toTimeString(),
    message,
    user_name
});

export const addUser = (user_name) => ({
    type: 'ADD_USER',
    id: Math.random(),
    date_created: new Date().toTimeString(),
    user_name
});