/* eslint-disable @typescript-eslint/no-namespace */
import { default as DefaultUseCase } from "../../../@seedwork/application/use-cases";
import { Character } from "../../../domain/entities/character";
import { CharacterRepositoryInterface } from "../../../domain/repository/character-repository.interface";

export namespace ListCharactersUseCase {
  export class UseCase implements DefaultUseCase<Input, Output> {
    constructor(private _characterRepository: CharacterRepositoryInterface) {}

    public async execute(): Promise<Output> {
      return await this._characterRepository.findAll();
    }
  }

  export type Input = void;

  export type Output = Character[];
}
