const express = require("express");
const dishRouter = express.Router();
const Dish = require("../Schema/dish");

// Create a new dish
dishRouter.post("/", async (req, res) => {
  try {
    const newDish = new Dish(req.body);
    await newDish.save();
    res.status(200).json({
      message: "Dish is added",
      dish: newDish,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Server side error",
    });
  }
});

// Delete a dish
dishRouter.delete("/:dishid", async (req, res) => {
  try {
    const dishId = req.params.dishid;
    const deletedDish = await Dish.findByIdAndDelete(dishId);

    if (deletedDish) {
      res.status(200).json({
        message: "Dish deleted successfully",
        dish: deletedDish,
      });
    } else {
      res.status(404).json({
        error: "Dish not found",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Server side error",
    });
  }
});

// Update a dish
dishRouter.put("/:dishid", async (req, res) => {
  try {
    const dishId = req.params.dishid;
    const updatedDish = await Dish.findByIdAndUpdate(dishId, req.body, {
      new: true,
    });

    if (updatedDish) {
      res.status(200).json({
        message: "Dish updated successfully",
        dish: updatedDish,
      });
    } else {
      res.status(404).json({
        error: "Dish not found",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Server side error",
    });
  }
});

module.exports = dishRouter;
