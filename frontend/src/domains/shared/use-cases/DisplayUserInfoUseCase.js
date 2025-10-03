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
                firstname: user.firstname,
                lastname: user.lastname,
                fullName: `${user.firstname} ${user.lastname}`,
                welcomeMessage: `Bienvenue ${user.firstname}`,
                avatarUrl: `https://ui-avatars.com/api/?name=${user.firstname}+${user.lastname}&background=10b981&color=fff`,
                initials: `${user.firstname.charAt(0)}${user.lastname.charAt(0)}`
            }
        };
    }
}