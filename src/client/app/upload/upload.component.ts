import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-upload',
  templateUrl: 'upload.component.html',
  styleUrls: ['upload.component.css']
})
export class UploadComponent {

  public filesToBeUploaded: string[] = [];

  public addFile(): void {
    this.addFilesToFilesToBeUploaded((<any>document.getElementById('file-upload')).files);
  }

  public upload(): void {
    this.clearUploadedFilesOutput();

    if (this.filesToBeUploaded.length === 0)
      return;

    const uploadSource: FileList = (<any>document.getElementById('source-files')).files;

    for (let i = 0; i < uploadSource.length; i++) {
      const file = uploadSource.item(i);

      const targetIdx: number = this.filesToBeUploaded.indexOf(file.name);

      //filesToBeUploaded doesn't contain the file name
      if (targetIdx < 0)
        continue;

      console.log('found file to be uploaded', file.name);

      this.uploadFile(file);

      //remove file from files to be uploaded
      this.filesToBeUploaded.splice(targetIdx, 1);

      console.log('files left', this.filesToBeUploaded);
    }
  }

  private clearUploadedFilesOutput() {
    document.getElementById('upload-output').innerHTML = '';
  }

  private uploadFile(f: File): void {
    const reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = (function(theFile) {
      return function(e: Event) {
        console.log('file uploaded', e);

        if (e.currentTarget && (<FileReader>e.currentTarget).result) {
          const infoDiv = document.createElement('div');
          infoDiv.innerText = f.name + ': ' + (<FileReader>e.currentTarget).result;
          document.getElementById('upload-output').appendChild(infoDiv);
        }

        //document.getElementById('upload-list').insertBefore(span, null);
      };
    })(f);

    // Read in the file as a binary string.
    reader.readAsBinaryString(f);
  }

  private addFilesToFilesToBeUploaded(files: FileList): void {
    for (let i = 0; i < files.length; i++) {
      const file: File = files.item(i);
      this.filesToBeUploaded.push(file.name);
    }
  }
}
