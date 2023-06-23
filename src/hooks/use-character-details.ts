import { GetCharacterUseCase } from "../@core/application/use-cases/character/get-character.use-case";
import { Registry, container } from "../@core/infra/shared/container-registry";

export async function useCharacterDetails(characterId: number) {
  const input: GetCharacterUseCase.Input = { id: characterId };

  const result = container.get<GetCharacterUseCase.UseCase>(
    Registry.GetCharacterUseCase
  );

  return await result.execute(input);
}
