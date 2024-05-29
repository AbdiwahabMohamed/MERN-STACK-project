import { verifyTokenAndAdmin } from "../middleware/verifyToken";
import {
  getAllCategoriesCtrl,
  createCategoryCtrl,
  deleteCategoryCtrl,
} from "../controllers/category";

import { validateObjectId } from "../middleware/validateObjectId";
// /api/categories
router
  .route("/")
  .post(verifyTokenAndAdmin, createCategoryCtrl)
  .get(getAllCategoriesCtrl);

// /api/categories/:id
router
  .route("/:id")
  .delete(validateObjectId, verifyTokenAndAdmin, deleteCategoryCtrl);

export default router;
