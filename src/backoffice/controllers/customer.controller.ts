import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { ValidatorInterceptor } from 'src/interceptors/validator.interceptor';
import { CreateCustomerContract } from '../contracts/customer.contract';
import { Customer } from '../models/customer.model';
import { Result } from '../models/result.model';

@Controller('v1/customers')
export class CustomerController {

  @Get()
  get(): Result {
    return new Result( '', true, [], null)
  }

  @Get(':document')
  getById(@Param('document') document: string): Result {
    return new Result( '', true, {}, null)
  }

  @Post()
  @UseInterceptors(new ValidatorInterceptor(new CreateCustomerContract()))
  post (@Body() body: Customer): Result {
    return new Result( 'Cliente criado com sucesso', true, body, null)
  }

  @Put(':document')
  put (@Param('document') document: string, @Body() body: Customer): Result {
    return new Result( 'Cliente atualizado com sucesso', true, body, null)
  }

  @Delete(':document')
  delete (@Param('document') document: string): Result {
    return new Result( 'Cliente removido com sucesso', true, {}, null)
  }
}