declare type Flags = string[];

declare type Borders = string[];

declare type Languages = string[];

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
declare interface Estrofas {
  coro: string;
  estrofa1: string;
  estrofa2: string;
  estrofa3: string;
  estrofa4: string;
  estrofa5: string;
  estrofa6: string;
  estrofa7: string;
  estrofa8: string;
  estrofa9: string;
  estrofa10: string;
  estrofa11: string;
}
declare interface Noticia {
  autor: string;
  enviadoPor: string;
  articulo: string;
  estrofa: string;
  continuacion: string;
}
declare interface Himno {
  estrofas: Estrofas;
  autor: string;
  año: string;
  genero: string;
  historia: string;
  noticia: Noticia;
  fuente: string;
}
declare interface Regulacionyuso {
  descripcion: string;
  primera: string;
  segunda: string;
  tercera: string;
  cuarta: string;
  quita: string;
}
declare interface Elementos {
  descripcion: string;
  primera: string;
  segunda: string;
  tercera: string;
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
  artículo366: Artículo366;
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

declare interface Departments {
  id: number | null;
  name: string | null;
}
declare interface Region {
  id: number;
  name: string;
  description: string;
  departments: null | Departments[];
}
declare type Regions = Region[];

declare interface Capital {
  id: number;
  name: string;
  description: string;
  surface: number;
  population: number;
  postalCode: string;
  departmentId: number;
  department: null;
  touristAttractions: null;
  presidents: null;
  indegenousReservations: null;
  airports: null;
  radios: null;
}

declare interface Cities {
  id: number;
  name: string;
}

declare interface Department {
  id: number;
  name: string;
  description: string;
  cityCapitalId: number;
  municipalities: number;
  surface: number;
  population: number;
  phonePrefix: string;
  countryId: number;
  cityCapital: Capital;
  country: null;
  cities: null | Cities[];
  regionId: number;
  region: null;
  naturalAreas: null;
  maps: null;
  indigenousReservations: null;
  airports: null;
}
