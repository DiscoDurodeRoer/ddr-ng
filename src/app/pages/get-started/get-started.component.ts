import { AfterViewInit, Component, inject } from '@angular/core';
import { DdrButtonComponent, DdrCardComponent, DdrClipboardDirective, DdrToastService, DdrTranslatePipe, DdrTranslateService } from 'ddr-ng';
declare var Prism: any;

@Component({
    selector: 'app-get-started',
    templateUrl: './get-started.component.html',
    styleUrls: ['./get-started.component.scss'],
    imports: [
        DdrCardComponent,
        DdrButtonComponent,
        DdrClipboardDirective,
        DdrTranslatePipe
    ],
    providers: [
        DdrToastService
    ]
})
export class GetStartedComponent implements AfterViewInit {

    private ddrToastService: DdrToastService = inject(DdrToastService);
    private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

    public stylesEx1 = `
              "node_modules/ddr-ng/resources/themes/ddr-blue.scss",
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "node_modules/bootstrap-icons/font/bootstrap-icons.css",
              "src/styles.scss"`;

    public stylesEx2 = `
              "node_modules/ddr-ng/resources/themes/ddr-blue.scss",
              "node_modules/ddr-ng/resources/themes/ddr-dark.scss",
              "node_modules/ddr-ng/resources/themes/ddr-purple.scss",
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "node_modules/bootstrap-icons/font/bootstrap-icons.css",
              "src/styles.scss"`;

    public stylesEx3: string = `class="ddr-blue"`

    ngAfterViewInit(): void {
        setTimeout(() => { Prism.highlightAll(); });
    }

    copyText() {
        this.ddrToastService.addSuccessMessage(
            this.ddrTranslateService.getTranslate('success'),
            this.ddrTranslateService.getTranslate('get.started.copy.text')
        )
    }

}
