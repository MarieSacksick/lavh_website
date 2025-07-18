export type ComedienPhotosProps = {
  prenom: string;
  nom: string;
  imageSrc: string;
};

export type Comedien = ComedienPhotosProps & {
  id: string;
  description: string; // HTML string
  years_present: number[];
};
