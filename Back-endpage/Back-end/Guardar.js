const usuario = require("/usuario")

// router.get("/", async (req, res) => {
//     let collection = await db.collection("posts");
//     let results = await collection.find({})
//       .limit(50)
//       .toArray();
  
//     res.send(results).status(200);
//   });

// const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, selecting the 'name' and 'age' fields
const usuarios = await usuario.find(
  { sport: "Tennis" },
  "name age"
).exec();

// Access model field values using dot notation
console.log(awesome_instance.name); //should log 'also_awesome'

// Change record by modifying the fields, then calling save().
usuario.name = "";
await usuario.save();
