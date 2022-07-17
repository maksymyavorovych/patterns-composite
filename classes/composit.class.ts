export interface IPackageStructure { 
  [key: string]: number;
}

export abstract class Component {
  protected parent!: Component | null;

  public setParent(parent: Component | null) {
    this.parent = parent;
  }

  public getParent(): Component | null {
    return this.parent;
  }

  public add(component: Array<Component>): void {}

  public remove(component: Component): void {}

  public isComposite(): boolean {
    return false;
  }

  // any required methods
  public abstract getTotalSumm(): number;
  public abstract getPackegeInfo(
    current?: IPackageStructure
  ): IPackageStructure;
}






export class Element extends Component {
  private price!: number;
  private amount!: number;
  public title: string = 'Element title';

  constructor(title: string, amount: number, price: number) {
    super();
    this.price = price;
    this.amount = amount;
    this.title = title;
  }

  public getTotalSumm(): number {
    return this.price * this.amount;
  }

  public getPackegeInfo(current: IPackageStructure): IPackageStructure {
    current[this.title] = current[this.title] ? current[this.title] + this.amount : this.amount
    return current;
  }
}






export class Composite extends Component {
  public title: string = '';
  protected children: Array<Component> = [];

  constructor(title: string) {
    super();
    this.title = title;
  }

  public add(components: Array<Component>): void {
    this.children = [...this.children, ...components];
    components.forEach((el) => el.setParent(this));
  }

  public remove(component: Component): void {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);

    component.setParent(null);
  }

  public isComposite(): boolean {
    return true;
  }

  public getTotalSumm(): number {
    return this.children.reduce((summ, child) => {
      return summ + child.getTotalSumm();
    }, 0);
  }

  public getPackegeInfo(current = {}): IPackageStructure {
    return this.children.reduce((res, child) => {
      return child.getPackegeInfo(res);
    }, current);
  }
}
