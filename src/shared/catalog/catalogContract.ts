export type CatalogItem = {
  id: string;
};

export type Catalog = {
  version: string;
  items: CatalogItem[];
};

export type CatalogValidation = {
  valid: boolean;
  errors: string[];
};
