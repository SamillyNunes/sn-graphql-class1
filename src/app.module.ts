import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { VideosModule } from './videos/videos.module';
// import {ApolloDriv}


@Module({
  imports: [
    VideosModule, 
    GraphQLModule.forRoot(
      {
        typePaths: ['./**/*.graphql']
      }
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
