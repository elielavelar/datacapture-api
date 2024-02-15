import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  const config = new DocumentBuilder()
    .setTitle('Central Data Collector API')
    .setDescription(
      'Application to collect data from different resources and store it in a central location.',
    )
    .setVersion('1.0')
    .addTag('datacollector')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
