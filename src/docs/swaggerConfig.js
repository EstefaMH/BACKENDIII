import swaggerJSDoc from 'swagger-jsdoc';


const options = {
    definition: {
        openapi: '3.0.0', 
        info: {
            title: 'Documentación API ',
            version: '1.0.0',
            description: 'API REST construida con Express y documentada con Swagger',
        },
        servers: [
            {
                url: 'http://localhost:8080', 
                description: 'Servidor Local',
            },
        ],
       
    },
    apis: ["./src/docs/**/*.yaml"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;