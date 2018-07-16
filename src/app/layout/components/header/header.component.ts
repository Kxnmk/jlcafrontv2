import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Usuario } from '../../../classes/Usuario';
import { DemandasService } from '../../../shared/services/demandas.service';
import { ToastrService } from 'ngx-toastr';
import { DemandaCon } from '../../../classes/Demanda';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    // tslint:disable-next-line:no-inferrable-types
    pushRightClass: string = 'push-right';
    usuarioName;
    usuarioRol;
    demandas: DemandaCon[] = [];
    rol: number;
    size = 0;

    constructor(private translate: TranslateService, public router: Router, private _DService: DemandasService,
        private toastr: ToastrService) {
        try {
            this.usuarioName = JSON.parse(sessionStorage.getItem('User'))[0].usrNombre;
            this.usuarioRol = JSON.parse(sessionStorage.getItem('User'))[0].RolDescripcion;
            this.rol = JSON.parse(sessionStorage.getItem('User'))[0].RolClave;
        } catch (Error) {}



        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('es');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });

        this._DService.getDemadnasByRol(this.rol).subscribe(
            data => {
                if (data.length !== 0) {
                    for (const de of data) {
                        if (de.StaClave !== 5 && de.StaClave !==6 ) {
                            this.demandas.push(de);
                        }
                    }
                    this.size = this.demandas.length;
                } else {
                    this.toastr.error('No hay Demandas Registradas');
                }
            },
            err => {
                console.log(err);
                this.toastr.error('Error en el servidor');
            });
    }


    ngOnInit() {}

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        sessionStorage.removeItem('isLoggedin');
        sessionStorage.clear();
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
