import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Note} from '../model/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private  note: Note;
  private  notes: Array<Note>;
  constructor(private http: HttpClient) { }

  public save() {
    this.http.post<number>('http://localhost:9090/AgenceLocation/note/', this.note).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log('eroooer f insertion');
      }
    );
  }
  public findAll(){
    this.http.get<Array<Note>>('http://localhost:9090/AgenceLocation/note/').subscribe(
      data => {
        this.notes = data;
      }, error => {
        console.log('chi7aja fl find dyal not');
      }
    );
  }
  public deleteNote() {
    this.http.delete<number>('http://localhost:9090/AgenceLocation/note/libelle/' + this.note.libelle).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log('mochkila fdelet');
      }
    );
  }
}
