/* eslint-disable @typescript-eslint/no-namespace */
import { default as DefaultUseCase } from "../../../@seedwork/application/use-cases";
import { Character } from "../../../domain/entities/character";
import { CharacterRepositoryInterface } from "../../../domain/repository/character-repository.interface";

export namespace GetCharacterUseCase {
  export class UseCase implements DefaultUseCase<Input, Output> {
    constructor(private _characterRepository: CharacterRepositoryInterface) {}

    public async execute(input: Input): Promise<Output> {
      return await this._characterRepository.findById(input.id);
    }
  }

  export type Input = {
    id: number;
  };

  export type Output = Character;
}
