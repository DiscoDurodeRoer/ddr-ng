import { Component, inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/internal/operators/filter';
import { map } from 'rxjs/internal/operators/map';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    encapsulation: ViewEncapsulation.None,
    imports: [
        RouterOutlet,
        MenuComponent,
        HeaderComponent
    ]
})
export class AppComponent {

    private router: Router = inject(Router);
    private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    private titleService: Title = inject(Title);

    constructor() {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => {
                let child = this.activatedRoute.firstChild;
                while (child) {
                    if (child.firstChild) {
                        child = child.firstChild;
                    } else if (child.snapshot.data && child.snapshot.data['title']) {
                        return child.snapshot.data['title'];
                    } else {
                        return null;
                    }
                }
                return null;
            })
        ).subscribe((data: any) => {
            this.titleService.setTitle(`${data} | DDR-NG`)
            setTimeout(() => {
                const element = document.getElementById("content");
                if (element) {
                    element.scrollTo({ top: 0 });
                }
            });
        });
    }

}
