import { Link } from "react-router-dom";
import "./style.css";

function InitialPage() {
  return (
    <main className="container main-initial-page">
      <h2>Desafio Github</h2>
      <h3>DevSuperior - Escola de programação</h3>

      <div className="button-container">
        <Link className="link-button button" to={"search"}>Começar</Link>
      </div>
    </main>
  );
}

export default InitialPage;
