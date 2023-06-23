export interface RepositoryInterface<E> {
  findAll(): Promise<E[]>;
  findById(id: number): Promise<E>;
}
