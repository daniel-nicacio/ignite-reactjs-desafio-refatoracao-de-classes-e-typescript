export interface IFood {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

export interface FormData
  extends Pick<IFood, "name" | "image" | "price" | "description"> {}
