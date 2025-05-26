export abstract class ServiceOrderStage {
  private readonly id: number;
  
  constructor(id: number){
    this.id = id;
  }

  public abstract next(): ServiceOrderStage;
  public abstract previous(): ServiceOrderStage;

  public getId(){
    return this.id;
  }
}