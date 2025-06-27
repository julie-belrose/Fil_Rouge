import 'dotenv/config';
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import {errorHandler} from "#middleware/error/error.middleware.js";
import {notFoundHandler} from "#middleware/error/not-found.middleware.js";


/**
 * Register global middlewares
 */
export const registerMiddlewares = (app, express) => {
    app.use(cors({
        origin: [`${process.env.FRONTEND_URL}`, 'http://127.0.0.1:5173'], // URLs de Vite
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'x-requested-with']
    }));

    app.use(helmet({
        crossOriginResourcePolicy: { policy: "cross-origin" } 
    }));

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(morgan("dev"));

    // Error handling
    app.use(notFoundHandler);
    app.use(errorHandler);
};
