export interface ProtoOAHoliday {
  holidayId: number;
  name: string;
  description?: string;
  scheduleTimeZone: string;
  holidayDate: number;
  isRecurring: boolean;
  startSecond?: number;
  endSecond?: number;
}
