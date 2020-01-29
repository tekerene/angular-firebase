import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
editBookForm: FormGroup;

success_msg:boolean = false;
success_update:boolean = false;
error_msg:boolean = false;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private db: AngularFirestore, private router: Router) { }

  ngOnInit() {
    this.editBookForm = this.fb.group({
      title: [''],
      authur: [''],
      edition: ['']
    })

    this.route.paramMap.subscribe( (params) => {
      this.db.collection("books").doc(params.get('id')).get().subscribe(
        cb => {
          this.editBookForm.setValue(cb.data());
          
          },
          error => {
            console.log(error)
          }
        
      )
    });
  }
onEdit(){
  this.route.paramMap.subscribe((params) => {
    this.db.collection("books").doc(params.get('id')).update(this.editBookForm.value)
    .then((docRef) => {
      console.log(docRef);
      this.success_update = true;
      this.router.navigate['/books'];
    })
    .catch((error) => {
      this.error_msg = true;
      console.log(error);
    })
  })
}
}
