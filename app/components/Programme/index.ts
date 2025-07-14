import Programme2024 from './Programme2024';
import Programme2025 from './Programme2025';

export function getProgrammeComponent(year: number) {
  switch (year) {
    case 2024:
      return Programme2024;
    case 2025:
      return Programme2025;
    default:
      return Programme2024
  }
}
