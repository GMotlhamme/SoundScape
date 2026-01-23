// specific type definitions for the product objects
export interface ProductInformation {
  id?: number;
  name: string;
  brand?: string;
  price: number;
  category?: string;
  quantity?: number;
  description?: string;
  images?: string[];
}

// types for user orders/ past purchases
export interface Order{
        id: number;
        date: string;
        name: string;
        quantity?: number;
        description: string;
    }

    export type ProductMiniCardProps = {
    cartItems: ProductInformation;
    removeItemFromCart?: () => void;
};