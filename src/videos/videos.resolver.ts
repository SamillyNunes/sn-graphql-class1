import { Injectable } from "@nestjs/common";
import { Args, Mutation, Query } from "@nestjs/graphql";
import { Video } from "src/graphql";
import { VideoDTO } from "./dto/video.dto";
import { VideoService } from "./videos.service";

@Injectable()
export class VideoResolver{

    constructor(private readonly videoService: VideoService){}

    // promise eh algo que vira no futuro
    @Query()
    async videos(): Promise<Video[]>{
        return this.videoService.findAll();
    }

    // passando o 'createVideo' pra sinalizar que quando ele sinalizar com esse nome,
    // eh essa mutation que sera chamada
    @Mutation('createVideo')
    async create(@Args('input') args: VideoDTO): Promise<Video>{
        return await this.videoService.create(args);
    }
}