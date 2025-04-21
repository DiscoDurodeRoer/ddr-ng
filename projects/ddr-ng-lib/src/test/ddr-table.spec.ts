import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { DdrTableItem } from '../components/ddr-table/bean/ddr-table-item';
import { DdrTableComponent } from '../components/ddr-table/ddr-table.component';
import { CommonModule } from '@angular/common';
import { DdrConstantsService } from '../services/ddr-constants.service';
import { DdrDropdownComponent } from '../components/ddr-dropdown/ddr-dropdown.component';
import { DdrCheckboxComponent } from '../components/ddr-checkbox/ddr-checkbox.component';
import { DdrSplitButtonComponent } from '../components/ddr-split-button/ddr-split-button.component';
import { DdrAction } from '../common/ddr-action.model';
import { DdrTranslatePipe } from '../pipes/ddr-translate.pipe';
import { HttpClientModule } from '@angular/common/http';


describe('DdrTableComponent', () => {
    let fixture: ComponentFixture<DdrTableComponent<{ rowNumber: number }>>;
    let component: DdrTableComponent<{ rowNumber: number }>;
    let ddrConstantsService: DdrConstantsService;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                NgxPaginationModule,
                DdrDropdownComponent,
                DdrCheckboxComponent,
                FormsModule,
                DdrSplitButtonComponent,
                DdrTranslatePipe,
                DdrTableComponent,
                HttpClientModule
            ]
        }).compileComponents()
            .then(() => {
                ddrConstantsService = TestBed.inject(DdrConstantsService)
                fixture = TestBed.createComponent(DdrTableComponent<{ rowNumber: number }>);
                component = fixture.componentInstance;
                component.cols = [
                    { label: '', property: 'rowNumber' },
                ];
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
                const itemsEx: DdrTableItem<{ rowNumber: number; }>[] = [];
                items.forEach(item => {
                    itemsEx.push({
                        actions,
                        item
                    });
                });
                component.items = itemsEx;
            });
    }));

    it('should select element', waitForAsync(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            let firstRow = fixture.debugElement.query(By.css('tbody .ddr-table__table--body-row:first-child'));
            spyOn(component.selectItem, "emit");
            firstRow.triggerEventHandler('click');
            fixture.detectChanges();
            const returnItem: DdrTableItem<{ rowNumber: number }> = {
                item: { rowNumber: 1 },
                actions: [
                    { label: '', value: 'SAVE' }
                ]
            }
            expect(component.selectItem.emit).withContext('El evento selectItem debe lanzarse').toHaveBeenCalledWith({ ...returnItem, selected: false });
        });
    }));

    it('should not select element', waitForAsync(() => {
        component.canSelectItems = false
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            let firstRow = fixture.debugElement.query(By.css('tbody .ddr-table__table--body-row:first-child'));
            spyOn(component.selectItem, "emit");
            firstRow.triggerEventHandler('click');
            fixture.detectChanges();

            expect(component.selectItem.emit).withContext('El evento selectItem debe lanzarse').not.toHaveBeenCalled();
        });
    }));

    it('should select an action', waitForAsync(() => {
        component.showActions = true;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            let splitButton = fixture.debugElement.query(By.css('tbody .ddr-table__table--body-row:first-child .ddr-table__table--body-row--actions ddr-split-button'));
            let splitButtonComponent: DdrSplitButtonComponent<string> = splitButton.componentInstance
            spyOn(component.selectAction, "emit");
            splitButtonComponent.sendAction(null, { label: '', value: 'SAVE' });
            fixture.detectChanges();
            const returnedAction: DdrAction<{ rowNumber: number }> = {
                item: { rowNumber: 1 },
                index: 0,
                value: 'SAVE',
                label: ''
            }
            expect(component.selectAction.emit).withContext('El evento selectAction debe lanzarse').toHaveBeenCalledWith({ ...returnedAction });
        });
    }));

    it('shouldn`t select an action', waitForAsync(() => {
        component.showActions = false;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            let splitButton = fixture.debugElement.query(By.css('tbody .ddr-table__table--body-row:first-child .ddr-table__table--body-row--actions ddr-split-button'));
            expect(splitButton).toBeNull();
        });
    }));

    it('should has a specific numbers of columns', waitForAsync(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            let columns = fixture.debugElement.queryAll(By.css('.ddr-table__table--header-row th'));
            expect(columns.length).toBe(1);

            component.showActions = true;
            fixture.detectChanges();

            columns = fixture.debugElement.queryAll(By.css('.ddr-table__table--header-row th'));
            expect(columns.length).toBe(2);

            component.multiple = true;
            fixture.detectChanges();

            columns = fixture.debugElement.queryAll(By.css('.ddr-table__table--header-row th'));
            expect(columns.length).toBe(3);
        });
    }));

    it('should change number rows', waitForAsync(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {

            let dropdown: DdrDropdownComponent<number> = fixture.debugElement.query(By.directive(DdrDropdownComponent)).componentInstance;

            let rows = fixture.debugElement.queryAll(By.css('tr.ddr-table__table--body-row'));
            expect(rows.length).toBe(10);

            dropdown.writeValue(5);
            fixture.detectChanges();

            rows = fixture.debugElement.queryAll(By.css('tr.ddr-table__table--body-row'));
            expect(rows.length).toBe(5);

            dropdown.writeValue(50);
            fixture.detectChanges();

            rows = fixture.debugElement.queryAll(By.css('tr.ddr-table__table--body-row'));
            expect(rows.length).toBe(20);
        });
    }));

    it('should select multiple items', waitForAsync(() => {
        component.multiple = true;
        fixture.detectChanges();
        fixture.whenStable().then(() => {

            spyOn(component.selectMultipleItem, "emit");

            let checkbox = fixture.debugElement.query(By.css('tr.ddr-table__table--body-row:nth-child(1) td.ddr-table__table--body-row--checkbox ddr-checkbox'));
            let checkboxComponent: DdrCheckboxComponent<{ rowNumber: number }> = checkbox.componentInstance;

            checkboxComponent.onClickCheckBinary(null);
            fixture.detectChanges();

            expect(component.selectMultipleItem.emit).withContext('Debe lanzar el evento selectMultipleItem').toHaveBeenCalledWith([{ rowNumber: 1 }])
            checkbox = fixture.debugElement.query(By.css('tr.ddr-table__table--body-row:nth-child(5) td.ddr-table__table--body-row--checkbox ddr-checkbox'));
            checkboxComponent = checkbox.componentInstance;

            checkboxComponent.onClickCheckBinary(null);
            fixture.detectChanges();

            expect(component.selectMultipleItem.emit).withContext('Debe lanzar el evento selectMultipleItem').toHaveBeenCalledWith([{ rowNumber: 1 }, { rowNumber: 5 }])
            checkbox = fixture.debugElement.query(By.css('tr.ddr-table__table--body-row:nth-child(7) td.ddr-table__table--body-row--checkbox ddr-checkbox'));
            checkboxComponent = checkbox.componentInstance;

            checkboxComponent.onClickCheckBinary(null);
            fixture.detectChanges();

            expect(component.selectMultipleItem.emit).withContext('Debe lanzar el evento selectMultipleItem').toHaveBeenCalledWith([{ rowNumber: 1 }, { rowNumber: 5 }, { rowNumber: 7 }])

        });
    }));

    it('should select all items', waitForAsync(() => {
        component.multiple = true;
        fixture.detectChanges();
        fixture.whenStable().then(() => {

            spyOn(component.selectMultipleItem, "emit");

            let checkbox = fixture.debugElement.query(By.css('.ddr-table__table--header-row--checkbox ddr-checkbox'));
            let checkboxComponent: DdrCheckboxComponent<string> = checkbox.componentInstance;

            checkboxComponent.onClickCheckBinary(null);
            fixture.detectChanges();

            expect(component.selectMultipleItem.emit).withContext('Debe lanzar el evento selectMultipleItem').toHaveBeenCalledWith([
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

            checkboxComponent.onClickCheckBinary(null);
            fixture.detectChanges();

            expect(component.selectMultipleItem.emit).withContext('Debe lanzar el evento selectMultipleItem').toHaveBeenCalledWith([])

        });
    }));

    it('should sort items', waitForAsync(() => {
        component.canSort = true;
        component.cols = [
            { label: '', property: 'rowNumber', canSort: true },
        ];
        fixture.detectChanges();
        fixture.whenStable().then(() => {

            spyOn(component.sort, "emit");

            let iconSort = fixture.debugElement.query(By.css('.ddr-table__table--header-cell:nth-child(1) .ddr-table__table--header-cell--sort'));
            iconSort.triggerEventHandler("click");
            fixture.detectChanges();

            expect(component.sort.emit).withContext('Debe lanzar el evento sort').toHaveBeenCalledWith({ label: '', property: 'rowNumber', canSort: true, modeSort: ddrConstantsService.MODE_SORT.ASCENDING });

            iconSort.triggerEventHandler("click");
            fixture.detectChanges();

            expect(component.sort.emit).withContext('Debe lanzar el evento sort').toHaveBeenCalledWith({ label: '', property: 'rowNumber', canSort: true, modeSort: ddrConstantsService.MODE_SORT.DESCENDING });

            iconSort.triggerEventHandler("click");
            fixture.detectChanges();

            expect(component.sort.emit).withContext('Debe lanzar el evento sort').toHaveBeenCalledWith({ label: '', property: 'rowNumber', canSort: true, modeSort: ddrConstantsService.MODE_SORT.NO_SORT });

        });
    }));

    it('should sort items (initial status)', waitForAsync(() => {
        component.canSort = true;
        component.cols = [
            { label: '', property: 'rowNumber', canSort: true, modeSort: ddrConstantsService.MODE_SORT.ASCENDING },
        ];
        fixture.detectChanges();
        fixture.whenStable().then(() => {

            spyOn(component.sort, "emit");

            let iconSort = fixture.debugElement.query(By.css('.ddr-table__table--header-cell:nth-child(1) .ddr-table__table--header-cell--sort'));
            iconSort.triggerEventHandler("click");
            fixture.detectChanges();

            expect(component.sort.emit).withContext('Debe lanzar el evento sort').toHaveBeenCalledWith({ label: '', property: 'rowNumber', canSort: true, modeSort: ddrConstantsService.MODE_SORT.DESCENDING });

            iconSort.triggerEventHandler("click");
            fixture.detectChanges();

            expect(component.sort.emit).withContext('Debe lanzar el evento sort').toHaveBeenCalledWith({ label: '', property: 'rowNumber', canSort: true, modeSort: ddrConstantsService.MODE_SORT.NO_SORT });

            iconSort.triggerEventHandler("click");
            fixture.detectChanges();

            expect(component.sort.emit).withContext('Debe lanzar el evento sort').toHaveBeenCalledWith({ label: '', property: 'rowNumber', canSort: true, modeSort: ddrConstantsService.MODE_SORT.ASCENDING });

        });
    }));

});
