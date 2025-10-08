class BadgeMapper {
    static toPersistence(badge) {
        return {
            name: badge.name,
            description: badge.description,
            image_url: badge.image_url,
            created_at: badge.created_at,
            updated_at: badge.updated_at
        };
    }
}

export const badgeMapper = new BadgeMapper();