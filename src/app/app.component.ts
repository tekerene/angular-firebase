import { Component } from '@angular/core';
// import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-firebase-app';

  
  constructor(private db: AngularFirestore) {}

students: Observable<any>;
items: any[];

 ngOnInit(){
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
