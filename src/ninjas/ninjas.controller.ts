import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {


    // Get/ninjas ---> []
    @Get()
    getNinjas(@Query('type') type:string) {
        return [
            {type}
        ];
    }

    //get/ninjas/:id ---> {.....}

    @Get(':id')
    GetOneNinja(@Param('id') id: string) {
        return {
            id
        };
    }

    //post /ninjas
    @Post()
    createNinja(@Body() CreateNinjaDto:CreateNinjaDto) {
        return {
            name:CreateNinjaDto.name
        };
    }

    //put /ninjas/:id ----> {......}
    @Put(':id')
    updateNinja(@Param('id') id:string, @Body() UpdateNinjaDto:UpdateNinjaDto) {
        return {
            id,
            name:UpdateNinjaDto.name,
        };
    }

    //Delete /ninjas/:id
    @Delete(':id')
    removeNinja(@Param('id') id:string) {
        return {
            id
        };
    }
}




