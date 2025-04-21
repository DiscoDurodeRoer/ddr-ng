import { Component, inject } from '@angular/core';
import { DdrTreeNode, DdrAction, DdrToastService, DdrTreeviewComponent, DdrToggleComponent } from '@ddr-ng';
import { TreeviewData } from './treeview-data';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'app-treeview-showcase',
  templateUrl: './treeview-showcase.component.html',
  styleUrls: ['./treeview-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrTreeviewComponent,
    DdrToggleComponent
  ]
})
export class TreeviewShowcaseComponent {

  private toast: DdrToastService = inject(DdrToastService);

  nodes: DdrTreeNode<TreeviewData>[] = [
    {
      name: 'E1',
      icon: 'bi bi-bell',
      data: {
        property1: 'E1',
        property2: 'E1'
      },
      actions: [
        {
          label: 'Editar',
          icon: 'bi bi-pencil',
          value: 'ACTION_1'
        },
        {
          label: 'Borrar',
          icon: 'bi bi-trash3',
          value: 'ACTION_2'
        }
      ],
      children: [
        {
          name: 'E1.1',
          icon: 'bi bi-bell',
          data: {
            property1: 'E1.1',
            property2: 'E1.1',
          },
          actions: [
            {
              label: 'Editar',
              icon: 'bi bi-pencil',
              value: 'ACTION_1'
            },
            {
              label: 'Borrar',
              icon: 'bi bi-trash3',
              value: 'ACTION_2'
            }
          ],
          children: [
            {
              name: 'E1.1.1',
              icon: 'bi bi-bell',
              data: {
                property1: 'E1.1.1',
                property2: 'E1.1.1',
              },
              actions: [
                {
                  label: 'Editar',
                  icon: 'bi bi-pencil',
                  value: 'ACTION_1'
                },
                {
                  label: 'Borrar',
                  icon: 'bi bi-trash3',
                  value: 'ACTION_2'
                }
              ],
            },
            {
              name: 'E1.1.2',
              icon: 'bi bi-bell',
              data: {
                property1: 'E1.1.2',
                property2: 'E1.1.2',
              },
              actions: [
                {
                  label: 'Editar',
                  icon: 'bi bi-pencil',
                  value: 'ACTION_1'
                },
                {
                  label: 'Borrar',
                  icon: 'bi bi-trash3',
                  value: 'ACTION_2'
                }
              ],
            }
          ]
        },
        {
          name: 'E1.2',
          icon: 'bi bi-bell',
          data: {
            property1: 'E1.1.2',
            property2: 'E1.1.2',
          },
          actions: [
            {
              label: 'Editar',
              icon: 'bi bi-pencil',
              value: 'ACTION_1'
            },
            {
              label: 'Borrar',
              icon: 'bi bi-trash3',
              value: 'ACTION_2'
            }
          ],
        },
        {
          name: 'E1.3',
          icon: 'bi bi-bell',
          data: {
            property1: 'E1.3',
            property2: 'E1.3',
          },
          actions: [
            {
              label: 'Editar',
              icon: 'bi bi-pencil',
              value: 'ACTION_1'
            },
            {
              label: 'Borrar',
              icon: 'bi bi-trash3',
              value: 'ACTION_2'
            }
          ],
        }
      ]
    },
    {
      name: 'E2',
      icon: 'bi bi-bell',
      data: {
        property1: 'E2',
        property2: 'E2',
      },
      actions: [
        {
          label: 'Editar',
          icon: 'bi bi-pencil',
          value: 'ACTION_1'
        },
        {
          label: 'Borrar',
          icon: 'bi bi-trash3',
          value: 'ACTION_2'
        }
      ],
      children: []
    },
    {
      name: 'E3',
      icon: 'bi bi-bell',
      data: {
        property1: 'E3',
        property2: 'E3',
      },
      actions: [
        {
          label: 'Editar',
          icon: 'bi bi-pencil',
          value: 'ACTION_1'
        },
        {
          label: 'Borrar',
          icon: 'bi bi-trash3',
          value: 'ACTION_2'
        }
      ],
      children: [
        {
          name: 'E3.1',
          icon: 'bi bi-bell',
          data: {
            property1: 'E3.1',
            property2: 'E3.1',
          },
          actions: [
            {
              label: 'Editar',
              icon: 'bi bi-pencil',
              value: 'ACTION_1'
            },
            {
              label: 'Borrar',
              icon: 'bi bi-trash3',
              value: 'ACTION_2'
            }
          ],
        },
        {
          name: 'E3.2',
          icon: 'bi bi-bell',
          data: {
            property1: 'E3.2',
            property2: 'E3.2',
          },
          actions: [
            {
              label: 'Editar',
              icon: 'bi bi-pencil',
              value: 'ACTION_1'
            },
            {
              label: 'Borrar',
              icon: 'bi bi-trash3',
              value: 'ACTION_2'
            }
          ],
        }
      ]
    }
  ];

  selectAction($event: DdrAction<TreeviewData>) {
    this.toast.addSuccessMessage('Elemento seleccionado', JSON.stringify($event));
  }

}
