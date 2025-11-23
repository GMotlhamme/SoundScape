// specific type definitions for the product objects
export interface ProductInformation {
  name: string;
  brand?: string;
  price: number;
  image?: string;
}

// types for user orders/ past purchases
export interface Order{
        id: number;
        date: string;
        name: string;
        quantity?: number;
        description: string;
    }