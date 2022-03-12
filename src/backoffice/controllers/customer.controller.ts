import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('v1/customers')
export class CustomerController {

  @Get()
  get() {
    return 'Listar todos os clientes'
  }

  @Get(':document')
  getById(@Param('document') document) {
    return `Obter o cliente ${document}`
  }

  @Post()
  post (@Body() body) {
    return {
      data: body
    }
  }

  @Put(':document')
  put (@Param('document') document, @Body() body) {
    return {
      customer: document,
      data: body,
    }
  }

  @Delete(':document')
  delete (@Param('document') document) {
    return `Excluindo cliente ${document}`
  }
}