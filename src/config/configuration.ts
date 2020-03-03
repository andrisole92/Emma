export default () => ({
    database: {
        host: process.env.POSTGRES_HOST || 'localhost',
        port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
        username: parseInt(process.env.POSTGRES_USERNAME, 10) || 'postgres',
        password: process.env.POSTGRES_PASSWORD || '',
        db: process.env.POSTGRES_DATABASE || 'emma',
    }
});
