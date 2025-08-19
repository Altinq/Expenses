import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllIncomeReports() {
    return [];
  }
  @Get(':id')
  getIncomeReportById() {
    return {};
  }

  @Post()
  createIncomeReport() {
    return {};
  }

  @Put(':id')
  updateIncomeReport() {
    return {};
  }

  @Delete(':id')
  deleteIncomeReport() {
    return {};
  }
}
