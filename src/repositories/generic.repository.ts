export abstract class GenericRepository<T, C, M> {
  protected readonly repo: any;

  constructor(model: any) {
    this.repo = model;
  }

  async create(data: C): Promise<T> {
    return await this.repo.create({ data });
  }
}
