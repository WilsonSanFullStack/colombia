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
  fuente: string;
}
declare type Primera = string;
declare interface Regulacionyuso {
  descripcion: string;
  primera: Primera;
  segunda: Primera;
  tercera: Primera;
  cuarta: Primera;
  quita: Primera;
}
declare interface Elementos {
  descripcion: string;
  primera: Primera;
  segunda: Primera;
  tercera: Primera;
}
declare interface Artículo365 {
  titulo: string;
  primera: string;
  segunda: string;
  tercera: string;
}

declare interface Artículo366 {
  titulo: string;
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
  f: string;
  g: string;
  h: string;
}
declare interface Descripcion {
  descripcion: string;
  artículo365: Artículo365;
  artículo366: Artículo366
}
declare interface Escudo {
  escudoArmas: string;
  formaEscudoArmas: string;
  descripcion: Descripcion;
  elementos: Elementos;
  regulacionyuso: Regulacionyuso;
  fuente: string;
}

declare interface Colores {
  descripcion: string;
  amarillo: string;
  azul: string;
  rojo: string;
}
declare interface Variantes {
  mercante: string;
  banderaMercante: string;
  guerra: string;
  banderaGuerra: string;
  presidencial: string;
  banderaPresidencial: string;
}
declare interface HiBa {
  letraMusica: string;
  estrofa1: string;
  estrofa2: string;
  estrofa3: string;
}
declare interface Bandera {
  descripcion: string;
  bandera: string;
  significadoColores: Colores;
  origenHistoria: string;
  variantes: Variantes;
  uso: string;
  juramento: string;
  himnoBandera: HiBa;
  fuente: string;
}

declare interface Palma {
  descripcion: string;
  nombre: string;
  familia: string;
  formaCopa: string;
  color: string;
  porte: string;
  crecimiento: string;
  tronco: string;
  follaje: string;
  corteza: string;
  hoja: string;
  flores: string;
  fruto: string;
  image: string;
  fuente: string;
}
declare interface Arbol {
  descripcion: string;
  image: string;
  palma: Palma;
}

declare interface Ave {
  descripcion: string;
  image: string;
  fuente: string;
}
