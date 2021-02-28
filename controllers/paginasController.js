import { Menu } from '../models/Menu.js';
import { Testimonios } from '../models/Testimonios.js';

const paginaInicio = async (req , res) => {

    const promiseDB = [];

    promiseDB.push(Menu.findAll({limit: 3}));
    promiseDB.push(Testimonios.findAll({limit: 3}));

    try {

        const resultado = await Promise.all(promiseDB);

        res.render('inicio', {
            pagina: 'Inicio',
            texto: 'Dejate llevar y Disfruta',
            titulo: 'Restaurant Brands',
            menus: resultado[0],
            testimonios: resultado[1],
        });
    } catch (error) {
        console.log(error);   
    }
    
}


const paginaTestimonios = async (req , res) => {
    try {
        const testimonios = await Testimonios.findAll();
        // res.json(testimonios);
        res.render('testimonios',{
            pagina: 'Testimonios',
            testimonios
        })
    } catch (error) {
        console.log(error);
    }
}

const paginaNosotros = (req , res) => {
    res.render('nosotros', {
        pagina: 'Sobre Nosotros',
        titulo: 'Nosotros'
    })
}




export {
    paginaInicio,
    paginaTestimonios,
    paginaNosotros,
}