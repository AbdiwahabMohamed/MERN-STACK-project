import {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
  verifyTokenAndOnlyUser,
} from "../middleware/verifyToken";
verifyTokenAndOnlyUser;
import {
  getAllUsersCtrl,
  getUserProfileCtrl,
  updateUserProfileCtrl,
} from "../controllers/usersController";

// /api/users/profile
router.route("/profile").get(verifyTokenAndAdmin, getAllUsersCtrl);

// /api/users/profile/:id
router
  .route("/profile/:id")
  .get(validateObjectId, getUserProfileCtrl)
  .put(validateObjectId, verifyTokenAndOnlyUser, updateUserProfileCtrl);
