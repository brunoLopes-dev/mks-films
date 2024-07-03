import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { MoviesService } from './movie.service';
import { Movie } from './movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  findAll(): Promise<Movie[]> {
    return this.moviesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Movie> {
    return this.moviesService.findOne(id);
  }

  @Post()
  create(@Body() movie: Movie): Promise<Movie> {
    return this.moviesService.create(movie);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() movie: Partial<Movie>,
  ): Promise<void> {
    return this.moviesService.update(id, movie);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.moviesService.remove(id);
  }
}
