/**
 * Use Case: Display User Information
 *
 * Responsibility: Generic use case to prepare user data for display
 * across different components (header, dashboard, profile, etc.)
 *
 * This use case:
 * - Takes user data as input
 * - Generates formatted display information
 * - Returns standardized user display data
 * - Can be reused in any component needing user info
 */
export class DisplayUserInfoUseCase {
    execute(user) {
        if (!user) {
            throw new Error('User data is required');
        }

        return {
            displayData: {
                firstname: user.first_name,
                lastname: user.last_name,
                fullName: `${user.first_name} ${user.last_name}`,
                welcomeMessage: `Bienvenue ${user.first_name}`,
                avatarUrl: `https://ui-avatars.com/api/?name=${user.first_name}+${user.last_name}&background=10b981&color=fff`,
                initials: `${user.first_name.charAt(0)}${user.last_name.charAt(0)}`
            }
        };
    }
}