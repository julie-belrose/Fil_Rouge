/**
 * Service: Dashboard - Display Management
 *
 * Responsibility: Coordinate dashboard display using use cases
 * and managing DOM manipulation.
 *
 * This service:
 * - Calls use cases to retrieve data
 * - Updates HTML elements with user data
 * - Handles display errors
 * - Provides utility methods for DOM manipulation
 *
 * NOTE: This service will be replaced by a React hook (useDashboard)
 * when migrating to React. The use cases will remain unchanged.
 */
import { InitializeDashboardDataUserUseCase } from '#shared-frontend/use-cases/initializeDashboardDataUserUseCase.js';
import {DomRender} from "#shared-frontend/services/domRender.js";

export class DashboardManagerUI {
    constructor() {
        this.initializeDashboardUseCase = new InitializeDashboardDataUserUseCase();
        this.domRender = new DomRender();
    }

    async initializeUserDashboard() {
        try {
            const {displayData} = await this.initializeDashboardUseCase.execute();
            this.domRender.renderUserData(displayData);
        } catch (error) {
            console.error('Failed to initialize dashboard:', error);
        }
    }
}