const patients = [
    {
        name: 'Issa', 
        age: 30, 
        weight: 58, 
        height: 160
    },
    {
        name: 'Ryan', 
        age: 36, 
        weight: 79, 
        height: 178
    },
    {
        name: 'Chloe', 
        age: 31, 
        weight: 62, 
        height: 160
    },
]

//crie uma funcao para fazer o calculo do imc.//
function IMC(weight, height) {
    return (weight / ((height/100) ** 2)).toFixed(2)
}

// funcao para descobrir o IMC de cada paciente e execucao da linha "o paciente x possui o IMC de ..."
function printPatientIMC(patient) {
    return`
        O Paciente ${patient.name} possui o IMC de 
        ${IMC(patient.weight, patient.height)}
    `
}

// variavel para cada um dos itens/pacientes
for (let patient of patients) {
    let IMCmessage = printPatientIMC(patient);
    alert(IMCmessage);
}
