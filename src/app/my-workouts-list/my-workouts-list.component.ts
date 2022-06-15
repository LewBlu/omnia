import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-workouts-list',
  templateUrl: './my-workouts-list.component.html',
  styleUrls: ['./my-workouts-list.component.css']
})
export class MyWorkoutsListComponent implements OnInit, OnDestroy {
  workouts: any = [];

  workoutSubscription!: Subscription;
  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.workoutSubscription = this.firestore.collection('workouts').valueChanges().subscribe(result => {
      result.forEach((object: any) => {
        const newObject = object;
        newObject.date = object.date.toDate().toLocaleDateString("en-GB");
        this.workouts.push(newObject);
      });
    });
  }

  ngOnDestroy(): void {
    this.workoutSubscription.unsubscribe();
  }
}
