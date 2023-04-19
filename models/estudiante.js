
const { Schema, model } = require('mongoose');

const estudianteSchema = Schema({
    codigo: { 
        type : String ,
        unique : true,
        required : true,
        dropDups: true
    },
    nombre: {
        type: String,
        unique: true,
        required: [true, 'El nombre es obligatorio'],
    },
    grado:{
        type: Number,
        required: [true, 'El grado es obligatorio']
    },
    numeroAcudiente: {
        type: String,
        required: [true, 'El correo es obligatorio'],
    },
    clase: {
        type: String,
        required: [true, 'la clase es obligatorio'],
    },
    fechaClase: {
        type: Date,
        required: [true, 'la fecha de clase es obligatoria'],
    },
    estado: {
        type: Boolean,
        default: true
    }
   
});

estudianteSchema.methods.toJSON = function (){
    debugger;
    const { __v, ...estudiante } =  this.toObject();
    return estudiante;
}

module.exports = model('Estudiante', estudianteSchema);