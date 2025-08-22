interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    createdAt: Date;
    updatedAt: Date;
    type: ReportType;
  }[];
}

export enum ReportType {
  EXPENSE = 'expense',
  INCOME = 'income',
}

export const data: Data = {
  report: [
    {
      id: 'uuid4',
      source: 'salary',
      amount: 1000,
      createdAt: new Date(),
      updatedAt: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid5',
      source: 'youtube',
      amount: 2500,
      createdAt: new Date(),
      updatedAt: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid6',
      source: 'food',
      amount: 500,
      createdAt: new Date(),
      updatedAt: new Date(),
      type: ReportType.EXPENSE,
    },
  ],
};
