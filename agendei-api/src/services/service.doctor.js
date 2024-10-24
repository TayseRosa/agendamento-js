import repoDoctor from '../repositories/repository.doctor.js'

async function Listar(name){

    const doctors = await repoDoctor.Listar(name);

    return doctors;
}

async function Inserir(name, speciality, icon){

    const doctor = await repoDoctor.Inserir(name, speciality, icon);

    return doctor;
}

async function Editar(id_doctor, name, specialty, icon){

    const doctor = await repoDoctor.Editar(id_doctor, name, specialty, icon);

    return doctor;
}

async function Excluir(id_doctor){

    const doctor = await repoDoctor.Excluir(id_doctor);

    return doctor;
}

export default { Listar, Inserir, Editar, Excluir };