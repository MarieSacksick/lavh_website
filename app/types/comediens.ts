export type Comedien = {
  id: string;
  description: string; // HTML string
  years_present: number[];
  prenom: string;
  nom: string;
  imageSrc: {
    default: string;
    [year: string]: string | undefined;
  };
};
