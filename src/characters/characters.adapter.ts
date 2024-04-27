import { Character } from "./character.interface";

export const charactersAdapter = (data: any): Character => {
  const mappedCharacter: Character = {
    id: data.id ?? 0,
    name: data.name ?? '',
    gender: data.gender ?? '',
    image: data.image ?? '',
    species: data.species ?? ''
  }
  return mappedCharacter;
}