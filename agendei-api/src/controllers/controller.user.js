import serviceUser from "../services/service.user.js";

async function Listar(req, res){
    const {name} = req.body;
    const users = await serviceUser.Listar(name);

    res.status(201).json(users);
}

async function Inserir(req, res){

    const {name, email, password } = req.body;

    const user = await serviceUser.Inserir(name, email, password);

    res.status(201).json(user);
}

async function Login(req, res){

    const {email, password } = req.body;

    const user = await serviceUser.Login( email, password);

    if(user.length == 0){
        //401 = não autorizado
        res.status(401).json({error:"E-mail ou senha inválido!"});
    }else{
        //
        res.status(200).json(user);
    }

}

export default { Listar, Inserir, Login };