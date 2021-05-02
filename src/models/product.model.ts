export interface Product {
  parent_id: string;
  pictures: { url: string }[];
  name: string;
  attributes: { name: string; value_name: string }[];
}
