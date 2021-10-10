import { Router } from "express";
import connection from "../database/connection";

const locationsRoutes = Router();

locationsRoutes.post('/', async (request, response) => {
    const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
    } = request.body;

    const location = {
        image: "fake-image.jpg",
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
    };

    const newIds = await connection('locations').insert(location);

    const locationId = newIds[0];

    const locationItems = items.map((item_id: number) => {
        return {
            item_id,
            location_id: locationId
        }
    });

    await connection('location_items').insert(locationItems);

    return response.json({
        id:locationId,
        ...location
    });
});


export default locationsRoutes;