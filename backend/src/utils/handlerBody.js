/**
 * Wraps a simple controller with auto error handling and response
 * @param {Function} handler - async function (req, res) => result
 * @param {number} successStatusCode - optional success HTTP status
 */
export const handlerBody = (handler, successStatusCode = 200) => {
    return async (req, res) => {
        try {
            const result = await handler(req, res);
            res.status(successStatusCode).json({
                success: true,
                data: result
            });
        } catch (error) {
            console.error('Error in handlerBody:', error);
            const statusCode = error.message.includes('Validation') ? 400 : 500;
            res.status(statusCode).json({
                success: false,
                message: error.message
            });
        }
    };
};
