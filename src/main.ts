import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe({forbidUnknownValues: true}));

    const options = new DocumentBuilder()
        .setTitle('Emma API')
        .setDescription('An example Endpoint with NestJS, TypeScript and OpenApi')
        .setVersion('1.0')
        .addTag('API')
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}

bootstrap();
