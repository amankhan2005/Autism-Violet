import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";
import careerRoutes from "./routes/careerRoutes.js";  
import { errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

// ✅ CORS (Autism Violet production + dev)
app.use(
  cors({
    origin: [
      "https://autismviolet.com",
      "https://www.autismviolet.com",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// ✅ Routes
app.use("/api/contact", contactRoutes);
app.use("/api/career", careerRoutes);  

// ✅ Health check (Production ready)
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Autism Violet API Running 🚀",
  });
});

// ✅ Error handler
app.use(errorHandler);

export default app;