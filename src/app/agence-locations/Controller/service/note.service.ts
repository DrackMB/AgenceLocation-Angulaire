import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Note} from '../model/note.model';
import {Client} from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private _notesall: Array<Note>;
  private _note: Note;
  private _notes: Array<Note>;

  constructor(private http: HttpClient) {
  }
  get notesall(): Array<Note> {
    if (this._notesall == null) {
      this._notesall = new Array<Note>();
    }
    return this._notesall;
  }

  set notesall(value: Array<Note>) {
    this._notesall = value;
  }

  get note(): Note {
    if (this._note == null) {
      this._note = new Note();
    }
    return this._note;
  }

  set note(value: Note) {
    this._note = value;
  }


  get notes(): Array<Note> {
    if (this._notes == null) {
      this._notes = new Array<Note>();
    }
    return this._notes;
  }

  set notes(value: Array<Note>) {
    this._notes = value;
  }

  public save() {
    this.http.post<number>('http://localhost:9090/AgenceLocation/note/', this.note).subscribe(
      data => {
        this.notes.push(this.cloneNote(this.note));
        this.note = null;
        console.log(data);
      }, error => {
        console.log('eroooer f insertion');
      }
    );
  }

  public findAll() {
    this.http.get<Array<Note>>('http://localhost:9090/AgenceLocation/note/fin/').subscribe(
      data => {
        this.notesall = data;
      }, error => {
        console.log('error in note');
      }
    );
  }

  public deleteNote(note: Note) {
    this.http.delete<number>('http://localhost:9090/AgenceLocation/note/libelle/' + note.libelle).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log('mochkila fdelet');
      }
    );
  }

  cloneNote(note: Note) {
    const clone = new Note();
    clone.libelle = note.libelle;
    clone.moyen = note.moyen;
    return clone;
  }
}
