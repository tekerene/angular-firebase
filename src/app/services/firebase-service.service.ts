import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Book } from '../book'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
status;
  constructor(private db: AngularFirestore) { }
  createNewBook(book: Book) {
    this.db.collection("users").add(book)
  .then(function(docRef) {
    return {
      id: docRef.id,
      status: 200,
      message: "Book was successfully Created"
    }
      // console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    return { 
      error, 
      status: 500,
      message: "ohhs... an error occured"
    }
      // console.error("Error adding document: ", error);
  });
  }
getAllBooks(): Observable<any> {
  return this.db.collection("books").snapshotChanges();
}
createsNewBook(){

}
}
