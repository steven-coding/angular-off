import { Component } from '@angular/core';
import { Config } from './shared/config/env.config';
import './operators';
import * as PouchDBLib from 'pouchdb';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  private db: any;

  constructor() {
    console.log('Environment config', Config);
    //console.log('PouchDB', PouchDB);
    this.db = new PouchDBLib('my-pouch-store');
    this.saveCouchObject(
      {
        _id: new Date().toISOString(),
        date: Date.now(),
        text: 'Some text'
      }
    );
    this.loadAllCouchObjects();
  }

  saveCouchObject(obj: any) {
    this.db.put(obj, (err: any, result: any) => {
      if (!err) {
        console.log('saving succeeded');
      }
    });
  }

  loadAllCouchObjects() {
    this.db.allDocs({include_docs: true, descending: true}, function(err: any, doc: any) {
      console.log('docs', doc);
    });
  }

  public savePouchItem() {
    this.saveCouchObject({
      _id: new Date().toISOString(),
      date: Date.now(),
      text: 'Saved it after a button was clicked!'
    });
  }

  public pseudoSaveImage() {
    console.log((<any>document.getElementById('image-upload')).files);
  }
}
