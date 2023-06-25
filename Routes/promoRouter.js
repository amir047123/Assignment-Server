const express = require("express");
const promoRouter = express.Router();
const Promotion = require("../Schema/promotion");

// Create a new promotion
promoRouter.post("/", (req, res) => {
  Promotion.create(req.body)
    .then((promotion) => {
      res.status(200).json({
        message: "Promotion created successfully",
        promotion: promotion,
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({
        error: "Server side error",
      });
    });
});

// Delete a promotion
promoRouter.delete("/:promoId", (req, res) => {
  Promotion.findByIdAndDelete(req.params.promoId)
    .then((deletedPromotion) => {
      if (deletedPromotion) {
        res.status(200).json({
          message: "Promotion deleted successfully",
          promotion: deletedPromotion,
        });
      } else {
        res.status(404).json({
          error: "Promotion not found",
        });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({
        error: "Server side error",
      });
    });
});

// Update a promotion
promoRouter.put("/:promoId", (req, res) => {
  Promotion.findByIdAndUpdate(req.params.promoId, req.body, { new: true })
    .then((updatedPromotion) => {
      if (updatedPromotion) {
        res.status(200).json({
          message: "Promotion updated successfully",
          promotion: updatedPromotion,
        });
      } else {
        res.status(404).json({
          error: "Promotion not found",
        });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({
        error: "Server side error",
      });
    });
});

module.exports = promoRouter;
