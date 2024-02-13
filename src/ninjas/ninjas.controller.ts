import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
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
    GetOneNinja(@Param('id') id: string) {
        return this.NinjasService.getNinja(+id);
    }

    //post /ninjas
    @Post()
    createNinja(@Body() CreateNinjaDto: CreateNinjaDto) {
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




