import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAHoliday extends BaseMessage {
  holidayId: number;
  name: string;
  description?: string;
  scheduleTimeZone: string;
  holidayDate: number;
  isRecurring: boolean;
  startSecond?: number;
  endSecond?: number;
}
