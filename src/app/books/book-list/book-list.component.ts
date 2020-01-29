import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Book } from '../../book'
import { Router } from '@angular/router';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: any[] = [];
  myForm: FormGroup;
  dataReady: boolean = true;

  constructor(private db: AngularFirestore, private route: Router) { }

  ngOnInit() {
    this.getData();
   
  }
  getData(){
    this.db.collection("books").get()
    .subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data}`);
        this.books.push({
          id: doc.id,
          data: doc.data()
        })
      });
      console.log(this.books);
      this.dataReady = false;
    })
  }
onDelete(id){
  // this.db.collection("books").doc(id)
  console.log(id)
  this.db.collection("books").doc(id).delete().then(function() {
    console.log("Document succewsfully deleted");
  })
  .catch(function(){
    console.error("Error romoving Document");
  })
}
}
