const {response, request} = require('express');
const Estudiante = require('../../models/estudiante');


const getStudents = async (req = request ,res = response) => {

    const students = await Estudiante.find()
    res.json({
        msg: 'get API - controlador',
        students
    });

}
const deleteStudents = async (req = request ,res = response) => {

      await Estudiante.deleteMany()
    res.json({
        msg: 'Se eliminaron los estudiantes',
    });

}


const postStudents = async (req, res = response) => {

    const {codigo, nombre, grado, numeroAcudiente, fechaClase, clase}  = req.body;
    const student = new Estudiante( {codigo, nombre, grado, numeroAcudiente, clase, fechaClase} );

    //Guardar en BD
    try {

        await student.save();
        res.json({
            msg: 'Se agendo correctamente'
        });
    } catch (error) {
        res.status(400).json({
            errors: [
                {
                    msg: 'Ya se encuentra registrado a la asesoria'
                }
            ]
        })
        
    }
    
}

module.exports = {
    getStudents,
    postStudents,
    deleteStudents
}