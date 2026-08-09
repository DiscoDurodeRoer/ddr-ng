import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { LoginShowcase1Component } from './showcases/login-showcase-1/login-showcase-1.component';
import { LoginShowcase2Component } from './showcases/login-showcase-2/login-showcase-2.component';
import { LoginShowcase3Component } from './showcases/login-showcase-3/login-showcase-3.component';
import { LoginShowcase4Component } from './showcases/login-showcase-4/login-showcase-4.component';
import { LoginShowcase5Component } from './showcases/login-showcase-5/login-showcase-5.component';
import { LoginShowcase6Component } from './showcases/login-showcase-6/login-showcase-6.component';
import { LoginShowcase7Component } from './showcases/login-showcase-7/login-showcase-7.component';
import { LoginShowcase8Component } from './showcases/login-showcase-8/login-showcase-8.component';
import { CLASSES, Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'login-showcase',
  templateUrl: './login-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    LoginShowcase1Component,
    LoginShowcase2Component,
    LoginShowcase3Component,
    LoginShowcase4Component,
    LoginShowcase5Component,
    LoginShowcase6Component,
    LoginShowcase7Component,
    LoginShowcase8Component,
    DdrTranslatePipe]
})
export class LoginShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-login 
      [labelUsername]="'login.component.username' | ddrTranslate"
      [labelPlaceholderUsername]="'login.component.placeholder.username' | ddrTranslate"
      [labelPassword]="'login.component.password' | ddrTranslate"
      [labelPlaceholderPassword]="'login.component.placeholder.password' | ddrTranslate"
      [labelSubmit]="'login.component.submit' | ddrTranslate"
      (doLogin)="login($event)" />`,
        tsCode: `import {
    Component,
    inject
  } from '@angular/core';
  import {
    DdrAuth,
    DdrLoginComponent
  } from 'ddr-ng/login';
  import { DdrToastService } from 'ddr-ng/toast';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  
  @Component({
    selector: 'login-showcase-1',
    templateUrl: './login-showcase-1.component.html',
    imports: [
      DdrLoginComponent,
      DdrTranslatePipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class LoginShowcase1Component {
  
    public ddrToastService: DdrToastService = inject(DdrToastService);
    public ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    login(auth: DdrAuth) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(auth),
      );
    }
  }
  `,
        classes: [
          CLASSES['DdrAuth']
        ]
      },
      {
        htmlCode: `<ddr-login 
      [labelUsername]="'login.component.username' | ddrTranslate"
      [labelPlaceholderUsername]="'login.component.placeholder.username' | ddrTranslate"
      [labelPassword]="'login.component.password' | ddrTranslate"
      [labelPlaceholderPassword]="'login.component.placeholder.password' | ddrTranslate"
      [labelSubmit]="'login.component.submit' | ddrTranslate"
      [userRequired]="false"
      [passwordRequired]="false"
      (doLogin)="login($event)" />`,
        tsCode: `import {
    Component,
    inject
  } from '@angular/core';
  import {
    DdrAuth,
    DdrLoginComponent
  } from 'ddr-ng/login';
  import { DdrToastService } from 'ddr-ng/toast';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  
  @Component({
    selector: 'login-showcase-2',
    templateUrl: './login-showcase-2.component.html',
    imports: [
      DdrLoginComponent,
      DdrTranslatePipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class LoginShowcase2Component {
  
    public ddrToastService: DdrToastService = inject(DdrToastService);
    public ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    login(auth: DdrAuth) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(auth),
      );
    }
  }
  `,
        classes: [
          CLASSES['DdrAuth']
        ]
      },
      {
        htmlCode: `<ddr-login 
      [labelUsername]="'login.component.username' | ddrTranslate"
      [labelPlaceholderUsername]="'login.component.placeholder.username' | ddrTranslate"
      [labelPassword]="'login.component.password' | ddrTranslate"
      [labelPlaceholderPassword]="'login.component.placeholder.password' | ddrTranslate"
      [labelSubmit]="'login.component.submit' | ddrTranslate"
      [labelCreateUser]="'login.component.create.user' | ddrTranslate"
      [showCreateUser]="true"
      (doLogin)="login($event)"
      (registerUser)="registerUser()" />`,
        tsCode: `import {
    Component,
    inject
  } from '@angular/core';
  import {
    DdrAuth,
    DdrLoginComponent
  } from 'ddr-ng/login';
  import { DdrToastService } from 'ddr-ng/toast';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  
  @Component({
    selector: 'login-showcase-3',
    templateUrl: './login-showcase-3.component.html',
    imports: [
      DdrLoginComponent,
      DdrTranslatePipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class LoginShowcase3Component {
  
    public ddrToastService: DdrToastService = inject(DdrToastService);
    public ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    login(auth: DdrAuth) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(auth),
      );
    }
  
    registerUser() {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        this.ddrTranslateService.getTranslate('login.click.register.user'),
      );
    }
  }
  `,
        classes: [
          CLASSES['DdrAuth']
        ]
      },
      {
        htmlCode: `<ddr-login 
      [labelUsername]="'login.component.username' | ddrTranslate"
      [labelPlaceholderUsername]="'login.component.placeholder.username' | ddrTranslate"
      [labelPassword]="'login.component.password' | ddrTranslate"
      [labelPlaceholderPassword]="'login.component.placeholder.password' | ddrTranslate"
      [labelSubmit]="'login.component.submit' | ddrTranslate"
      [labelForgotenPassword]="'login.component.forgoten.password' | ddrTranslate"
      [showForgotPassword]="true"
      (doLogin)="login($event)"
      (forgotenPassword)="forgotenPassword()" 
      (registerUser)="registerUser()" />`,
        tsCode: `import {
    Component,
    inject
  } from '@angular/core';
  import {
    DdrAuth,
    DdrLoginComponent
  } from 'ddr-ng/login';
  import { DdrToastService } from 'ddr-ng/toast';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  
  @Component({
    selector: 'login-showcase-4',
    templateUrl: './login-showcase-4.component.html',
    imports: [
      DdrLoginComponent,
      DdrTranslatePipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class LoginShowcase4Component {
  
    public ddrToastService: DdrToastService = inject(DdrToastService);
    public ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    login(auth: DdrAuth) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(auth),
      );
    }
  
    forgotenPassword() {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        this.ddrTranslateService.getTranslate('login.click.forgoten.password'),
      );
    }
  
    registerUser() {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        this.ddrTranslateService.getTranslate('login.click.register.user'),
      );
    }
  
  }
  `,
        classes: [
          CLASSES['DdrAuth']
        ]
      },
      {
        htmlCode: `<ddr-login 
      [labelUsername]="'login.component.username' | ddrTranslate"
      [labelPlaceholderUsername]="'login.component.placeholder.username' | ddrTranslate"
      [labelPassword]="'login.component.password' | ddrTranslate"
      [labelPlaceholderPassword]="'login.component.placeholder.password' | ddrTranslate"
      [labelSubmit]="'login.component.submit' | ddrTranslate"
      [labelCreateUser]="'login.component.create.user' | ddrTranslate"
      [labelForgotenPassword]="'login.component.forgoten.password' | ddrTranslate"
      [showForgotPassword]="true"
      [showCreateUser]="true"
      (doLogin)="login($event)"
      (forgotenPassword)="forgotenPassword()" 
      (registerUser)="registerUser()" />`,
        tsCode: `import {
    Component,
    inject
  } from '@angular/core';
  import {
    DdrAuth,
    DdrLoginComponent
  } from 'ddr-ng/login';
  import { DdrToastService } from 'ddr-ng/toast';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  
  @Component({
    selector: 'login-showcase-5',
    templateUrl: './login-showcase-5.component.html',
    imports: [
      DdrLoginComponent,
      DdrTranslatePipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class LoginShowcase5Component {
  
    public ddrToastService: DdrToastService = inject(DdrToastService);
    public ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    login(auth: DdrAuth) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(auth),
      );
    }
  
    forgotenPassword() {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        this.ddrTranslateService.getTranslate('login.click.forgoten.password'),
      );
    }
  
    registerUser() {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        this.ddrTranslateService.getTranslate('login.click.register.user'),
      );
    }
  
  }
  `,
        classes: [
          CLASSES['DdrAuth']
        ]
      },
      {
        htmlCode: `<ddr-login 
      [labelUsername]="'login.component.username' | ddrTranslate"
      [labelPlaceholderUsername]="'login.component.placeholder.username' | ddrTranslate"
      [labelPassword]="'login.component.password' | ddrTranslate"
      [labelPlaceholderPassword]="'login.component.placeholder.password' | ddrTranslate"
      [labelSubmit]="'login.component.submit' | ddrTranslate"
      [showHeader]="true" 
      (doLogin)="login($event)">
      
          <div login-header class="text-center">
              <span>{{'login.component.header' | ddrTranslate}}</span>
          </div>
  
  </ddr-login>`,
        tsCode: `import {
    Component,
    inject
  } from '@angular/core';
  import {
    DdrAuth,
    DdrLoginComponent
  } from 'ddr-ng/login';
  import { DdrToastService } from 'ddr-ng/toast';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  
  @Component({
    selector: 'login-showcase-6',
    templateUrl: './login-showcase-6.component.html',
    imports: [
      DdrLoginComponent,
      DdrTranslatePipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class LoginShowcase6Component {
  
    public ddrToastService: DdrToastService = inject(DdrToastService);
    public ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    login(auth: DdrAuth) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(auth),
      );
    }
  
  }
  `,
        classes: [
          CLASSES['DdrAuth']
        ]
      },
      {
        htmlCode: `<ddr-login 
      [labelPlaceholderUsername]="'login.component.placeholder.username' | ddrTranslate"
      [labelPlaceholderPassword]="'login.component.placeholder.password' | ddrTranslate"
      [labelSubmit]="'login.component.submit' | ddrTranslate"
      [showLabelUser]="false" 
      [showLabelPassword]="false"
      (doLogin)="login($event)" />`,
        tsCode: `import {
    Component,
    inject
  } from '@angular/core';
  import {
    DdrAuth,
    DdrLoginComponent
  } from 'ddr-ng/login';
  import { DdrToastService } from 'ddr-ng/toast';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  
  @Component({
    selector: 'login-showcase-7',
    templateUrl: './login-showcase-7.component.html',
    imports: [
      DdrLoginComponent,
      DdrTranslatePipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class LoginShowcase7Component {
  
    public ddrToastService: DdrToastService = inject(DdrToastService);
    public ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    login(auth: DdrAuth) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(auth),
      );
    }
  }
  `,
        classes: [
          CLASSES['DdrAuth']
        ]
      },
      {
        htmlCode: `<ddr-login 
      [labelPlaceholderUsername]="'login.component.placeholder.username' | ddrTranslate"
      [labelPlaceholderPassword]="'login.component.placeholder.password' | ddrTranslate"
      [labelSubmit]="'login.component.submit' | ddrTranslate"
      [showLabelUser]="false" 
      [showLabelPassword]="false"
      [showFooter]="true"
      (doLogin)="login($event)">
  
          <div login-footer class="text-center">
              <span>{{'login.component.footer' | ddrTranslate}}</span>
          </div>
  
  </ddr-login>`,
        tsCode: `import {
    Component,
    inject
  } from '@angular/core';
  import {
    DdrAuth,
    DdrLoginComponent
  } from 'ddr-ng/login';
  import { DdrToastService } from 'ddr-ng/toast';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  
  @Component({
    selector: 'login-showcase-8',
    templateUrl: './login-showcase-8.component.html',
    imports: [
      DdrLoginComponent,
      DdrTranslatePipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class LoginShowcase8Component {
  
    public ddrToastService: DdrToastService = inject(DdrToastService);
    public ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    login(auth: DdrAuth) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(auth),
      );
    }
  
  }
  `,
        classes: [
          CLASSES['DdrAuth']
        ]
      },
    ],
    inputs: [
      {
        item: {
          name: 'showForgotPassword',
          description: 'login.component.input.showforgotpassword',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      },
      {
        item: {
          name: 'showCreateUser',
          description: 'login.component.input.showcreateuser',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      },
      {
        item: {
          name: 'showHeader',
          description: 'login.component.input.showheader',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      },
      {
        item: {
          name: 'showFooter',
          description: 'login.component.input.showfooter',
          required: false,
          type: 'boolean',
          default: 'true'
        }
      },
      {
        item: {
          name: 'showLabelUser',
          description: 'login.component.input.showlabeluser',
          required: false,
          type: 'boolean',
          default: 'true'
        }
      },
      {
        item: {
          name: 'showLabelPassword',
          description: 'login.component.input.showlabelpassword',
          required: false,
          type: 'boolean',
          default: 'true'
        }
      },
      {
        item: {
          name: 'userRequired',
          description: 'login.component.input.userrequired',
          required: false,
          type: 'boolean',
          default: 'true'
        }
      },
      {
        item: {
          name: 'passwordRequired',
          description: 'login.component.input.userpassword',
          required: false,
          type: 'boolean',
          default: 'true'
        }
      },
      {
        item: {
          name: 'labelSubmit',
          description: 'login.component.input.labelsubmit',
          required: false,
          type: 'string',
          default: 'undefined'
        }
      },
      {
        item: {
          name: 'labelForgotenPassword',
          description: 'login.component.input.labelforgotenpassword',
          required: false,
          type: 'string',
          default: 'undefined'
        }
      },
      {
        item: {
          name: 'labelCreateUser',
          description: 'login.component.input.labelcreateuser',
          required: false,
          type: 'string',
          default: 'undefined'
        }
      },
      {
        item: {
          name: 'labelUsername',
          description: 'login.component.input.labelusername',
          required: false,
          type: 'string',
          default: 'undefined'
        }
      },
      {
        item: {
          name: 'labelPlaceholderUsername',
          description: 'login.component.input.labelplaceholderusername',
          required: false,
          type: 'string',
          default: 'undefined'
        }
      },
      {
        item: {
          name: 'labelPassword',
          description: 'login.component.input.labelpassword',
          required: false,
          type: 'string',
          default: 'undefined'
        }
      },
      {
        item: {
          name: 'labelPlaceholderPassword',
          description: 'login.component.input.labelplaceholderpassword',
          required: false,
          type: 'string',
          default: 'undefined'
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'doLogin',
          description: 'login.component.output.dologin',
          type: 'DdrAuth'
        }
      },
      {
        item: {
          name: 'forgotenPassword',
          description: 'login.component.output.forgotenpassword',
          type: 'void'
        }
      },
      {
        item: {
          name: 'registerUser',
          description: 'login.component.output.registeruser',
          type: 'void'
        }
      }
    ],
    slots: [
      {
        item: {
          selector: '[login-header]',
          description: 'login.component.slot.login.header'
        }
      },
      {
        item: {
          selector: '[login-footer]',
          description: 'login.component.slot.login.footer'
        }
      }
    ],
    translations: [
      {
        item: {
          name: 'login.username',
          description: 'login.component.translation.login.username'
        }
      },
      {
        item: {
          name: 'login.placeholder.username',
          description: 'login.component.translation.login.placeholder.username'
        }
      },
      {
        item: {
          name: 'login.password',
          description: 'login.component.translation.login.password'
        }
      },
      {
        item: {
          name: 'login.placeholder.password',
          description: 'login.component.translation.login.placeholder.password'
        }
      },
      {
        item: {
          name: 'login.submit',
          description: 'login.component.translation.login.submit'
        }
      },
      {
        item: {
          name: 'login.forgot.password',
          description: 'login.component.translation.login.forgot.password'
        }
      },
      {
        item: {
          name: 'login.create.user',
          description: 'login.component.translation.login.create.user'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-login',
          description: 'login.component.style'
        }
      },
      {
        item: {
          class: 'ddr-login__user-input',
          description: 'login.component.style.user.input'
        }
      },
      {
        item: {
          class: 'ddr-login__input-password',
          description: 'login.component.style.input.password'
        }
      },
      {
        item: {
          class: 'ddr-login__submit-button',
          description: 'login.component.style.submit.button'
        }
      },
      {
        item: {
          class: 'ddr-login__submit-button',
          description: 'login.component.style.submit.button'
        }
      }
    ]
  }

}
