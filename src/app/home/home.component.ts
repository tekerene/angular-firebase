import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  students: Observable<any>;
  items: any[];
  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.students = this.db.collection('items').valueChanges();
    this.students.subscribe(
      (data) => {
        this.items = data;
        console.log(data)
      },
      (errors) => console.log(errors)
    )
    console.log(this.items);
  }

  
}
