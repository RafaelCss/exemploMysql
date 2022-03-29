import { select } from "../Connection/connection.js";



async function connect() {
  const dbSelect = await select('tabela');
  console.log(dbSelect)
}

connect();