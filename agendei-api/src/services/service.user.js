import bcrypt from "bcrypt"
import repoUser from '../repositories/repository.user.js'

async function Listar( name ){

    const users = await repoUser.Listar(name);

    return users;
}

async function Inserir(name, email, password){

    const hashPassword = await bcrypt.hash(password, 10)

    const usuario = await repoUser.Inserir(name, email, hashPassword);

    return usuario;
}

async function Login( email, password){

    const hashPassword = await bcrypt.hash(password, 10)

    const login = await repoUser.Login( email, hashPassword);

    return login;
}

export default { Listar, Inserir, Login };