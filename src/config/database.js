export async function connectDB() {
  console.log("Database devre dışı. Demo mode aktif.");
  return null;
}

export async function query() {
  throw new Error("Database aktif değil.");
}

export async function queryOne() {
  return null;
}

export async function queryAll() {
  return [];
}

export default {
  connectDB,
  query,
  queryOne,
  queryAll
};
