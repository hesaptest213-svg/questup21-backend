import express from "express";

const router = express.Router();

router.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "QuestUp API çalışıyor",
    timestamp: new Date().toISOString()
  });
});

router.get("/app/bootstrap", (req, res) => {
  res.json({
    success: true,
    data: {
      tasks: [],
      qrHunts: [],
      notifications: [],
      featureFlags: {},
      wallet: {
        coin: 0,
        xp: 0
      }
    }
  });
});

router.get("/app/config", (req, res) => {
  res.json({
    success: true,
    data: {
      appVersion: "1.0.0",
      minimumRequiredVersion: "1.0.0",
      forceUpdate: false,
      maintenanceMode: false,
      featureFlags: {},
      contentVersion: 1
    }
  });
});

export default router;
