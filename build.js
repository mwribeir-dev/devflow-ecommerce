import fs from "node:fs";

fs.rmSync("dist", { recursive: true, force: true });
fs.cpSync("src", "dist", { recursive: true });

const html = fs.readFileSync("dist/index.html", "utf8");
const dataBuild = new Date().toLocaleString("pt-BR", {
  timeZone: "America/Sao_Paulo",
});
fs.writeFileSync("dist/index.html", html.replace("__BUILD_DATE__", dataBuild));

console.log("✅ Build concluído na pasta dist/");
