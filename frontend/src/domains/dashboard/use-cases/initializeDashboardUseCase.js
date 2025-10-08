/**
 * Use Case: Initialize User Dashboard
 *
 * Responsibility: Orchestrate dashboard initialization by retrieving
 * user session and delegating display formatting to generic use case.
 *
 * This use case:
 * - Verifies that the user is authenticated
 * - Retrieves session data
 * - Delegates user info formatting to DisplayUserInfoUseCase
 * - Returns dashboard-specific data
 */
import { SessionService } from '../../auth/services/sessionService.js';
import { DisplayUserInfoUseCase } from '../../shared/use-cases/DisplayUserInfoUseCase.js';

export class InitializeDashboardUseCase {
    constructor() {
        this.sessionService = new SessionService();
        this.displayUserInfoUseCase = new DisplayUserInfoUseCase();
    }

    async execute() {
        const currentUser = this.sessionService.getCurrentUserWithProfile();

        if (!currentUser) {
            throw new Error('User not authenticated');
        }

        const { displayData } = this.displayUserInfoUseCase.execute(currentUser);

        return {
            user: currentUser,
            displayData
        };
    }
}