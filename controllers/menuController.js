import { Menu } from '../models/Menu.js';


const paginaMenu = async ( req , res ) => {
    
    const menus = await Menu.findAll();

    try {
        res.render('menu',{
            pagina : 'Menu',
            titulo : 'Nuestros Menú',
            menus
        })
    } catch (error) {
        console.log(error);
    }
}

const paginaDetalleMenu = async (req , res ) => {
    const { slug } = req.params;
    
    try {
        const resultado = await Menu.findOne({where : { slug }})
        const { nombre  } = resultado;
       

        res.render('detalleMenu',{
            pagina: nombre,
            resultado,
        })    
    } catch (error) {
        console.log(error);
    }
  
    
}



export {
    paginaMenu,
    paginaDetalleMenu
}