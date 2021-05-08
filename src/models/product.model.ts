export interface Product {
  id: string;
  name: string;
  attributes: { name: string; value_name: string }[];
  pictures: { url: string }[];
}
