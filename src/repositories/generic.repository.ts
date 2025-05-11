export class GenericRepository<T, U> {
  protected readonly repo: any;

  constructor(model: any) {
    this.repo = model;
  }

  async create(data: T): Promise<T> {
    return await this.repo.create({ data });
  }
}
