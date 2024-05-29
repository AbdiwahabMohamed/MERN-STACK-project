import {
  getAllCommentsCtrl,
  createCommentCtrl,
  updateCommentCtrl,
  deleteCommentCtrl,
} from "../controllers/comments";
import { verifyToken, verifyTokenAndAdmin } from "../middleware/verifyToken";
import { validateObjectId } from "../middleware/validateObjectId";

// /api/comments
router
  .route("/")
  .post(verifyToken, createCommentCtrl)
  .get(verifyTokenAndAdmin, getAllCommentsCtrl);

// /api/comments/:id
router
  .route("/:id")
  .delete(validateObjectId, verifyToken, deleteCommentCtrl)
  .put(validateObjectId, verifyToken, updateCommentCtrl);

export default router;
