import Sequelize from 'sequelize';
import db from '../config/db.js';


export const Menu = db.define('menu', {
    nombre: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    cantidad_personas: {
        type: Sequelize.STRING
    },
    tipo_de_plato: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    imagen: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    },
});
