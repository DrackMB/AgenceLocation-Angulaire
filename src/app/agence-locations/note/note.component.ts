import { Component, OnInit } from '@angular/core';
import {NoteService} from '../Controller/service/note.service';
import {Note} from '../Controller/model/note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor(private noteService: NoteService ) { }

  get note(): Note {
     return this.noteService.note; }

     public save() {
    return this.noteService.save();
     }
     public delete(note: Note) {
      this.noteService.deleteNote(this.note);
     }
  get notes(): Array<Note> {
    return this.noteService.notes;
  }
  get notesall(): Array<Note> {
    return this.noteService.notesall;
  }


    ngOnInit(): void {
    this.noteService.findAll();
  }

}
