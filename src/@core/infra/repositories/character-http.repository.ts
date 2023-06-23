import { AxiosInstance } from "axios";
import { CharacterRepositoryInterface } from "../../domain/repository/character-repository.interface";
import { Character, CharacterProps } from "../../domain/entities/character";

export class CharacterHttpRepository implements CharacterRepositoryInterface {
  public constructor(private http: AxiosInstance) {}

  public async findAll(): Promise<Character[]> {
    const result = await this.http.get(`/characters`).then(({ data }) => data);

    return result.data.results.map(
      (characterData: CharacterProps) => new Character(characterData)
    );
  }

  public async findById(id: number): Promise<Character> {
    const result = await this.http
      .get(`/characters/${id}`)
      .then(({ data }) => data);

    return result.data.results.map(
      (characterData: CharacterProps) => new Character({...characterData})
    );
  }
}
