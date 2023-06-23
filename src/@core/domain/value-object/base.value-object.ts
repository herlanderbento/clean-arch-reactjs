type BaseProps = {
  available: number;
  collectionURI: string;
  items: ItemProps[];
  returned: number;
};

type ItemProps = { name: string; resourceURI: string };

export class BaseValueObject {
  constructor(public props: BaseProps) {}

  public get available(): number {
    return this.props.available;
  }

  public get collectionURI(): string {
    return this.props.collectionURI;
  }

  public get items(): ItemProps[] {
    return this.props.items;
  }

  public get returned(): number {
    return this.props.returned;
  }

  public toString() {
    return {
      availabe: this.available,
      collectionURI: this.collectionURI,
      items: this.items,
    };
  }
}
