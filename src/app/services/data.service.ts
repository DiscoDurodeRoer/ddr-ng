import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { DdrAction, DdrSelectItem, DdrTreeNode } from 'ddr-ng';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  async getChangelog() {
    const changelog = await fetch(`${environment.urlData}/changelog.json`).then(async (value: Response) => await value.json() as DdrTreeNode<string>[])
    return changelog.sort((a: DdrTreeNode<string>, b: DdrTreeNode<string>) => b.name.localeCompare(a.name))
  }

  async getVersions() {
    const versions = await fetch(`${environment.urlData}/versions.json`).then(async (value: Response) => await value.json() as DdrAction<string>[] | DdrSelectItem<string>[])
    return versions.sort((a, b) => b.label.localeCompare(a.label))
  }

  async getLanguages() {
    const languages = await fetch(`${environment.urlData}/languages.json`).then(async (value: Response) => await value.json() as DdrAction<string>[])
    return languages.map((language) => ({
      ...language,
      img: `${environment.urlData}${language.img}`
    }))
  }

}
