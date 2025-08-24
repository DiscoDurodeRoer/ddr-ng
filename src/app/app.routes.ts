import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'get-started',
        loadComponent: () => import('./pages/get-started/get-started.component').then(c => c.GetStartedComponent),
        data: {
            title: 'Get Started',
            type: 'page'
        }
    },
    {
        path: 'changelog',
        loadComponent: () => import('./components/changelog/changelog.component').then(c => c.ChangelogComponent),
        data: {
            title: 'Changelog',
            type: 'page'
        }
    },
    {
        path: 'themes',
        loadComponent: () => import('./pages/themes/themes.component').then(c => c.ThemesComponent),
        data: {
            title: 'Themes',
            type: 'page'
        }
    },
    {
        path: 'translate',
        loadComponent: () => import('./pages/translate/translate.component').then(c => c.TranslateComponent),
        data: {
            title: 'Translate',
            type: 'page'
        }
    },
    {
        path: 'ddr-button',
        loadComponent: () => import('./showcase/button-showcase/button-showcase.component').then(c => c.ButtonShowcaseComponent),
        data: {
            title: 'Button',
            type: 'component'
        }
    },
    {
        path: 'ddr-translate-pipe',
        loadComponent: () => import('./showcase/translate-pipe-showcase/translate-pipe-showcase.component').then(c => c.TranslatePipeShowcaseComponent),
        data: {
            title: 'Translate pipe',
            type: 'pipe'
        }
    },
    {
        path: 'ddr-translate-service',
        loadComponent: () => import('./showcase/translate-showcase/translate-showcase.component').then(c => c.TranslateShowcaseComponent),
        data: {
            title: 'Translate service',
            type: 'service'
        }
    },
    {
        path: 'ddr-spinner-service',
        loadComponent: () => import('./showcase/spinner-showcase/spinner-showcase.component').then(m => m.SpinnerShowcaseComponent),
        data: {
            title: 'Spinner service',
            type: 'service'
        }
    },
    {
        path: 'ddr-detail',
        loadComponent: () => import('./showcase/detail-showcase/detail-showcase.component').then(c => c.ShowcaseDdrDetailComponent),
        data: {
            title: 'Detail',
            type: 'component'
        }
    },
    {
        path: 'ddr-click-outside',
        loadComponent: () => import('./showcase/click-outside-showcase/click-outside-showcase.component').then(c => c.ClickOutsideShowcaseComponent),
        data: {
            title: 'Click outside',
            type: 'directive'
        }
    },
    {
        path: 'ddr-toast-service',
        loadComponent: () => import('./showcase/toast-showcase/toast-showcase.component').then(c => c.ToastShowcaseComponent),
        data: {
            title: 'Toast service',
            type: 'service'
        }
    },
    {
        path: 'ddr-dropdown',
        loadComponent: () => import('./showcase/dropdown-showcase/dropdown-showcase.component').then(c => c.DropdownShowcaseComponent),
        data: {
            title: 'Dropdown',
            type: 'component'
        }
    },
    {
        path: 'ddr-dropdown-multiple',
        loadComponent: () => import('./showcase/dropdown-multiple-showcase/dropdown-multiple-showcase.component').then(c => c.DropdownMultipleShowcaseComponent),
        data: {
            title: 'Dropdown multiple',
            type: 'component'
        }
    },
    {
        path: 'ddr-login',
        loadComponent: () => import('./showcase/login-showcase/login-showcase.component').then(c => c.LoginShowcaseComponent),
        data: {
            title: 'Login',
            type: 'component'
        }
    },
    {
        path: 'ddr-modal',
        loadComponent: () => import('./showcase/modal-showcase/modal-showcase.component').then(c => c.ModalShowcaseComponent),
        data: {
            title: 'Modal',
            type: 'component'
        }
    },
    {
        path: 'ddr-input',
        loadComponent: () => import('./showcase/input-showcase/input-showcase.component').then(c => c.InputShowcaseComponent),
        data: {
            title: 'Input',
            type: 'component'
        }
    },
    {
        path: 'ddr-textarea',
        loadComponent: () => import('./showcase/textarea-showcase/textarea-showcase.component').then(c => c.TextareaShowcaseComponent),
        data: {
            title: 'Textarea',
            type: 'component'
        }
    },
    {
        path: 'ddr-input-group',
        loadComponent: () => import('./showcase/input-group-showcase/input-group-showcase.component').then(c => c.InputGroupShowcaseComponent),
        data: {
            title: 'Input group',
            type: 'component'
        }
    },
    {
        path: 'ddr-card',
        loadComponent: () => import('./showcase/card-showcase/card-showcase.component').then(c => c.CardShowcaseComponent),
        data: {
            title: 'Card',
            type: 'component'
        }
    },
    {
        path: 'ddr-table',
        loadComponent: () => import('./showcase/table-showcase/table-showcase.component').then(c => c.TableShowcaseComponent),
        data: {
            title: 'Table',
            type: 'component'
        }
    },
    {
        path: 'ddr-checkbox',
        loadComponent: () => import('./showcase/checkbox-showcase/checkbox-showcase.component').then(c => c.CheckboxShowcaseComponent),
        data: {
            title: 'Checkbox',
            type: 'component'
        }
    },
    {
        path: 'ddr-button-split',
        loadComponent: () => import('./showcase/button-split-showcase/button-split-showcase.component').then(c => c.ButtonSplitShowcaseComponent),
        data: {
            title: 'Button split',
            type: 'component'
        }
    },
    {
        path: 'ddr-toggle',
        loadComponent: () => import('./showcase/toggle-showcase/toggle-showcase.component').then(c => c.ToggleShowcaseComponent),
        data: {
            title: 'Toggle',
            type: 'component'
        }
    },
    {
        path: 'ddr-badge-pill',
        loadComponent: () => import('./showcase/badge-showcase/badge-showcase.component').then(c => c.BadgeShowcaseComponent),
        data: {
            title: 'Badge pill',
            type: 'component'
        }
    },
    {
        path: 'ddr-badge-notification',
        loadComponent: () => import('./showcase/badge-notification-showcase/badge-notification-showcase.component').then(c => c.BadgeNotificationShowcaseComponent),
        data: {
            title: 'Badge notification',
            type: 'directive'
        }
    },
    {
        path: 'ddr-progress-bar',
        loadComponent: () => import('./showcase/progress-bar-showcase/progress-bar-showcase.component').then(c => c.ProgressBarShowcaseComponent),
        data: {
            title: 'Progressbar',
            type: 'component'
        }
    },
    {
        path: 'ddr-button-multiple',
        loadComponent: () => import('./showcase/button-multiple-showcase/button-multiple-showcase.component').then(c => c.ButtonMultipleShowcaseComponent),
        data: {
            title: 'Button multiple',
            type: 'component'
        }
    },
    {
        path: 'ddr-drag-and-drop',
        loadComponent: () => import('./showcase/drag-and-drop-showcase/drag-and-drop-showcase.component').then(c => c.DragAndDropShowcaseComponent),
        data: {
            title: 'Drag and drop',
            type: 'directive'
        }
    },
    {
        path: 'ddr-load-iframe',
        loadComponent: () => import('./showcase/load-iframe-showcase/load-iframe-showcase.component').then(c => c.LoadIframeShowcaseComponent),
        data: {
            title: 'Load iframe',
            type: 'directive'
        }
    },
    {
        path: 'ddr-skeleton',
        loadComponent: () => import('./showcase/skeleton-showcase/skeleton-showcase.component').then(c => c.SkeletonShowcaseComponent),
        data: {
            title: 'Skeleton',
            type: 'directive'
        }
    },
    {
        path: 'ddr-loop-number',
        loadComponent: () => import('./showcase/loop-number-showcase/loop-number-showcase.component').then(c => c.LoopNumberShowcaseComponent),
        data: {
            title: 'Loop number',
            type: 'pipe'
        }
    },
    {
        path: 'ddr-tooltip',
        loadComponent: () => import('./showcase/tooltip-showcase/tooltip-showcase.component').then(c => c.TooltipShowcaseComponent),
        data: {
            title: 'Tooltip',
            type: 'directive'
        }
    },
    {
        path: 'ddr-clipboard',
        loadComponent: () => import('./showcase/clipboard-showcase/clipboard-showcase.component').then(c => c.ClipboardShowcaseComponent),
        data: {
            title: 'Clipboard',
            type: 'directive'
        }
    },
    {
        path: 'ddr-chip',
        loadComponent: () => import('./showcase/chip-showcase/chip-showcase.component').then(c => c.ChipShowcaseComponent),
        data: {
            title: 'Chip',
            type: 'component'
        }
    },
    {
        path: 'ddr-accordion',
        loadComponent: () => import('./showcase/accordion-showcase/accordion-showcase.component').then(c => c.AccordionShowcaseComponent),
        data: {
            title: 'Accordion',
            type: 'component'
        }
    },
    {
        path: 'ddr-tabs',
        loadComponent: () => import('./showcase/tabs-showcase/tabs-showcase.component').then(c => c.TabsShowcaseComponent),
        data: {
            title: 'Tabs',
            type: 'component'
        }
    },
    {
        path: 'ddr-tree',
        loadComponent: () => import('./showcase/tree-showcase/tree-showcase.component').then(c => c.TreeShowcaseComponent),
        data: {
            title: 'Tree',
            type: 'component'
        }
    },
    {
        path: 'ddr-steps',
        loadComponent: () => import('./showcase/steps-showcase/steps-showcase.component').then(c => c.StepsShowcaseComponent),
        data: {
            title: 'Steps',
            type: 'component'
        }
    },
    {
        path: 'ddr-radio',
        loadComponent: () => import('./showcase/radio-showcase/radio-showcase.component').then(c => c.RadioShowcaseComponent),
        data: {
            title: 'Radio',
            type: 'component'
        }
    },
    {
        path: 'ddr-safe',
        loadComponent: () => import('./showcase/safe-showcase/safe-showcase.component').then(c => c.SafeShowcaseComponent),
        data: {
            title: 'Safe',
            type: 'pipe'
        }
    },
    {
        path: 'ddr-no-data',
        loadComponent: () => import('./showcase/no-data-showcase/no-data-showcase.component').then(c => c.NoDataShowcaseComponent),
        data: {
            title: 'No data',
            type: 'component'
        }
    },
    {
        path: 'ddr-input-password',
        loadComponent: () => import('./showcase/input-password-showcase/input-password-showcase.component').then(c => c.InputPasswordShowcaseComponent),
        data: {
            title: 'Input password',
            type: 'component'
        }
    },
    {
        path: 'ddr-input-file',
        loadComponent: () => import('./showcase/input-file-showcase/input-file-showcase.component').then(c => c.InputFileShowcaseComponent),
        data: {
            title: 'Input file',
            type: 'component'
        }
    },
    {
        path: 'ddr-checkbox-binary',
        loadComponent: () => import('./showcase/checkbox-binary-showcase/checkbox-binary-showcase.component').then(c => c.CheckboxBinaryShowcaseComponent),
        data: {
            title: 'Checkbox binary',
            type: 'component'
        }
    },
    {
        path: 'ddr-nested-property',
        loadComponent: () => import('./showcase/nested-property-showcase/nested-property-showcase.component').then(c => c.NestedPropertyShowcaseComponent),
        data: {
            title: 'Nested property',
            type: 'pipe'
        }
    },
    {
        path: 'ddr-spinner-block',
        loadComponent: () => import('./showcase/spinner-block-showcase/spinner-block-showcase.component').then(c => c.SpinnerBlockComponent),
        data: {
            title: 'Spinner block',
            type: 'directive'
        }
    },
    { path: '**', pathMatch: 'full', redirectTo: 'get-started' },
];