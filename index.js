import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// Eski users route'ing
import usersRoutes from "./routes/users.js";

// Yangi 4 modul routes
import moduleARoute from "./routes/moduleA.js";
import moduleBRoute from "./routes/moduleB.js";
import moduleCRoute from "./routes/moduleC.js";
import moduleDRoute from "./routes/moduleD.js";

const app = express();
const PORT = process.env.PORT || 5000;

// CORS — FRONTEND POST QILA OLSIN!
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());
app.use(bodyParser.json());

// Eski users API
app.use("/people", usersRoutes);

// Yangi 4 modul API
app.use("/moduleA", moduleARoute);
app.use("/moduleB", moduleBRoute);
app.use("/moduleC", moduleCRoute);
app.use("/moduleD", moduleDRoute);

app.get("/", (req, res) => res.send("Welcome to the Users + Modules API!"));

app.all("*", (req, res) =>
  res.send("You've tried reaching a route that doesn't exist.")
);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);



