import {NestFactory} from '@nestjs/core';
import {SeedModule} from "./seed/seed.module";
import {SeedService} from "./seed/seed.service";

async function bootstrap() {
    NestFactory.createApplicationContext(SeedModule)
        .then(appContext => {
            const seedService = appContext.get(SeedService);
            seedService
                .seed()
                .then(() => {
                    console.log('success')
                })
                .catch(error => {
                    throw error;
                })
                .finally(() => {
                    appContext.close();
                    process.exit();
                });
        })
        .catch(error => {
            throw error;
        });
}

bootstrap();
