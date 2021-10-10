import { Router } from "express";
import connection from "../database/connection";

const itemsRoutes = Router();

itemsRoutes.get('/', async (request, response) => {
    const items = await connection('items').select('*');

    const serializedItems = items.map(items => {
        return{
            id: items.id,
            title: items.title,
            image_url:`http://localhost:8082/uploads/${items.image}`
        }
    });

    return response.json(serializedItems);
});


export default itemsRoutes;