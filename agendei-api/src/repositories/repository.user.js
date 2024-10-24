//repository
import { query } from "../database/sqlite.js";

async function Listar(name){
    let filtro = [];

    let sql = "SELECT * FROM users ";
    if(name){
        sql = sql + "where name like ?"
        filtro.push('%' + name + '%');
    }
    sql = sql + "order by name"

    const users = await query( sql, filtro );    
    return users;
}

async function Inserir(name, email, password){

    let sql = `INSERT INTO users (name, email, password) VALUES (?,?,?) returning id_user `;
    

    const user = await query( sql, [name, email, password] );    
    return user[0];
}

async function Login( email, password){

    let sql = `INSERT INTO users (name, email, password) VALUES (?,?,?) returning id_user `;
    

    const login = await query( sql, [ email, password] );    
    return login[0];
}

export default { Listar, Inserir, Login };