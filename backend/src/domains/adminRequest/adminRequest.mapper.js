const admin_requestEntity = require('./adminRequest.entity');

class AdminRequestMapper {
    static toPersistence(admin_request) {
        return {
            hashed_token: admin_request.hashed_token,
            related_user_id: admin_request.related_user_id,
            status: admin_request.status,
            created_at: admin_request.created_at,
            expires_at: admin_request.expires_at
        };
    }

    static toDomain(rawData) {
        if (!rawData) return null;
        return admin_requestEntity(rawData);
    }

    static toDTO(admin_request) {
        if (!admin_request) return null;
        return { ...admin_request };
    }

    /**
     * DTO (req.body) to Domain
     */
    static fromDTO(dto) {
        if (!dto) return null;

        return admin_requestEntity({
            hashed_token: dto.hashed_token,
            related_user_id: dto.related_user_id,
            status: dto.status,
            created_at: dto.created_at,
            expires_at: dto.expires_at
        });
    }
}

module.exports = AdminRequestMapper;