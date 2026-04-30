import express from "express";

export function setupRoutes(app) {
  const router = express.Router();

  router.get("/api/v1/health", (req, res) => {
    res.json({
      success: true,
      message: "QuestUp API çalışıyor",
      timestamp: new Date().toISOString()
    });
  });

  router.get("/api/v1/app/bootstrap", (req, res) => {
    res.json({
      success: true,
      data: {
        tasks: [],
        qrHunts: [],
        wallet: { coin: 0, xp: 0 }
      }
    });
  });

  app.use(router);
}
