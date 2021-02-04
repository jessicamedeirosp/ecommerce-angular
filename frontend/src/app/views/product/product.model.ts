export interface Product {
    id: string;
    name: string;
    description: string;
    price: number | null;
    installments: number | null;
    image: string;
}
