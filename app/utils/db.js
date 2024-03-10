import pg from 'pg'
const {Pool} = pg;

const databaseConfig = { connectionString: "postgresql://postgres:postgres@localhost:5435/sql_demo"};
const pool = new Pool(databaseConfig);
  
export default pool;