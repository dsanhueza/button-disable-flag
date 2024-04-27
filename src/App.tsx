import { useState } from "react";
import "./App.css";
import { Character } from "./characters/character.interface";
import { charactersAdapter } from "./characters/characters.adapter";
import { getAllCharacters } from "./characters/characters.api";
import CharacterCard from "./components/CharacterCard";
import GridContainer from "./components/GridContainer";
import { ClipLoader } from "react-spinners";
import './assets/styles.css';

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [disableFlag, setDisableFlag] = useState<boolean>(false);

  const loadCharacters = async () => {
    // Activamos el spinner justo antes del llamado
    setLoading(() => true);
    // Activamos el flag justo antes del llamado
    setDisableFlag(() => true);

    // Voy a simular con un setTimeout el tiempo que se demora el endpoint en ir a buscar la data
    // NO es necesario agregar el timeout, solamente el contenido
    setTimeout(async () => {
      // Aqui efectuamos el llamado al endpoint
      const charactersRequest = await getAllCharacters();

      // una vez finalizado el tiempo del endpoint bajamos el flag (false)
      setLoading(() => false);
      // Activamos el flag justo antes del llamado
      setDisableFlag(() => false);

      // Aqui asignamos la data cuando llega desde el endpoint a un estado
      setCharacters(() =>
        charactersRequest.data.results.map((char: any) =>
          charactersAdapter(char)
        )
      );
    }, 2000);
  };

  return (
    <>
      {/* Evento Click */}
      <div className="buttons-container">
        <button
          //El evento disabled puede ser un estado como "disabledFlag", que puede cambiar segun convenga
          disabled={disableFlag}
          className="fetch-button"
          onClick={() => loadCharacters()}
        >
          {loading && <ClipLoader color={"#fff"} loading={loading} size={30} />}
          {!loading && <span>Cargar Personajes</span>}
        </button>
        <button
          className="fetch-button"
          onClick={() => setCharacters(() => [])}
        >
          Vaciar lista
        </button>
      </div>

      <hr />
      {characters.length == 0 && <h4>Lista vacia</h4>}

      <GridContainer>
        {characters.length > 0 &&
          characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
      </GridContainer>
    </>
  );
}

export default App;
