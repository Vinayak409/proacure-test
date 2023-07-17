import Item from "../schema/item-schema.js";

export const addItem = async (request, response) => {
    const item = request.body;

    const newItem = new Item(item);

    try {
        await newItem.save();
        response.status(201).json(newItem);
    } catch (error) {
        response.status(409).json({message: error.message});
    }
}