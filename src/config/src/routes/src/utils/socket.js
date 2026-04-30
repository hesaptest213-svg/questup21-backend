let ioInstance = null;

export function initSocket(server) {
  console.log("Socket sistemi devre dışı (demo mode)");
  return null;
}

export function getIO() {
  return ioInstance;
}

export function emitToCity() {
  // boş
}

export function emitToAll() {
  // boş
}

export default {
  initSocket,
  getIO,
  emitToCity,
  emitToAll
};
