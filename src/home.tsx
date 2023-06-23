/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useCharacter } from "./hooks/use-character";
import { Character } from "./@core/domain/entities/character";
import { Link } from "react-router-dom";
import { id } from "inversify";

type GetFullImagePathProps = {
  path: string;
  extension: string;
};

export function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [characterData, setCharacterData] = useState<Character[]>([]);
  const character = useCharacter();

  useEffect(() => {
    async function fetchData() {
      setCharacterData(await character);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  console.log({ message: "Fetching data", characterData });
  if (isLoading) {
    return <div>Loading character...</div>;
  }

  function getFullImagePath(props: GetFullImagePathProps): string {
    return `${props.path}.${props.extension}`;
  }

  return (
    <ul>
      {characterData.map((character) => (
        <li key={character.id}>
          {character.name}{" "}
          <img
            src={getFullImagePath(character.thumbnail)}
            alt="img"
            style={{ width: "50px", height: "50px" }}
          />
          <Link to={`/details/${character.id}`}>Link</Link>
        </li>
      ))}
    </ul>
  );
}
