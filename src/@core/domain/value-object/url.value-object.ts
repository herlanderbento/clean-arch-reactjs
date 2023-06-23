type URLProperty = {
  type: string;
  url: string;
};

export class URL {
  constructor(public props: URLProperty) {}

  public get type(): string {
    return this.props.type;
  }

  public get url(): string {
    return this.props.url;
  }

  public toString() {
    return {
      type: this.type,
      url: this.url,
    };
  }
}
