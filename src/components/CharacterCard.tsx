import { FC } from "react";
import { Character } from "../characters/character.interface";

interface CharacterCardI {
  character: Character;
}

const CharacterCard: FC<CharacterCardI> = ({
  character,
}) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#3d3d3d",
      }}
    >
      <img style={{ width: "100px", height: "100px" }} src={character.image} />
      <ul style={{ textAlign: "start" }}>
        <li>{character.name}</li>
        <li>{character.gender}</li>
        <li>{character.species}</li>
      </ul>
    </div>
  );
};

export default CharacterCard;
