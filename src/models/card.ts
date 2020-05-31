import Image from "./image";

interface CardModel {
    id: number
    image: Image
    title?: string
    description?: string
    likes_count?: number
    is_favorite: boolean
}

export default CardModel