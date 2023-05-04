export interface Movies {
    adult: boolean;
    backdrop_path?: null;
    belongs_to_collection?: null;
    budget: number;
    genres?: (null)[] | null;
    homepage: string;
    id: number;
    imdb_id?: null;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path?: null;
    production_companies?: (null)[] | null;
    production_countries?: (null)[] | null;
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages?: (SpokenLanguagesEntity)[] | null;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  export interface SpokenLanguagesEntity {
    english_name: string;
    iso_639_1: string;
    name: string;
  }
  
