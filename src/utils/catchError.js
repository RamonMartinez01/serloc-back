const catchError = controller => {
    return async (req, res, next) => {
        try {
            await controller(req, res, next)
        } catch (error) {
            console.error('❌ Error capturado en catchError:', error);

            // Si la respuesta ya fue enviada por otro middleware, no hacemos nada
            if (res.headersSent) {
                return next(error);
            }

            // Manejo básico si no hay otro error handler definido
            res.status(500).json({
                error: true,
                message: 'Error interno del servidor',
                details: process.env.NODE_ENV === 'development' ? error.message : undefined
            });
        }
    }
} 


module.exports = catchError