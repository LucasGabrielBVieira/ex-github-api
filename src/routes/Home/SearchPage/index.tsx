import "./style.css";
import * as servicePerfil from "../../../service/perfil-service.ts";
import { useState } from "react";
import PerfilSearch from "../../../components/PerfilSearch/index.tsx";

function SearchPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [perfil, setPerfil] = useState<any>();
  const [textError, setTextError] = useState<string>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmit(event: any) {
    event.preventDefault();
    servicePerfil
      .getPerfil(event.target[0].value)
      .then((response) => {
        setPerfil(response);
      })
      .catch((error) => {
        console.log(error);
        setPerfil(undefined);
        setTextError("Erro ao buscar Usuário");
      });
  }

  return (
    <main className="container">
      <section>
        <div className="form-container">
          <h1 className="title">Encontre um perfil no Github</h1>
          <form className="form-search" onSubmit={handleSubmit}>
            <label htmlFor="perfil">Perfil</label>
            <input
              type="text"
              name="perfil"
              id="perfil"
              placeholder="Usuário Github"
            />

            <button type="submit" className="button">
              Encontrar
            </button>
          </form>
        </div>
        <div>
          {perfil ? (
            <div className="perfil-container">
              <PerfilSearch
                avatar_url={perfil.data.avatar_url}
                followers={perfil.data.followers}
                location={perfil.data.location}
                name={perfil.data.name}
                url={perfil.data.url}
              />
            </div>
          ) : (
            <h1 className="title mt-64">{textError}</h1>
          )}
        </div>
      </section>
    </main>
  );
}

export default SearchPage;
