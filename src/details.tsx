/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useCharacterDetails } from "./hooks/use-character-details";
import { useEffect, useState } from "react";
import { Character } from "./@core/domain/entities/character";

export function Details() {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState<Character>();

  const characterId = Number(id);
  const character = useCharacterDetails(characterId);

  useEffect(() => {
    async function fetchData() {
      setCharacterData(await character);
    }
    fetchData();
  }, [characterId]);

  return (
    <>
      <h2>{characterData?.[0]?.name}</h2>
    </>
  );
}
