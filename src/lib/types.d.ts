export type AppType = {
    debug: boolean
    queue: MediaListType
    ui: {
        app: HTMLDivElement | null
        mediaEmbed: HTMLDivElement | null
        loadRandomMedia: HTMLButtonElement | null
        mediaSelect: HTMLSelectElement | null
    }
    main(): void
    loadMedia(selected: boolean = false): void
    getRandomMedia(): MediaItemType | null
    getEmbedCode(media: MediaItemType | undefined): string | null
}

export type MediaPlatformType = 'bandcamp' | 'soundcloud' | 'youtube'

export type MediaItemType = {
    platform: MediaPlatformType
    slug: string
    title: string
} | null

export type MediaListType = MediaItemType[]
