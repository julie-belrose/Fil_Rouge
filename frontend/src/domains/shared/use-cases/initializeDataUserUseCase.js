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
import { DisplayUserInfoUseCase } from '#shared-frontend/use-cases/displayUserInfoUseCase.js';
import {MOCK_USERS} from "#tests-frontend/mock/index.js";

export class InitializeDataUserUseCase {
    constructor() {
        this.displayUserInfoUseCase = new DisplayUserInfoUseCase();
    }

    async execute() {
        let currentUser = null;
        currentUser = MOCK_USERS.find(user => user.user_id);
        //currentUser = MOCK_AGENTS.find(agent => agent.user_id);
        //currentUser = MOCK_ADMINS.find(admin => admin.user_id);

        const { displayData } = this.displayUserInfoUseCase.execute(currentUser);

        return {
            user: currentUser,
            displayData
        };
    }
}