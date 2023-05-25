const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const password = "FrSfzoVbR5rHcUg9"
const Dbname = "Pagina"
const mongoDB = `mongodb+srv://Dylan-Gustavo-Carlo:${password}@users100.b27jvbd.mongodb.net/${Pagina}`;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}