import { Component, OnInit } from '@angular/core';
import {ReviewService} from '../Controller/service/review.service';
import {Review} from '../Controller/model/review.model';
import {Client} from '../Controller/model/client.model';
import {VoitureService} from '../Controller/service/voiture-service';
import {NoteService} from '../Controller/service/note.service';
import {Note} from '../Controller/model/note.model';
import {ClientService} from '../Controller/service/client.service';
import {Voiture} from '../Controller/model/voiture.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor( private  reviewService: ReviewService , private voitureService: VoitureService, private noteService: NoteService , private clientService: ClientService) { }

  get voitureResult(): Array<Voiture> {
    return this.voitureService.voitureResult;
  }
  get clientsall(): Array<Client> {
    return this.clientService.clients;
  }
  get notes(): Array<Note> {
    return this.noteService.notes;
  }
  public findall() {
    return this.voitureService.findAll();
  }
  get review(): Review {
    return this.reviewService.review;
  }
  get clients(): Array<Review> {
    return  this.reviewService.reviews;
  }
  public save() {
    return this.reviewService.save();
  }
  get reviews(): Array<Review> {
    return this.reviewService.reviews;
  }
  public findallreview() {
    return this.reviewService.findAll();
  }
   public delete() {
    return this.reviewService.deleteReview();
   }
    ngOnInit(): void {
  }

}
