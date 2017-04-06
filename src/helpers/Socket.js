import io from 'socket.io-client';

const Socket = (process.env.NODE_ENV !== 'production' ? { emit: function () {}, on: function () {} } : io());

export default Socket;