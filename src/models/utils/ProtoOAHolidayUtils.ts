import Pbf from "pbf";

import { ProtoOAHoliday } from "../interfaces/ProtoOAHoliday.js";

export class ProtoOAHolidayUtils {
  static default(partialMessage?: Partial<ProtoOAHoliday>): ProtoOAHoliday {
    return {
      holidayId: 0,
      name: "",
      scheduleTimeZone: "",
      holidayDate: 0,
      isRecurring: false,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAHoliday {
    return pbf.readFields(
      ProtoOAHolidayUtils._readField,
      ProtoOAHolidayUtils.default(),
      end,
    );
  }

  private static _readField(tag: number, message: ProtoOAHoliday, pbf: Pbf) {
    if (tag === 1) message.holidayId = pbf.readVarint64();
    if (tag === 2) message.name = pbf.readString();
    if (tag === 3) message.description = pbf.readString();
    if (tag === 4) message.scheduleTimeZone = pbf.readString();
    if (tag === 5) message.holidayDate = pbf.readVarint64();
    if (tag === 6) message.isRecurring = pbf.readBoolean();
    if (tag === 7) message.startSecond = pbf.readVarint();
    if (tag === 8) message.endSecond = pbf.readVarint();
  }

  static write(message: ProtoOAHoliday, pbf: Pbf): void {
    const {
      holidayId,
      name,
      description,
      scheduleTimeZone,
      holidayDate,
      isRecurring,
      startSecond,
      endSecond,
    } = message;
    if (holidayId !== undefined && holidayId !== null)
      pbf.writeVarintField(1, holidayId);
    if (name !== undefined && name !== null) pbf.writeStringField(2, name);
    if (description !== undefined && description !== null)
      pbf.writeStringField(3, description);
    if (scheduleTimeZone !== undefined && scheduleTimeZone !== null)
      pbf.writeStringField(4, scheduleTimeZone);
    if (holidayDate !== undefined && holidayDate !== null)
      pbf.writeVarintField(5, holidayDate);
    if (isRecurring !== undefined && isRecurring !== null)
      pbf.writeBooleanField(6, isRecurring);
    if (startSecond !== undefined && startSecond !== null)
      pbf.writeVarintField(7, startSecond);
    if (endSecond !== undefined && endSecond !== null)
      pbf.writeVarintField(8, endSecond);
  }
}
