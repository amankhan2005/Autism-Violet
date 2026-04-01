 import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

// ✅ CORS (updated for Autism Violet)
app.use(
  cors({
    origin: [
      "https://autismviolet.com",
      "https://www.autismviolet.com",
      "http://localhost:5173" // 🔥 dev support (important)
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// ✅ Routes
app.use("/api/contact", contactRoutes);

// ✅ Health check route (better for production)
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Autism Violet API Running 🚀",
  });
});

// ✅ Error handler
app.use(errorHandler);

export default app;