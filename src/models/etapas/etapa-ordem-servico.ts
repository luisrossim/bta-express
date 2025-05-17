export abstract class EtapaOrdemServico {
  private readonly id: number;
  
  constructor(id: number){
    this.id = id;
  }

  public abstract next(): EtapaOrdemServico;
  public abstract  previous(): EtapaOrdemServico;

  public getId(){
    return this.id;
  }
}