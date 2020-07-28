import { DefaultDatepickerAdatapter } from '@teh-lab/angular-uikit/datepicker';
import * as moment from 'moment';
import { Injectable } from "@angular/core";

/**
 * Адаптер для дейтпикера работающий через moment
 */
@Injectable()
export class DateAdapter extends DefaultDatepickerAdatapter<string> {
    dateToString(date: Date, format?: string): string {
        format = 'DD.MM.YYYY';
        return date ? moment(date).format(format) : '';
    }
    stringToDate(date: string, format: string): Date {
        if (!format) {
            if (date.indexOf('/') > -1) {
                format = 'DD/MM/YYYY';
            } else if (date.indexOf('.') > -1 && date.indexOf('T') === -1) {
                format = 'DD.MM.YYYY';
            } else {
                format = 'YYYY-MM-DD';
            }
        }
        return date ? moment(date, format).toDate() : null;
    }
    dateToValue(date: Date): string {
        return date ? moment(date).format('YYYY-MM-DD') : null;
    }
}
