const db = require("./models");


module.exports = async () => {
  // Crear tablas:
  await db.sequelize.sync({force:true});
  console.log("[Database] ¡Las tablas fueron creadas!");

  // Ejecutar seeders (datos de prueba):
  await require("./seeders/articleSeeder")();
  console.log("[Database] ¡Los datos de prueba fueron insertados!");

// Ejecutar seeders de usuario (datos de prueba):
  await require("./seeders/userSeeder")();
  console.log("[Database] ¡Los usuarios de prueba fueron insertados!");
};

  
 
