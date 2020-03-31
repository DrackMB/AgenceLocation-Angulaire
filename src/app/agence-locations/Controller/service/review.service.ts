import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Review} from '../model/review.model';
import {Voiture} from '../model/voiture.model';
import {Note} from '../model/note.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private _review: Review;
  private _reviews: Array<Review>;


  get review(): Review {
    if (this._review == null) {
      this._review = new Review();
    }
    return this._review;
  }

  set review(value: Review) {
    this._review = value;
  }


  get reviews(): Array<Review> {
    if (this._reviews == null) {
      this._reviews = new Array<Review>();
    }
    return this._reviews;
  }

  set reviews(value: Array<Review>) {
    this._reviews = value;
  }

  constructor(private http: HttpClient ) { }

  public findAll() {
    this.http.get<Array <Review>> ('http://localhost:9090/agencelocation/review/').subscribe(
      data => {
        console.log( data);
        this._reviews = data;
      }, error => {
        console.log('error');

      }
    );
  }
  public save() {
    this.http.post<number>('http://localhost:9090/agencelocation/review/', this.review).subscribe(
      data => {
        if (data > 0) {
          console.log('tout est bien');
        }
      }, error => {
        console.log('il existe un erreur quelque part ');
      }
    );
  }
  public deleteReview() {
    this.http.delete<number>('http://localhost:9090/agencelocation/review/' + this.review ).subscribe(
      data => {
        this.reviews.push(this.cloneNote(this.review));
        this.review = null;
        console.log(data);
      }, error => {
        console.log('error with delete');
      }
    );
  }
   cloneNote(review: Review) {
    const clone = new Review();
    clone.client = review.client;
    clone.note = review.note;
    clone.voiture = review.voiture;
    clone.corps = review.corps;
    return clone;
  }
}
