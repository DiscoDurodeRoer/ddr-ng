import { Component, inject, OnInit } from '@angular/core';
import { DdrSpinnerService, DdrToastService, DdrLoadIframeDirective } from '@ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'app-load-iframe-showcase',
  templateUrl: './load-iframe-showcase.component.html',
  styleUrls: ['./load-iframe-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrLoadIframeDirective
  ]
})
export class LoadIframeShowcaseComponent implements OnInit {

  private readonly ddrSpinner: DdrSpinnerService = inject(DdrSpinnerService); 
  private readonly ddrToastService: DdrToastService = inject(DdrToastService);

  ngOnInit(): void {
    this.ddrSpinner.showSpinner();
  }

  load() {
    this.ddrToastService.addSuccessMessage("Exito", "Iframe cargado");
    console.log("Load iframe");
    this.ddrSpinner.hideSpinner();
  }

}
