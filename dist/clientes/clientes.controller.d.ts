import { Cliente } from './shared/cliente';
import { ClientesService } from './shared/clientes.service';
export declare class ClientesController {
    private clienteService;
    constructor(clienteService: ClientesService);
    getAll(): Promise<Cliente[]>;
    getByCod(cod_cliente: number): Promise<Cliente>;
}
