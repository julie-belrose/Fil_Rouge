const badgeEntity = require('../entity/badge.entity');

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

    static toDomain(rawData) {
        if (!rawData) return null;
        return badgeEntity(rawData);
    }

    static toDTO(badge) {
        if (!badge) return null;
        return { ...badge };
    }
}

module.exports = BadgeMapper;