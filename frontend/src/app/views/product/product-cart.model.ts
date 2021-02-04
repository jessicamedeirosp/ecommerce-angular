export interface ProductCart {
    id?: string;
    name: string;
    description: string;
    price: number | null;
    installments: number | null;
    image: string;
    quantity: number;
    total: number;
}
