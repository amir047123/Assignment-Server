const express = require("express");
const leaderRouter = express.Router();
const Leader = require("../Schema/leader");

// Get all leaders
leaderRouter.get("/", async (req, res) => {
  try {
    const leaders = await Leader.find();
    res.status(200).json(leaders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Create a new leader
leaderRouter.post("/", async (req, res) => {
  try {
    const newLeader = new Leader(req.body);
    await newLeader.save();
    res.status(200).json(newLeader);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get a specific leader
leaderRouter.get("/:leaderId", async (req, res) => {
  try {
    const leaderId = req.params.leaderId;
    const leader = await Leader.findById(leaderId);
    if (leader) {
      res.status(200).json(leader);
    } else {
      res.status(404).json({ error: "Leader not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update a leader
leaderRouter.put("/:leaderId", async (req, res) => {
  try {
    const leaderId = req.params.leaderId;
    const updatedLeader = await Leader.findByIdAndUpdate(leaderId, req.body, {
      new: true,
    });
    if (updatedLeader) {
      res.status(200).json(updatedLeader);
    } else {
      res.status(404).json({ error: "Leader not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete a leader
leaderRouter.delete("/:leaderId", async (req, res) => {
  try {
    const leaderId = req.params.leaderId;
    const deletedLeader = await Leader.findByIdAndDelete(leaderId);
    if (deletedLeader) {
      res.status(200).json({
        message: "Leader deleted successfully",
        leader: deletedLeader,
      });
    } else {
      res.status(404).json({ error: "Leader not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = leaderRouter;
