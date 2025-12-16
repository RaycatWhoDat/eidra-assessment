declare const __tags: unique symbol;
export type Branded<T, U> = T & { readonly [__tags]: U };
export type NonEmptyArray<T> = [T, ...T[]];

export type APIError = {
  error: boolean;
  reason: string;
};

export type UUID = Branded<string, "UUID">;
export type URI = Branded<string, "URI">;

export type Filter = {
  id: UUID;
  name: string;
  image_url: URI;
};

const RATINGS = [0, 1, 2, 3, 4, 5] as const;
export type Rating = (typeof RATINGS)[number];

export type Restaurant = {
  id: string;
  name: string;
  rating: Rating;
  filter_ids: NonEmptyArray<UUID>;
  image_url: URI;
  delivery_time_minutes: number;
};

export type RestaurantsResponse = {
  restaurants: Restaurant[];
};

export type OpenStatus = {
  restaurant_id: string;
  is_currently_open: boolean;
};

export type PriceRange = {
  id: UUID;
  range: string;
};
