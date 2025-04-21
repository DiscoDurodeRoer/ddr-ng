import { Component, inject } from '@angular/core';
import { DdrAction, DdrToastService, DdrWidgetComponent, DdrButtonComponent, DdrSkeletonMode  } from '@ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'app-widget-showcase',
  templateUrl: './widget-showcase.component.html',
  styleUrls: ['./widget-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrWidgetComponent,
    DdrButtonComponent
  ]
})
export class WidgetShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);

  public modeSkeleton: DdrSkeletonMode = 'graphic';
  public dataBar: any = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: '#42A5F5',
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'My Second dataset',
            backgroundColor: '#FFA726',
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
  };

  public load: boolean = true;

  public actions: DdrAction<string>[] = [
    { 
      label: 'Save', 
      value: 'SAVE', 
      item: 'save', 
      icon: 'bi bi-floppy'
    },
    { 
      label: 'Update', 
      value: 'UPDATE', 
      item: 'update', 
      icon: 'bi bi-arrow-clockwise'
    },
    { 
      label: 'Delete', 
      value: 'DELETE', 
      item: 'delete', 
      icon: 'bi bi-trash'
    }
  ];

  loadData(){
    this.load = false;
    setTimeout(() => {
      this.load = true;
    }, 5000);
  }

  selectAction($event: DdrAction<any>){
    this.ddrToastService.addInfoMessage('Accion seleccionada', JSON.stringify($event));
  }

}
