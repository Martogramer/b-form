const app = require("./app.js");
const connectToDataBase = require("./db.js")



connectToDataBase()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error al iniciar el servidor:', error);
    });