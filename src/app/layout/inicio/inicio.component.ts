import { routerTransition } from '../../router.animations';

import { Component, ChangeDetectionStrategy, OnInit, LOCALE_ID } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {
    isSameMonth,
    isSameDay,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    startOfDay,
    endOfDay,
    format
} from 'date-fns';
import { Observable } from 'rxjs';
import { UrlServ } from '../../global-setting';
import { AudienciaService } from '../../shared/services/audiencia.service';

import { ToastrService } from 'ngx-toastr';
import { AudienciaC } from '../../classes/Audiencia';

import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
import { DemandasService } from '../../shared/services/demandas.service';
import { DemandaCon } from '../../classes/Demanda';




const colors: any = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [routerTransition()]
})
export class InicioComponent implements OnInit {
    locale = 'es-MX';
    view = 'month';
    demandas: DemandaCon[];
    dO: DemandaCon[];
    dE: DemandaCon[];

    viewDate: Date = new Date();

    events$: Observable<Array<CalendarEvent<{aud: AudienciaC}>>>;

    activeDayIsOpen = false;
    rol: number;

    constructor(private _http: HttpClient, private _Aservice: AudienciaService, private toastr: ToastrService ) {
        }

    ngOnInit(): void {
        this.fetchEvents();
    }

    fetchEvents(): void {

        this.events$ = this._http.get<AudienciaC[]>(UrlServ + '/audiencias').pipe(
            map(response => {
                const a = new Array<CalendarEvent<{aud: AudienciaC}>>();
                for (const aud of response) {
                    const d1 = new Date(aud.AudFecha);
                    const t1 = new Date(aud.AudHora);
                    const df = new Date(d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate(),
                        t1.getUTCHours(), t1.getUTCMinutes(), t1.getUTCMilliseconds());



                    switch (aud.DemTipo) {
                        case 'Extraordinaria': {
                            const nE = {
                                title: 'Folio: ' + aud.DemFolio + ' Mesa: ' + aud.MesNombre + ' Hora: ' +
                                    df.getHours() + ':' + df.getMinutes(),
                                start: df,
                                color: colors.red,
                            };
                            a.push(nE);
                            break;
                        }
                        default: {
                            const nE = {
                                title: 'Folio: ' + aud.DemFolio + ' Mesa: ' + aud.MesNombre + ' Hora: ' +
                                df.getHours() + ':' + df.getMinutes(),
                                start: df,
                                color: colors.blue,
                            };
                            a.push(nE);
                            break;
                        }
                    }

                }
                return a;
            })
        );

    }

    dayClicked({
        date,
        events
    }: {
            date: Date;
            events: Array<CalendarEvent<{ aud: AudienciaC }>>;
        }): void {
        if (isSameMonth(date, this.viewDate)) {
            if (
                (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0
            ) {
                this.activeDayIsOpen = false;
            } else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    }

    setView(v) {
        switch (v) {
            case 'month': {
                this.view = 'month';
                break;
            }
            case 'week': {
                this.view = 'week';
                break;
            }
            case 'day': {
                this.view = 'day';
                break;
            }
            default: {
                this.view = 'month';
            }
        }
    }

    beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
        body.forEach(cell => {
            const groups: any = {};
            cell.events.forEach((event: CalendarEvent<{ type: string }>) => {
                groups[event.meta.type] = groups[event.meta.type] || [];
                groups[event.meta.type].push(event);
            });
            cell['eventGroups'] = Object.entries(groups);
        });
    }

    eventClicked(event: CalendarEvent<{ aud: AudienciaC }>): void {

    }

}
