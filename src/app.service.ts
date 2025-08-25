import { Injectable } from '@nestjs/common';
import { ReportType, data } from './data';
import { v4 as uuid } from 'uuid';
import { ReportResponseDto } from './dtos/report.dto';

interface Report {
  amount: number;
  source: string;
}
interface UpdateReport {
  amount?: number;
  source?: string;
}

@Injectable()
export class AppService {
  getAllReports(type: ReportType): ReportResponseDto[] {
    return data.report.filter((report) => report.type === type);
  }
  getReportById(type: ReportType, id: string): ReportResponseDto | undefined {
    return data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
  }
  createReport(
    type: ReportType,
    { amount, source }: Report,
  ): ReportResponseDto {
    const newReport = {
      id: uuid(),
      source,
      amount,
      createdAt: new Date(),
      updatedAt: new Date(),
      type,
    };
    data.report.push(newReport);
    return newReport;
  }
  updateReport(
    type: ReportType,
    body: UpdateReport,
    id: string,
  ): ReportResponseDto | undefined {
    const reportToUpdate = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);

    if (!reportToUpdate) return;

    const reportIndex = data.report.findIndex(
      (report) => report.id === reportToUpdate.id,
    );

    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
      updatedAt: new Date(),
    };

    return data.report[reportIndex];
  }
  deleteReport(id: string) {
    const reportIndex = data.report.findIndex((report) => report.id === id);
    if (reportIndex === -1) return;
    data.report.splice(reportIndex, 1);
    return;
  }
}
