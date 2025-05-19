import "./style.css";

const app = document.createElement("div");
app.className = "container";

const heading = document.createElement("h1");
heading.textContent = "Привіт, TypeScript!";

app.appendChild(heading);
document.body.appendChild(app);
