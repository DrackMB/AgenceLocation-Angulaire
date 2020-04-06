import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Note} from '../model/note.model';
import {Client} from '../model/client.model';
import {Marque} from '../model/marque.model';
import {Categorie} from '../model/categorie.model';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  // tslint:disable-next-line:variable-name
  private _notesall: Array<Note>;
  private _note: Note;
  private _notes: Array<Note>;
  private _note1: Note;

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


  get note1(): Note {
    if (this._note1 == null) {
      this._note1 = new Note();
      return this._note1;
    }
  }
  set note1(value: Note) {
    this._note1 = value;
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
    this.http.get<Array<Note>>('http://localhost:9090/AgenceLocation/note/').subscribe(
      data => {
        this.notes = data;
      }, error => {
        console.log('error in note');
      }
    );
  }
  public deleteByReference(note: Note) {
    const index = this.notes.findIndex(v => v.libelle === note.libelle);
    if (index !== -1) {
      this.notes.splice(index, 1);
    }
  }

  public deleteNote(note: Note) {
    this.http.delete<number>('http://localhost:9090/AgenceLocation/note/libelle/' + note.libelle).subscribe(
      data => {
        this.deleteByReference(note);
        console.log(data);
      }, error => {
        console.log('mochkila fdelet');
      }
    );
  }
  public  findByLibelle(note: Note) {
    this.http.get<Note>('http://localhost:9090/agencelocation/categorie/cat/libelle/' + note.libelle).subscribe(
      data => {
        this.note = data;
        console.log('passe bien');
      },
      error => {
        console.log('erreur');
      }
    );
  }
   private cloneNote(note: Note) {
    const clone = new Note();
    clone.libelle = note.libelle;
    clone.moyen = note.moyen;
    return clone;
  }
}
