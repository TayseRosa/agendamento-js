
export const doctors = [
    {
        id_doctor: 1,
        name:'Dr. Armando Matheus',
        speciality: 'Ginecologia e obstetricia',
        icon: 'M'
    },

    {
        id_doctor: 2,
        name:'Dra. Ana Beatriz',
        speciality: 'Cardiologista',
        icon: 'F'
    },

    {
        id_doctor: 3,
        name:'Dr. Antônio Almeida de Souza',
        speciality: 'Pediatria',
        icon: 'M'
    },

    {
        id_doctor: 4,
        name:'Dra. Roberta Martins',
        speciality: 'Clínico geral',
        icon: 'F'
    },

    {
        id_doctor: 5,
        name:'Dra. Nise da Silveira',
        speciality: 'Cirurgia plastica',
        icon: 'F'
    },

];

export const appointments = [
    {
        id_appointment:1,
        service: 'Consulta',
        doctor: 'Dra. Nise da Silveira',
        speciality:'Cirurgia plastica',
        booking_date: '2024-10-25',
        booking_hour: '15:40',
    },
    {
        id_appointment:2,
        service: 'Consulta',
        doctor: 'Dr. Antônio Almeida Souza',
        speciality:'Pediatria',
        booking_date: '2024-10-28',
        booking_hour: '15:40',
    },
    {
        id_appointment:3,
        service: 'Consulta',
        doctor: 'Dra. Roberta Martins',
        speciality:'Clínica geral',
        booking_date: '2024-11-05',
        booking_hour: '14:15',
    },
];

export const doctor_services = [
    {
        id_service: 1,
        description:'Consulta médica',
        price: 499.99
    },
    {
        id_service: 2,
        description:'Drenagem linfática',
        price: 650
    },
    {
        id_service: 3,
        description:'Lipoaspiração',
        price: 5000
    },
    {
        id_service: 4,
        description:'Mamoplastia',
        price: 1700
    },
];