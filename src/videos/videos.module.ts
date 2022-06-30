import { Module } from '@nestjs/common';
import { VideoResolver } from './videos.resolver';
import { VideoService } from './videos.service';

//providers: injecao de dependencia
@Module({
    providers: [VideoService, VideoResolver]
})
export class VideosModule {}
