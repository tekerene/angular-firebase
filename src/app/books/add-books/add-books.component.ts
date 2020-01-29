import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { FirebaseServiceService } from 'src/app/services/firebase-service.service';
import { AngularFirestore } from '@angular/fire/firestore';




@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
createdBook;
  bookForm: FormGroup;
  success = false;
  error = false;

  constructor(private fb: FormBuilder, private db: AngularFirestore, private fbs: FirebaseServiceService) { }

  ngOnInit() {
    this.bookForm = this.fb.group({
      'title': ['', Validators.required],
      'authur': ['', Validators.required],
      'edition': ['', Validators.required]
    });
  }

  onSubmit(){
    console.log(this.bookForm.value);
    this.db.collection("books").add(this.bookForm.value);
    // then((docRef) => {

    //   console.log(docRef.id);
    //   this.success = true;
    // })
    // catch((error) => {
    //   this.error = true;
    //   console.log(error);
    // })
    // this.createdBook = this.fbs.createNewBook(this.bookForm.value);

    // if(this.createdBook.status === 500){
    //   // alert(this.createdBook.message);
    //   this.success = true;
    // } else {
    //   alert(this.createdBook.message);
    //   this.error = true;
    // }
  }

}
