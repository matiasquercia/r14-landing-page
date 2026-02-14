const ftp = require("basic-ftp");
const path = require("path");

async function deploy() {
  const client = new ftp.Client();
  client.ftp.verbose = true;

  try {
    await client.access({
      host: "c2712049.ferozo.com",
      user: "ftp@c2712049.ferozo.com",
      password: "MA15seneri",
      port: 21,
      secure: false,
    });

    console.log("Conectado al servidor FTP");

    // Subir a public_html (directorio web de Ferozo)
    await client.ensureDir("/public_html");
    console.log("Subiendo archivos a /public_html...");

    await client.uploadFromDir(path.join(__dirname, "dist"));

    console.log("Deploy finalizado exitosamente!");
  } catch (err) {
    console.error("Error:", err.message);
  }

  client.close();
}

deploy();
