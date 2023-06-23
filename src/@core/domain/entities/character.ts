import { Comics } from "../value-object/comics.value-objec";
import { Events } from "../value-object/events.value-object";
import { Series } from "../value-object/series.value-object";
import { Story } from "../value-object/story.value-object";
import { Thumbnail } from "../value-object/thumbnail.value-object";
import { URL } from "../value-object/url.value-object";

export type CharacterProps = {
  id: number;
  name: string;
  description: string;
  modified: string;
  resourceURI: string;
  urls: URL;
  thumbnail: Thumbnail;
  comics: Comics;
  stories: Story;
  events: Events;
  series: Series;
};

export class Character {
  private _id: number;
  private _name: string;
  private _description: string;
  private _modified: string;
  private _resourceURI: string;
  private _urls: URL;
  private _thumbnail: Thumbnail;
  private _comics: Comics;
  private _stories: Story;
  private _events: Events;
  private _series: Series;

  constructor(public props: CharacterProps) {
    this._id = props.id;
    this._name = props.name;
    this._description = props.description;
    this._modified = props.modified;
    this._resourceURI = props.resourceURI;
    this._urls = props.urls;
    this._thumbnail = props.thumbnail;
    this._comics = props.comics;
    this._stories = props.stories;
    this._events = props.events;
    this._series = props.series;
  }

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get description(): string {
    return this._description;
  }

  public get modified(): string {
    return this._modified;
  }

  public get resourceURI(): string {
    return this._resourceURI;
  }

  public get urls(): URL {
    return this._urls;
  }

  public get thumbnail(): Thumbnail {
    return this._thumbnail;
  }

  public get comics(): Comics {
    return this._comics;
  }

  public get stories(): Story {
    return this._stories;
  }

  public get series(): Series {
    return this._series;
  }

  public get events(): Events {
    return this._events;
  }

  public toString() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      modified: this.modified,
      resourceURI: this.resourceURI,
      urls: this.urls.toString(),
      thumbnail: this.thumbnail.toString(),
      comics: this.comics.toString(),
      stories: this.stories.toString(),
      events: this.events.toString(),
      series: this.series.toString(),
    };
  }
}
