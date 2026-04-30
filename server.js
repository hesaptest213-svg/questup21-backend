import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "QuestUp backend aktif"
  });
});

app.get("/api/v1/health", (req, res) => {
  res.json({
    success: true,
    message: "QuestUp API çalışıyor",
    timestamp: new Date().toISOString()
  });
});

app.get("/api/v1/app/bootstrap", (req, res) => {
  res.json({
    success: true,
    data: {
      tasks: [],
      qrHunts: [],
      notifications: [],
      wallet: {
        coin: 0,
        xp: 0
      },
      featureFlags: {}
    }
  });
});

app.get("/api/v1/app/config", (req, res) => {
  res.json({
    success: true,
    data: {
      appVersion: "1.0.0",
      minimumRequiredVersion: "1.0.0",
      forceUpdate: false,
      maintenanceMode: false,
      contentVersion: 1,
      featureFlags: {}
    }
  });
});

app.get("/api/v1/tasks", (req, res) => {
  res.json({
    success: true,
    data: []
  });
});

app.get("/api/v1/qr-hunts", (req, res) => {
  res.json({
    success: true,
    data: []
  });
});

app.post("/api/v1/auth/login", (req, res) => {
  res.json({
    success: true,
    message: "Demo giriş başarılı",
    data: {
      token: "demo-token",
      user: {
        id: "user-demo",
        email: req.body?.email || "demo@questup.local",
        role: "user",
        displayName: "Demo Kullanıcı",
        profileCompleted: true
      }
    }
  });
});

app.post("/api/v1/auth/register", (req, res) => {
  res.json({
    success: true,
    message: "Kayıt başarılı",
    data: {
      email: req.body?.email || null
    }
  });
});

app.post("/api/v1/auth/admin-login", (req, res) => {
  res.json({
    success: true,
    message: "Admin giriş başarılı",
    data: {
      token: "admin-demo-token",
      user: {
        id: "admin-demo",
        email: req.body?.email || "admin@questup.local",
        role: "admin",
        displayName: "Admin"
      }
    }
  });
});

app.get("/api/v1/auth/me", (req, res) => {
  res.json({
    success: true,
    data: {
      user: {
        id: "user-demo",
        email: "demo@questup.local",
        role: "user",
        displayName: "Demo Kullanıcı",
        profileCompleted: true
      }
    }
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint bulunamadı",
    path: req.originalUrl
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`QuestUp backend running on port ${PORT}`);
}); 
