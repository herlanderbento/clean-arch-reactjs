import { ListCharactersUseCase } from "../@core/application/use-cases/character/list-characters.use-case";
import { Registry, container } from "../@core/infra/shared/container-registry";

export async function useCharacter() {
  const result = container.get<ListCharactersUseCase.UseCase>(
    Registry.ListCharactersUseCase
  );

  return await result.execute();
}
