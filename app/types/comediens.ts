export type ComedienPhotosProps = {
  prenom: string;
  nom: string;
  imageSrc: {
    default: string;
    [year: number]: string;
  };
};

export type Comedien = ComedienPhotosProps & {
  id: string;
  description: string; // HTML string
  years_present: number[];
};
