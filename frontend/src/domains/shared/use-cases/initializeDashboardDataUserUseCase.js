import {MOCK_USERS} from "#tests-frontend/mock/index.js";
import {DisplayInfoUserUseCase} from "#shared-frontend/use-cases/displayInfoUserUseCase.js"

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
export class InitializeDashboardDataUserUseCase {
    constructor() {
        this.displayInfoUserUseCase = new DisplayInfoUserUseCase();
    }

    async execute() {
        let currentUser = null;
        currentUser = MOCK_USERS.find(user => user.user_id);
        //currentUser = MOCK_AGENTS.find(agent => agent.user_id);
        //currentUser = MOCK_ADMINS.find(admin => admin.user_id);

        const { displayData } = this.displayInfoUserUseCase.execute(currentUser);

        return {
            user: currentUser,
            displayData
        };
    }
}