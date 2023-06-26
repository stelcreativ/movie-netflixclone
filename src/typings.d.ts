export interface Movie {
    id: number
    title: string
    backdrop_path: string
    media_type?: string
    release_date?: string
    description: string
    name: string
    thumbnailUrl: string
    videoUrl: string
    origin_country: string[]
    overview: string
    poster_path: string
}

export interface Element {
    type:
    | 'Trailer'
    | 'Teaser'
}