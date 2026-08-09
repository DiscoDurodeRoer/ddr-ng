import { Service } from '@angular/core';
import { environment } from '../../environments/environment';
import { DdrTreeNode } from 'ddr-ng/components/tree';
import { DdrAction, DdrSelectItem } from 'ddr-ng/models';

@Service()
export class DataService {

  async getChangelog() {
    const changelog = await fetch(`${environment.urlData}/changelog.json`, {
      cache: 'no-store'
    }).then(async (value: Response) => await value.json() as DdrTreeNode<string>[])
    return changelog.sort((a: DdrTreeNode<string>, b: DdrTreeNode<string>) => b.name.localeCompare(a.name))
  }

  async getVersions() {
    const versions = await fetch(`${environment.urlData}/versions.json`, {
      cache: 'no-store'
    }).then(async (value: Response) => await value.json() as DdrAction<string>[] | DdrSelectItem<string>[])
    return versions.sort((a, b) => b.label.localeCompare(a.label))
  }

  async getLanguages() {
    const languages = await fetch(`${environment.urlData}/languages.json`, {
      cache: 'no-store'
    }).then(async (value: Response) => await value.json() as DdrAction<string>[])
    return languages.map((language) => ({
      ...language,
      img: `${environment.urlData}${language.img}`
    }))
  }

}
