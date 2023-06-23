import { Container } from "inversify";
import { http } from "./http";
import { CharacterHttpRepository } from "../repositories/character-http.repository";
import { ListCharactersUseCase } from "../../application/use-cases/character/list-characters.use-case";
import { GetCharacterUseCase } from "../../application/use-cases/character/get-character.use-case";

export const Registry = {
  AxiosAdapter: Symbol.for("AxiosAdapter"),

  CharacterRepository: Symbol.for("CharacterRepositoryInterface"),

  ListCharactersUseCase: Symbol.for("ListCharactersUseCase"),
  GetCharacterUseCase: Symbol.for("GetCharacterUseCase"),
};

export const container = new Container();

container.bind(Registry.AxiosAdapter).toConstantValue(http);

// Repositories or Gateways
container.bind(Registry.CharacterRepository).toDynamicValue((context) => {
  return new CharacterHttpRepository(
    context.container.get(Registry.AxiosAdapter)
  );
});

// movie use case
container.bind(Registry.ListCharactersUseCase).toDynamicValue((context) => {
  return new ListCharactersUseCase.UseCase(
    context.container.get(Registry.CharacterRepository)
  );
});

container.bind(Registry.GetCharacterUseCase).toDynamicValue((context) => {
  return new GetCharacterUseCase.UseCase(
    context.container.get(Registry.CharacterRepository)
  );
});
