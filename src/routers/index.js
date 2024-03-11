import { Router } from 'express'
const router = Router()
router.get('/', (req, res) => res.render('index',{ title:'Prueba' }))
router.get('/Services_Orders', (req, res) => res.render('Services_Orders', { title:'Services Orders'}))
router.get('/Invoices', (req, res) => res.render('Invoices',{ title:'Invoices'}))
router.get('/Inventory', (req, res) => res.render('Inventory',{title: 'Inventory'}))
export default router