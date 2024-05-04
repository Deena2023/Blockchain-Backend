import { storeTododataService } from "../services/todoService.js";
import { validationResult } from "express-validator";
/**
 * Gets the weather data for a city
 * @param req the request object
 * @param res the response object
 */
export const storeTodo = async (req, res) => {
    // We will use the validationResult function to check if there are any validation errors
    const errors = validationResult(req);
    // If there are validation errors, we will log them and send a 400 status code
    if (!errors.isEmpty()) {
        console.error("Validation error", errors.mapped());
        res.status(400).json({ errors: errors.array() });
        return;
    }
    try {
        console.log(req.body);
        const { body: todo } = req;
        console.log(todo);
        const storedTodo = storeTododataService(todo);
        res.status(200).json(storedTodo);
    }
    catch (error) {
        // If there is an error, we will log it and send a 500 status code
        res.status(500).send("Error in storing todo data");
    }
};
//# sourceMappingURL=todoController.js.map