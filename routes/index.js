import express from 'express';
import { paginaInicio , paginaTestimonios, paginaNosotros } from '../controllers/paginasController.js';
import { guardarTestimonio } from '../controllers/testimonioController.js';
import { paginaMenu , paginaDetalleMenu } from '../controllers/menuController.js';

const router = express.Router();


router.get('/', paginaInicio);

router.get('/testimonios', paginaTestimonios);

router.post('/testimonios', guardarTestimonio);

router.get('/nosotros', paginaNosotros );

router.get('/menu' , paginaMenu);

router.get('/menus/:slug',paginaDetalleMenu);

export default router;