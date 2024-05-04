import express from "express";
import { storeTodo } from "../controllers/todoController.js";
const router = express.Router();
router.post("/", storeTodo);
router.get("/", () => {
    ;
    console.log("done");
});
export default router;
//# sourceMappingURL=todoRoute.js.map