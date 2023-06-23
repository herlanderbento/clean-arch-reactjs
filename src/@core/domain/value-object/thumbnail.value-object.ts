type ImageProps = {
  path: string;
  extension: string;
};

export class Thumbnail {
  constructor(public props: ImageProps) {}

  public get path(): string {
    return this.props.path;
  }

  public get extension(): string {
    return this.props.extension;
  }

  public toString() {
    return {
      path: this.path,
      extension: this.extension,
    };
  }
}
