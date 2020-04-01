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
     public findall() {

     }
     public delete(libelle: string) {
      this.noteService.deleteNote();
     }
  get notes(): Array<Note> {
    return this.noteService.notes;
  }


    ngOnInit(): void {
      this.noteService.findAll();
  }

}
