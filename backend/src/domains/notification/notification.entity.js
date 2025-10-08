/**
 * Notification entity factory function
 */
export const notificationEntity = (data = {}) => {
    const now = new Date();

    return {
        _id: data._id || null,
        user_id: data.user_id || null,
        title: data.title || null,
        content: data.content || null,
        target_type: data.target_type || null,
        target_id: data.target_id || null,
        read: data.read || null,
        created_at: data.created_at || now,
        updated_at: now,

        isValid() {
            return this.user_id &&
                this.title &&
                this.content &&
                this.read;
        }
    };
};