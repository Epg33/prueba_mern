const Express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const mongoose = require('./database');

const PORT = process.env.PORT || 4000;
const app = Express();

//middelwares
app.use(cors());
app.use(morgan("dev"));
app.use(Express.json());

//router
app.use('/api/task', require('./routes/task.routes'));

//server
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
