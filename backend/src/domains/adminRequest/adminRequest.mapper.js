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
}

module.exports = AdminRequestMapper;