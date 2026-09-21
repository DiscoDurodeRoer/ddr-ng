import {
  Component,
  computed,
  inject,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import {
  DdrStepComponent,
  DdrStepsComponent
} from 'ddr-ng/components/steps';
import {
  form,
  FormField,
  max,
  min,
  required
} from '@angular/forms/signals';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrButton } from 'ddr-ng/models';
import { Person } from './bean/person';


@Component({
  selector: 'steps-showcase-14',
  templateUrl: './steps-showcase-14.component.html',
  imports: [
    DdrStepsComponent,
    DdrStepComponent,
    DdrInputComponent,
    DdrInputNumberComponent,
    DdrTranslatePipe,
    FormField
  ],
  providers: [
    DdrToastService
  ]
})
export class StepsShowcase14Component {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public personModel: WritableSignal<Person> = signal<Person>({
    name: '',
    age: 0
  })
  public personForm = form(this.personModel, (control) => {
    required(control.name, { message: 'input.value.required' }),
      min(control.age, 18, { message: 'input.number.min' }),
      max(control.age, 99, { message: 'input.number.max' })
  });

  public submitButton = computed<DdrButton>(() => ({
    text: 'Button submit',
    disabled: this.personForm().invalid()
  }));

  submitForm(event: Event) {
    event.preventDefault();
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('button.form.submit'),
    );
  }
}
