// LIST ITEMS (Homepage)
export interface PokeListItem {
  name: string;
  url: string;
}

// LIST RESPONSE
export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokeListItem[];
}

// DETAILS PAGE RESPONSE
export interface PokeCardTypes {
  name: string;
  sprites: {
    front_default: string;
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
      url: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
}
