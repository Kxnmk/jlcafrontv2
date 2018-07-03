import { routerTransition } from '../../router.animations';

import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CalendarEvent } from 'angular-calendar';
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


interface Film {
    id: number;
    title: string;
    release_date: string;
}

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
    view = 'month';

    viewDate: Date = new Date();

    events$: Observable<Array<CalendarEvent<{aud: AudienciaC}>>>;

    activeDayIsOpen = false;

    constructor(private _http: HttpClient, private _Aservice: AudienciaService, private toastr: ToastrService ) { }

    ngOnInit(): void {
        this.fetchEvents();
    }

    fetchEvents(): void {
        this.events$ = this._http.get<AudienciaC[]>(UrlServ + '/audiencias').pipe(
            map(response => {
                const a = new Array<CalendarEvent<{aud: AudienciaC}>>();
                console.log(response);
                for (const aud of response) {
                    switch (aud.DemTipo) {
                        case 'Extraordinaria': {
                            const nE = {
                                title: 'Folio: ' + aud.DemFolio,
                                start: new Date(aud.AudFecha),
                                color: colors.red,
                            };
                            a.push(nE);
                            break;
                        }
                        default: {
                            const nE = {
                                title: 'Folio: ' + aud.DemFolio,
                                start: new Date(aud.AudFecha),
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
            events: Array<CalendarEvent<{ film: Film }>>;
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

    eventClicked(event: CalendarEvent<{ film: Film }>): void {
        window.open(
            `https://www.themoviedb.org/movie/${event.meta.film.id}`,
            '_blank'
        );
    }
}
