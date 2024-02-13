import { BeltGuard } from './../belt/belt.guard';
import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')

export class NinjasController {

    constructor(private readonly NinjasService: NinjasService) { }


    // Get/ninjas ---> []
    @Get()
    getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks') {
        //const service = new NinjasService();
        return this.NinjasService.getNinjas(weapon);
    }

    //get/ninjas/:id ---> {.....}

    @Get(':id')
    GetOneNinja(@Param('id',ParseIntPipe) id: number) {
        try {
            return this.NinjasService.getNinja(id);
        }catch (err) {
            throw new NotFoundException();
            
        }
        
    }

    //post /ninjas
    @Post()
    @UseGuards(BeltGuard)
    createNinja(@Body(new ValidationPipe()) CreateNinjaDto: CreateNinjaDto) {
        return this.NinjasService.createNinja(CreateNinjaDto);
    }

    //put /ninjas/:id ----> {......}
    @Put(':id')
    updateNinja(@Param('id') id: string, @Body() UpdateNinjaDto: UpdateNinjaDto) {
        return this.NinjasService.updateNinja(+id, UpdateNinjaDto);
    }

    //Delete /ninjas/:id
    @Delete(':id')
    removeNinja(@Param('id') id: string) {
        return this.NinjasService.removeNinja(+id);
    }
}




