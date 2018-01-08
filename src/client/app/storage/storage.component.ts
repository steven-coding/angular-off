import { Component } from '@angular/core';
import * as PouchDBLib from 'pouchdb';

export interface NoticeModel {
  _id: string;
  date: Date;
  text: string;
}

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-storage',
  templateUrl: 'storage.component.html',
  styleUrls: ['storage.component.css']
})
export class StorageComponent {
  private static readonly POUCH_STORE_NAME = 'my-pouch-store';

  public notices: NoticeModel[] = [];
  public newNotice: string;
  private _db: PouchDB.Database;

  private get db(): PouchDB.Database {
    return this._db;
  }

  private set db(value: PouchDB.Database) {
    this._db = value;
    this.loadData();
  }

  constructor() {
    this.openStorage();
  }

  public openStorage() {
    this.db = new PouchDBLib(StorageComponent.POUCH_STORE_NAME);
    console.log('opened ' + StorageComponent.POUCH_STORE_NAME);
    this.loadData();
  }

  public clearStorage() {
    this.db.destroy().then(
      () => {
        console.log('clearing ' + StorageComponent.POUCH_STORE_NAME + ' successfully completed!');
        this.openStorage();
      }
    );
  }

  savePouchObject(obj: any) {
    this.db.put(obj, {}, (err: any, result: any) => {
      if (!err) {
        console.log('saving succeeded');
      }

      this.loadData();
    });
  }

  loadData() {
    this.db.allDocs({include_docs: true, descending: true}).then(
      (wrappedDocs) => {
        const notices: NoticeModel[] = [];

        wrappedDocs.rows.forEach((wrappedDoc) => {
          notices.push(<any>wrappedDoc.doc);
        });


        this.notices = notices;
      }
    );

  }

  public save() {
    this.savePouchObject({
      _id: new Date().toISOString(),
      date: Date.now(),
      text: this.newNotice
    });
  }
}
