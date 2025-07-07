import { Component } from '@angular/core';
import { DdrButtonComponent, DdrProgressBarComponent } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
    selector: 'app-progress-bar-showcase',
    templateUrl: './progress-bar-showcase.component.html',
    styleUrls: ['./progress-bar-showcase.component.scss'],
    imports: [
        BaseShowcaseComponent,
        DdrProgressBarComponent,
        DdrButtonComponent
    ]
})
export class ProgressBarShowcaseComponent {

  public valueEx1 = 0;
  public valueEx2 = 0;
  public valueEx3 = 0;
  public valueEx4 = 0;
  public valueEx5 = 0;
  public valueEx6 = 0;

  increaseEx1() {
    if (this.valueEx1 + 10 > 100) {
      this.valueEx1 = 100;
    } else {
      this.valueEx1 = this.valueEx1 + 10;
    }
  }

  decreaseEx1() {
    if (this.valueEx1 - 10 <= 0) {
      this.valueEx1 = 0;
    } else {
      this.valueEx1 = this.valueEx1 - 10;
    }
  }

  increaseEx2() {
    if (this.valueEx2 + 10 > 100) {
      this.valueEx2 = 100;
    } else {
      this.valueEx2 = this.valueEx2 + 10;
    }
  }

  decreaseEx2() {
    if (this.valueEx2 - 10 <= 0) {
      this.valueEx2 = 0;
    } else {
      this.valueEx2 = this.valueEx2 - 10;
    }
  }

  increaseEx3() {
    if (this.valueEx3 + 10 > 100) {
      this.valueEx3 = 100;
    } else {
      this.valueEx3 = this.valueEx3 + 10;
    }
  }

  decreaseEx3() {
    if (this.valueEx3 - 10 <= 0) {
      this.valueEx3 = 0;
    } else {
      this.valueEx3 = this.valueEx3 - 10;
    }
  }

  increaseEx4() {
    if (this.valueEx4 + 10 > 100) {
      this.valueEx4 = 100;
    } else {
      this.valueEx4 = this.valueEx4 + 10;
    }
  }

  decreaseEx4() {
    if (this.valueEx4 - 10 <= 0) {
      this.valueEx4 = 0;
    } else {
      this.valueEx4 = this.valueEx4 - 10;
    }
  }

  increaseEx5() {
    if (this.valueEx5 + 10 > 100) {
      this.valueEx5 = 100;
    } else {
      this.valueEx5 = this.valueEx5 + 10;
    }
  }

  decreaseEx5() {
    if (this.valueEx5 - 10 <= 0) {
      this.valueEx5 = 0;
    } else {
      this.valueEx5 = this.valueEx5 - 10;
    }
  }

  increaseEx6() {
    if (this.valueEx6 + 10 > 100) {
      this.valueEx6 = 100;
    } else {
      this.valueEx6 = this.valueEx6 + 10;
    }
  }

  decreaseEx6() {
    if (this.valueEx6 - 10 <= 0) {
      this.valueEx6 = 0;
    } else {
      this.valueEx6 = this.valueEx6 - 10;
    }
  }

}
