import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SimpleChange } from '@angular/core';
import { expect, describe, it, vi, beforeEach } from 'vitest';
import { DdrButtonSplitComponent } from 'ddr-ng/components/button-split';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { DdrConstantsService } from 'ddr-ng/constants';
import { DdrTableComponent } from './ddr-table.component';
import { DdrCheckboxBinaryComponent } from 'ddr-ng/components/checkbox-binary';
import { DdrNestedPropertyPipe } from 'ddr-ng/pipes/nested-property';
import { DdrTableItem } from './bean/ddr-table-item';
import { DdrAction } from 'ddr-ng/models';
import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';

describe('DdrTableComponent', () => {
    let fixture: ComponentFixture<DdrTableComponent<{
        rowNumber: number;
    }>>;
    let component: DdrTableComponent<{
        rowNumber: number;
    }>;
    let ddrConstantsService: DdrConstantsService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                CommonModule,
                NgxPaginationModule,
                DdrDropdownComponent,
                DdrCheckboxBinaryComponent,
                DdrButtonSplitComponent,
                DdrTranslatePipe,
                DdrTableComponent,
                DdrNestedPropertyPipe
            ],
            providers: [
                provideAnimations()
            ]
        }).compileComponents();

        ddrConstantsService = TestBed.inject(DdrConstantsService);
        fixture = TestBed.createComponent(DdrTableComponent<{
            rowNumber: number;
        }>);
        component = fixture.componentInstance;
        fixture.componentRef.setInput('cols', [
            { label: '', property: 'rowNumber' },
        ]);
        const actions = [
            { label: '', value: 'SAVE' }
        ];
        const items = [
            { rowNumber: 1 },
            { rowNumber: 2 },
            { rowNumber: 3 },
            { rowNumber: 4 },
            { rowNumber: 5 },
            { rowNumber: 6 },
            { rowNumber: 7 },
            { rowNumber: 8 },
            { rowNumber: 9 },
            { rowNumber: 10 },
            { rowNumber: 11 },
            { rowNumber: 12 },
            { rowNumber: 13 },
            { rowNumber: 14 },
            { rowNumber: 15 },
            { rowNumber: 16 },
            { rowNumber: 17 },
            { rowNumber: 18 },
            { rowNumber: 19 },
            { rowNumber: 20 },
        ];
        const itemsEx: DdrTableItem<{
            rowNumber: number;
        }>[] = [];
        items.forEach(item => {
            itemsEx.push({
                actions,
                item
            });
        });
        fixture.componentRef.setInput('items', itemsEx);
    });

    it('should select element', () => {
        fixture.detectChanges();
        
        let firstRow = fixture.debugElement.query(By.css('tbody .ddr-table__table--body-row:first-child'));
        vi.spyOn(component.selectItem, "emit");
        firstRow.triggerEventHandler('click', {
            target: firstRow.nativeElement
        });
        fixture.detectChanges();
        const returnItem: DdrTableItem<{
            rowNumber: number;
        }> = {
            item: { rowNumber: 1 },
            actions: [
                { label: '', value: 'SAVE' }
            ]
        };
        expect(component.selectItem.emit, 'El evento selectItem debe lanzarse').toHaveBeenCalledWith({ ...returnItem });
    });

    it('should not select element', () => {
        fixture.componentRef.setInput('canSelectItems', false);
        fixture.detectChanges();
        
        let firstRow = fixture.debugElement.query(By.css('tbody .ddr-table__table--body-row:first-child'));
        vi.spyOn(component.selectItem, "emit");
        firstRow.triggerEventHandler('click', {
            target: firstRow.nativeElement
        });
        fixture.detectChanges();

        expect(component.selectItem.emit, 'El evento selectItem debe lanzarse').not.toHaveBeenCalled();
    });

    it('should select an action', () => {
        fixture.componentRef.setInput('showActions', true);
        fixture.detectChanges();
        
        let splitButton = fixture.debugElement.query(By.css('tbody .ddr-table__table--body-row:first-child .ddr-table__table--body-row--actions ddr-button-split'));
        let splitButtonComponent: DdrButtonSplitComponent<string> = splitButton.componentInstance;
        vi.spyOn(component.selectAction, "emit");
        splitButtonComponent.sendAction({ label: '', value: 'SAVE' });
        fixture.detectChanges();
        const returnedAction: DdrAction<{
            rowNumber: number;
        }> = {
            item: { rowNumber: 1 },
            index: 0,
            value: 'SAVE',
            label: ''
        };
        expect(component.selectAction.emit, 'El evento selectAction debe lanzarse').toHaveBeenCalledWith({ ...returnedAction });
    });

    it('shouldn`t select an action', () => {
        fixture.componentRef.setInput('showActions', false);
        fixture.detectChanges();
        
        let splitButton = fixture.debugElement.query(By.css('tbody .ddr-table__table--body-row:first-child .ddr-table__table--body-row--actions ddr-button-split'));
        expect(splitButton).toBeNull();
    });

    it('should has a specific numbers of columns', () => {
        fixture.detectChanges();
        
        let columns = fixture.debugElement.queryAll(By.css('.ddr-table__table--header-row th'));
        expect(columns.length).toBe(1);

        fixture.componentRef.setInput('showActions', true);
        component.ngOnChanges({
            showActions: new SimpleChange(false, true, false)
        });
        fixture.detectChanges();

        columns = fixture.debugElement.queryAll(By.css('.ddr-table__table--header-row th'));
        expect(columns.length).toBe(2);

        fixture.componentRef.setInput('multiple', true);
        component.ngOnChanges({
            multiple: new SimpleChange(false, true, false)
        });
        fixture.detectChanges();

        columns = fixture.debugElement.queryAll(By.css('.ddr-table__table--header-row th'));
        expect(columns.length).toBe(3);
    });

    it('should change number rows', () => {
        fixture.detectChanges();
        

        const dropdownComponent = fixture.debugElement.query(By.directive(DdrDropdownComponent)).componentInstance;

        let rows = fixture.debugElement.queryAll(By.css('tr.ddr-table__table--body-row'));
        expect(rows.length).toBe(10);

        dropdownComponent.selectItem.emit({ label: '5', value: 5 });
        fixture.detectChanges();

        rows = fixture.debugElement.queryAll(By.css('tr.ddr-table__table--body-row'));
        expect(rows.length).toBe(5);

        dropdownComponent.selectItem.emit({ label: '20', value: 20 });
        fixture.detectChanges();

        rows = fixture.debugElement.queryAll(By.css('tr.ddr-table__table--body-row'));
        expect(rows.length).toBe(20);
    });

    it('should select multiple items', () => {
        fixture.componentRef.setInput('multiple', true);
        fixture.detectChanges();
        

        vi.spyOn(component.selectMultipleItem, "emit");

        let checkbox = fixture.debugElement.query(By.css('tr.ddr-table__table--body-row:nth-child(1) td.ddr-table__table--body-row--checkbox ddr-checkbox-binary'));
        let checkboxComponent: DdrCheckboxBinaryComponent = checkbox.componentInstance;

        checkboxComponent.onClick([null]);
        fixture.detectChanges();

        expect(component.selectMultipleItem.emit, 'Debe lanzar el evento selectMultipleItem').toHaveBeenCalledWith([{ rowNumber: 1 }]);
        checkbox = fixture.debugElement.query(By.css('tr.ddr-table__table--body-row:nth-child(5) td.ddr-table__table--body-row--checkbox ddr-checkbox-binary'));
        checkboxComponent = checkbox.componentInstance;

        checkboxComponent.onClick([null]);
        fixture.detectChanges();

        expect(component.selectMultipleItem.emit, 'Debe lanzar el evento selectMultipleItem').toHaveBeenCalledWith([{ rowNumber: 1 }, { rowNumber: 5 }]);
        checkbox = fixture.debugElement.query(By.css('tr.ddr-table__table--body-row:nth-child(7) td.ddr-table__table--body-row--checkbox ddr-checkbox-binary'));
        checkboxComponent = checkbox.componentInstance;

        checkboxComponent.onClick([null]);
        fixture.detectChanges();

        expect(component.selectMultipleItem.emit, 'Debe lanzar el evento selectMultipleItem').toHaveBeenCalledWith([{ rowNumber: 1 }, { rowNumber: 5 }, { rowNumber: 7 }]);

    });

    it('should select all items', () => {
        fixture.componentRef.setInput('multiple', true);
        fixture.detectChanges();
        

        vi.spyOn(component.selectMultipleItem, "emit");

        let checkbox = fixture.debugElement.query(By.css('.ddr-table__table--header-row--checkbox ddr-checkbox-binary'));
        let checkboxComponent: DdrCheckboxBinaryComponent = checkbox.componentInstance;

        checkboxComponent.onClick([null]);
        fixture.detectChanges();

        expect(component.selectMultipleItem.emit, 'Debe lanzar el evento selectMultipleItem').toHaveBeenCalledWith([
            { rowNumber: 1 },
            { rowNumber: 2 },
            { rowNumber: 3 },
            { rowNumber: 4 },
            { rowNumber: 5 },
            { rowNumber: 6 },
            { rowNumber: 7 },
            { rowNumber: 8 },
            { rowNumber: 9 },
            { rowNumber: 10 },
            { rowNumber: 11 },
            { rowNumber: 12 },
            { rowNumber: 13 },
            { rowNumber: 14 },
            { rowNumber: 15 },
            { rowNumber: 16 },
            { rowNumber: 17 },
            { rowNumber: 18 },
            { rowNumber: 19 },
            { rowNumber: 20 },
        ]);

        checkboxComponent.onClick([]);
        fixture.detectChanges();

        expect(component.selectMultipleItem.emit, 'Debe lanzar el evento selectMultipleItem').toHaveBeenCalledWith([]);

    });

    it('should sort items', () => {
        fixture.componentRef.setInput('canSort', true);
        fixture.componentRef.setInput('cols', [
            { label: '', property: 'rowNumber', canSort: true },
        ]);
        fixture.detectChanges();
        

        vi.spyOn(component.sort, "emit");

        let iconSort = fixture.debugElement.query(By.css('.ddr-table__table--header-cell:nth-child(1) .ddr-table__table--header-cell--sort'));
        iconSort.triggerEventHandler("click");
        fixture.detectChanges();

        expect(component.sort.emit, 'Debe lanzar el evento sort').toHaveBeenCalledWith({ label: '', property: 'rowNumber', canSort: true, modeSort: ddrConstantsService.MODE_SORT.ASCENDING });

        iconSort.triggerEventHandler("click");
        fixture.detectChanges();

        expect(component.sort.emit, 'Debe lanzar el evento sort').toHaveBeenCalledWith({ label: '', property: 'rowNumber', canSort: true, modeSort: ddrConstantsService.MODE_SORT.DESCENDING });

        iconSort.triggerEventHandler("click");
        fixture.detectChanges();

        expect(component.sort.emit, 'Debe lanzar el evento sort').toHaveBeenCalledWith({ label: '', property: 'rowNumber', canSort: true, modeSort: ddrConstantsService.MODE_SORT.NO_SORT });

    });

    it('should sort items (initial status)', () => {
        fixture.componentRef.setInput('canSort', true);
        fixture.componentRef.setInput('cols', [
            { label: '', property: 'rowNumber', canSort: true, modeSort: ddrConstantsService.MODE_SORT.ASCENDING },
        ]);
        fixture.detectChanges();
        

        vi.spyOn(component.sort, "emit");

        let iconSort = fixture.debugElement.query(By.css('.ddr-table__table--header-cell:nth-child(1) .ddr-table__table--header-cell--sort'));
        iconSort.triggerEventHandler("click");
        fixture.detectChanges();

        expect(component.sort.emit, 'Debe lanzar el evento sort').toHaveBeenCalledWith({ label: '', property: 'rowNumber', canSort: true, modeSort: ddrConstantsService.MODE_SORT.DESCENDING });

        iconSort.triggerEventHandler("click");
        fixture.detectChanges();

        expect(component.sort.emit, 'Debe lanzar el evento sort').toHaveBeenCalledWith({ label: '', property: 'rowNumber', canSort: true, modeSort: ddrConstantsService.MODE_SORT.NO_SORT });

        iconSort.triggerEventHandler("click");
        fixture.detectChanges();

        expect(component.sort.emit, 'Debe lanzar el evento sort').toHaveBeenCalledWith({ label: '', property: 'rowNumber', canSort: true, modeSort: ddrConstantsService.MODE_SORT.ASCENDING });
    });

});
