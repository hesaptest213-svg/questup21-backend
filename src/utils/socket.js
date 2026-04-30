export function setupSocketIO(server) {
  console.log("Socket.IO demo mode aktif.");

  return {
    emit: () => {},
    to: () => ({
      emit: () => {}
    }),
    on: () => {}
  };
}

export function initSocket(server) {
  return setupSocketIO(server);
}

export function getIO() {
  return null;
}

export function emitToCity() {
  return null;
}

export function emitToAll() {
  return null;
}

export default {
  setupSocketIO,
  initSocket,
  getIO,
  emitToCity,
  emitToAll
};
