var id = 0;
export const addMessage = (message) => ({
    type: 'ADD_MESSAGE',
    id: id++,
    date: new Date().toString(),
    message
});