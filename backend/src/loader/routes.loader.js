import authRoutes from "#domains/auth/auth.routes.js";
import adminRequestRoutes from "#domains/adminRequest/adminRequest.routes.js";
import userRoutes from "#domains/user/user.routes.js";
import agentRoutes from "#domains/user/agent/agent.routes.js";
import adminRoutes from "#domains/user/admin/admin.routes.js";
import reportRoutes from "#domains/report/report.routes.js";
import badgeRoutes from "#domains/badge/badge.routes.js";
import notificationRoutes from "#domains/notification/notification.routes.js";
import treatmentCenterRoutes from "#domains/treatmentCenter/treatmentCenter.routes.js";
import homeRoutes from "#backend/home.routes.js";

/**
 * Register all routes for the app
 */
export const registerRoutes = (app) => {
    // public
    app.use("/", homeRoutes);

    // protected
    app.use("/api/auth", authRoutes);
    app.use("/api/adminRequests", adminRequestRoutes);
    app.use("/api/users", userRoutes);
    app.use("/api/agents", agentRoutes);
    app.use("/api/admins", adminRoutes);
    app.use("/api/reports", reportRoutes);
    app.use("/api/badges", badgeRoutes);
    app.use("/api/notifications", notificationRoutes);
    app.use("/api/treatmentCenters", treatmentCenterRoutes);
};
