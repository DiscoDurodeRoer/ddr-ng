import { Component, inject } from '@angular/core';
import { DdrClipboardDirective, DdrTextareaComponent, DdrToastService } from '@ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clipboard-showcase',
  templateUrl: './clipboard-showcase.component.html',
  styleUrls: ['./clipboard-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrClipboardDirective,
    DdrTextareaComponent,
    FormsModule
  ]
})
export class ClipboardShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);

  public value = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptatibus hic iure repellendus laudantium vero quo id voluptatem perferendis error dignissimos officia ad porro doloremque explicabo incidunt, praesentium provident impedit. Rem vel reiciendis ab ipsum natus, quas veritatis commodi! Sapiente odio ea nostrum blanditiis similique neque cupiditate atque commodi ab voluptates molestiae, enim iusto ratione nemo quibusdam, hic optio ad! Ipsum officiis ipsam unde sint doloremque consequuntur distinctio, vitae, ratione, debitis nostrum recusandae fugit dolorem. Nemo impedit delectus pariatur nihil sint. Hic quos dolores culpa, libero doloribus rem! Labore, corrupti. Accusantium molestiae officia ad id autem et esse necessitatibus corporis cum ea quae maxime nostrum atque tempora sapiente delectus ullam dolorem, quasi, repudiandae minima illo. Repellat esse facilis similique quidem! Doloremque ipsam soluta distinctio tenetur! Ab necessitatibus nobis ratione ipsum assumenda quo esse quidem quos nihil soluta ut facere delectus eligendi quaerat dignissimos optio ipsa, autem voluptate officia? Doloremque, corporis? Nihil a repellendus, similique aut dolore ex accusantium dolorum voluptatum quibusdam nobis doloribus. Pariatur saepe harum, alias ratione voluptatibus ducimus minus aut iure placeat a soluta quod aliquid voluptatem ipsam? Tenetur odit labore sunt nulla, corrupti excepturi. Id saepe officia et neque mollitia repellendus consectetur, ducimus, necessitatibus est nobis, vel debitis iusto nostrum eligendi aliquid veritatis deserunt modi natus esse. Deleniti ratione quod beatae numquam non autem impedit vel ipsum sint, voluptatibus ad rem consequatur, tempora aliquam illo, repudiandae ducimus voluptatem. Hic, totam blanditiis quas quae repudiandae omnis facilis sed. Unde voluptas, molestiae ea dolorum repellat non. Aliquid inventore sit porro a vel, expedita quas. Sed totam soluta corrupti libero, saepe minus aperiam facilis odit quas similique architecto earum. Veniam. Eos laudantium voluptate illum aliquid ad aut, suscipit debitis libero ea adipisci in corrupti consectetur. Sint officiis quisquam tempora expedita quasi quidem. Aspernatur cum nulla nemo aperiam, labore adipisci exercitationem.'

  copyText(){
    this.ddrToastService.addSuccessMessage('Exito', 'Texto copiado');
  }

}
