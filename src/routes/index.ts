import { Router } from "express";
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

const router = Router(); 

router.get('/', (req, res) => {
    res.send('Olá mundo')

});




export default router; 