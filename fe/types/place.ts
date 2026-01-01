export interface Place {
    place_id: number;
    name: string;
    description: string | null;
    address: string | null;
    city: string | null;
    country: string | null;
    category: string | null;
    image_url: string | null;
    average_rating: number;
    created_at: Date;
}