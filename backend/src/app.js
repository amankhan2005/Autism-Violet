 import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

app.use(cors({
  origin: [
    "https://safehomeofmaryland.netlify.app",
    "https://safehomeofmaryland.com"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

app.use(errorHandler);

export default app;