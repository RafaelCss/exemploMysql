import mysql from 'mysql2/promise';
/**
 @param  {string} host endereço da do banco(url)
 @param  {string} user nome de usuário cadastrado ao criar o schema
 @param  {string} password senha cadastrada 
 @param  {string} database nome do schema (banco criado) * 
 */

const connection = mysql.createPool({
  host: '', // DB host
  user: '', // DB usuário 
  password: '', // DB senha
  database: '', // DB nome do schema
});


// conexão simples com banco... pode ser incrementada.
async function conectando() {
  const conn = await connection.getConnection();
  console.log("Conectou ao MySql");
  return conn
}


/**
 @arg {string} tabela nome da tabela do schema informado na connection
 * 
 */
 async function select(tabela) {
   const conn = await conectando();
   const [rows] = await conn.query(`select*from ${tabela}`); // Neve padrão e com método query, você pode ir fazendo suas consulta ou inserções.. 
   return rows;
 }


export { select };