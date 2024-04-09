declare interface Flags {
  urls: string[];
}

declare interface Borders {
  borders: string[];
}

declare interface Languages {
  languages: string[];
}

declare interface Country {
  id: number;
  name: string;
  description: string;
  stateCapital: string;
  surface: number;
  population: number;
  languages: Languages;
  timeZone: string;
  currency: string;
  currencyCode: string;
  currencySymbol: string;
  isoCode: string;
  internetDomin: string;
  phonePrefix: string;
  radioPrefix: string;
  aircraftPrefix: string;
  subRegion: string;
  region: string;
  borders: Borders;
  flags: Flags;
}

declare interface Himno {
  estrofas: {
    [key: string]: string;
  };
  autor: string;
  año: string;
  genero: string;
  historia: string;
  noticia: {
    [key: string]: string;
  };
}
