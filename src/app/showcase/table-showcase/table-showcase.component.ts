import { Component, inject, OnInit } from '@angular/core';
import { DdrTableCol, DdrAction, DdrSelectItem, DdrTableItem, DdrTableComponent, DdrDropdownComponent, DdrToastService, DdrInputComponent } from 'ddr-ng';
import { Person } from './person';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-table-showcase',
    templateUrl: './table-showcase.component.html',
    styleUrls: ['./table-showcase.component.scss'],
    imports: [
        BaseShowcaseComponent,
        DdrTableComponent,
        DdrDropdownComponent,
        FormsModule,
        DdrInputComponent
    ],
    providers: [
      DdrToastService
    ]
})
export class TableShowcaseComponent implements OnInit {

  public toastService: DdrToastService = inject(DdrToastService);

  cols: DdrTableCol[] = [
    { 
      label: 'Nombre', 
      property: 'name', 
      tooltip: 'Nombre de la persona' 
    },
    { 
      label: 'Apellidos', 
      property: 'surname', 
      tooltip: 'Apellidos de la persona' 
    },
    { 
      label: 'Edad', 
      property: 'age', 
      tooltip: 'Edad de la persona' 
    },
    { 
      label: 'Peso', 
      property: 'weight', 
      tooltip: 'Peso de la persona' 
    }
  ];
  colsEx9: DdrTableCol[] = [
    { 
      label: 'Nombre', 
      property: 'name', 
      tooltip: 'Nombre de la persona', 
      canSort: true 
    },
    { 
      label: 'Apellidos', 
      property: 'surname', 
      tooltip: 'Apellidos de la persona', 
      canSort: true 
    },
    { 
      label: 'Edad', 
      property: 'age', 
      tooltip: 'Edad de la persona', 
      canSort: true 
    },
    { 
      label: 'Peso', 
      property: 'weight', 
      tooltip: 'Peso de la persona', 
      canSort: true 
    }
  ];
  itemsEx1: DdrTableItem<Person>[] = [];
  itemsEx2: DdrTableItem<Person>[] = [];
  itemsEx3: DdrTableItem<Person>[] = [];
  itemsEx4: DdrTableItem<Person>[] = [];
  itemsEx5: DdrTableItem<Person>[] = [];
  itemsEx8: DdrTableItem<Person>[] = [];
  itemsEx9: DdrTableItem<Person>[] = [];
  itemsEx10: DdrTableItem<Person>[] = [];
  itemsEx11: DdrTableItem<Person>[] = [];

  actions: DdrAction<Person>[] = [
    { 
      label: 'Save', 
      value: 'SAVE', 
      icon: 'bi bi-floppy' 
    },
    { 
      label: 'Update', 
      value: 'UPDATE', 
      icon: 'bi bi-arrow-clockwise' 
    },
    { 
      label: 'Delete', 
      value: 'DELETE', 
      icon: 'bi bi-trash' 
    }
  ];

  ageValues: DdrSelectItem<number>[] = [];

  ngOnInit() {

    this.ageValues = [];
    for (let index = 18; index < 50; index++) {
      this.ageValues.push({
        label: index + '',
        value: index
      })
    }

    const items = [
      { name: 'Fernando', surname: 'Ureña', age: 33, weight: 79 },
      { name: 'Manuel', surname: 'Gomez', age: 30, weight: 70 },
      { name: 'Fernando', surname: 'Ureña', age: 33, weight: 79 },
      { name: 'Manuel', surname: 'Gomez', age: 30, weight: 70 },
      { name: 'Fernando', surname: 'Ureña', age: 33, weight: 79 },
      { name: 'Manuel', surname: 'Gomez', age: 30, weight: 70 },
      { name: 'Fernando', surname: 'Ureña', age: 33, weight: 79 },
      { name: 'Manuel', surname: 'Gomez', age: 30, weight: 70 },
      { name: 'Fernando', surname: 'Ureña', age: 33, weight: 79 },
      { name: 'Manuel', surname: 'Gomez', age: 30, weight: 70 },
      { name: 'Fernando', surname: 'Ureña', age: 33, weight: 79 },
      { name: 'Manuel', surname: 'Gomez', age: 30, weight: 70 },
      { name: 'Fernando', surname: 'Ureña', age: 33, weight: 79 },
      { name: 'Manuel', surname: 'Gomez', age: 30, weight: 70 },
      { name: 'Fernando', surname: 'Ureña', age: 33, weight: 79 },
      { name: 'Manuel', surname: 'Gomez', age: 30, weight: 70 },
      { name: 'Fernando', surname: 'Ureña', age: 33, weight: 79 },
      { name: 'Manuel', surname: 'Gomez', age: 30, weight: 70 },
      { name: 'Fernando', surname: 'Ureña', age: 33, weight: 79 },
      { name: 'Manuel', surname: 'Gomez', age: 30, weight: 70 },
    ];

    this.itemsEx1 = [];
    items.forEach(item => {
      this.itemsEx1.push({
        actions: this.actions,
        item
      });
    });

    this.itemsEx2 = [...this.itemsEx1];
    this.itemsEx3 = [...this.itemsEx1];
    this.itemsEx4 = [...this.itemsEx1];
    this.itemsEx5 = [...this.itemsEx1];
    this.itemsEx8 = [...this.itemsEx1];
    this.itemsEx9 = [...this.itemsEx1];
    this.itemsEx10 = [...this.itemsEx1];
    this.itemsEx11 = [...this.itemsEx1];
  }

  selectItemEx1($event: DdrTableItem<Person>) {
    this.toastService.addSuccessMessage("Item seleccionado ejemplo 1", JSON.stringify($event))
  }

  selectItemEx2($event: DdrTableItem<Person>) {
    this.toastService.addSuccessMessage("Item seleccionado ejemplo 2", JSON.stringify($event))
  }

  selectItemEx3($event: DdrTableItem<Person>) {
    this.toastService.addSuccessMessage("Item seleccionado ejemplo 3", JSON.stringify($event))
  }

  selectMultipleItemEx3($event: Person[]) {
    this.toastService.addSuccessMessage("Multiples items seleccionados ejemplo 3", JSON.stringify($event))
  }

  selectItemEx4($event: DdrTableItem<Person>) {
    this.toastService.addSuccessMessage("Item seleccionado ejemplo 4", JSON.stringify($event))
  }

  selectMultipleItemEx4($event: Person[]) {
    this.toastService.addSuccessMessage("Multiples items seleccionados ejemplo 4", JSON.stringify($event))
  }

  selectItemEx5($event: DdrTableItem<Person>) {
    this.toastService.addSuccessMessage("Item seleccionado ejemplo 5", JSON.stringify($event))
  }

  selectMultipleItemEx5($event: Person[]) {
    this.toastService.addSuccessMessage("Multiples items seleccionados ejemplo 5", JSON.stringify($event))
  }

  selectItemEx8($event: DdrTableItem<Person>) {
    this.toastService.addSuccessMessage("Item seleccionado ejemplo 8", JSON.stringify($event))
  }

  selectItemEx9($event: DdrTableItem<Person>) {
    this.toastService.addSuccessMessage("Item seleccionado ejemplo 9", JSON.stringify($event))
  }

  sortItemsEx9($event: DdrTableCol) {
    this.toastService.addSuccessMessage("Items ordenados", JSON.stringify($event));

  }

  selectItemEx10($event: DdrTableItem<Person>) {
    this.toastService.addSuccessMessage("Item seleccionado ejemplo 10", JSON.stringify($event))
  }

  selectItemEx11($event: DdrTableItem<Person>) {
    this.toastService.addSuccessMessage("Item seleccionado ejemplo 11", JSON.stringify($event))
  }

  selectAction($event: DdrAction<Person>) {
    this.toastService.addSuccessMessage("Acción seleccionada", JSON.stringify($event))
  }

  createNewItem11($event: DdrTableItem<Person>){
    $event.actions = this.actions;
    this.itemsEx11.push($event);
    this.toastService.addSuccessMessage("Item añadido en el ejemplo 11", JSON.stringify($event))
  }

  onChangePage($event: number) {
    if (!$event) {
      return;
    }

    this.toastService.addSuccessMessage("Página cambiada", $event.toString());
  }

  onChangeTotalItemsPerPage($event: number) {
    if (!$event) {
      return;
    }

    this.toastService.addSuccessMessage("Total de elemntos por página cambiado", $event.toString());
  }
}
