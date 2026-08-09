import {
  ChangeDetectorRef,
  Component,
  inject,
  OnDestroy,
} from '@angular/core';

import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { DdrTreeComponent, DdrTreeNode } from 'ddr-ng/components/tree';
import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
import { DdrCardComponent } from 'ddr-ng/components/card';
import { DdrSelectItem } from 'ddr-ng/models';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrl: './changelog.component.scss',
  imports: [
    DdrTreeComponent,
    DdrDropdownComponent,
    DdrCardComponent,
    DdrTranslatePipe
  ],
})
export class ChangelogComponent implements OnDestroy {
  private dataService: DataService = inject(DataService);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  public nodesChangelogOri: DdrTreeNode<string>[] = [];
  public nodesChangelog: DdrTreeNode<string>[] = [];
  public versions: DdrSelectItem<string>[] = [];
  public version: string = '';

  private subscription: Subscription = new Subscription();

  async ngOnInit(): Promise<void> {
    this.versions =
      (await this.dataService.getVersions()) as DdrSelectItem<string>[];
    this.nodesChangelogOri = await this.dataService.getChangelog();
    this.nodesChangelog = [...this.nodesChangelogOri];

    this.subscription = this.route.queryParamMap.subscribe((params) => {
      const version = params.get('v');
      if (version) {
        this.version = version;
        this.nodesChangelog = this.nodesChangelogOri.filter(
          (node) => node.name === version,
        );
      }
    });

    this.changeDetectorRef.markForCheck();
  }

  filterVersion(item: DdrSelectItem<string>) {
    if (item.selected) {
      this.nodesChangelog = this.nodesChangelogOri.filter(
        (node) => node.name === item.value,
      );
    } else {
      this.nodesChangelog = this.nodesChangelogOri;
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
