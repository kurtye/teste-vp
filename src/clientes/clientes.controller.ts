import { Controller, Get, Param } from '@nestjs/common';
import { Cliente } from './shared/cliente';
import { ClientesService } from './shared/clientes.service';

@Controller('clientes')
export class ClientesController {

    constructor(private clienteService: ClientesService){

    }

    @Get()
    async getAll() : Promise<Cliente[]>{
        return this.clienteService.getAll();
    }

    @Get(":cod_cliente")
    async getByCod(@Param('cod_cliente') cod_cliente: number) : Promise<Cliente>{
        return this.clienteService.getByCod(cod_cliente);
    }
} 
