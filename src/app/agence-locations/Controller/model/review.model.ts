import {Note} from './note.model';
import {Client} from './client.model';
import {Voiture} from './voiture.model';

export class Review {
   public note: Note;
   public client: Client;
   public voiture: Voiture;
   public objet: string;
   public corps: string;
}
