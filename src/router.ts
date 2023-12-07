import { Router } from "express";
import { body, validationResult } from "express-validator";
import { handleInputErrors } from "./modules/middleware";

const router = Router();

/*
Product
*/

router.get("/product", (req, res) => {
  res.json({ message: "OMG" });
});
router.get("/product/:id", () => {});
router.put(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  (req, res) => {}
);
router.post("product", body("name").isString(), handleInputErrors, () => {});
router.delete("product/:id", () => {});

/*
update
*/

router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]),
  body("version").optional(),
  () => {}
);
router.post(
  "update",
  body("title").exists().isString(),
  body("body").exists().isString()
);
router.delete("update/:id", () => {});

/*
update point
*/

router.get("/updatepoint", (req, res) => {});
router.get("/updatepoint/:id", () => {});
router.put(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  () => {}
);
router.post(
  "updatepoint",
  body("name").isString(),
  body("description").isString(),
  body("updateId").exists().isString(),
  () => {}
);
router.delete("updatepoint/:id", () => {});

export default router;
