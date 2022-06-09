import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit, OnDestroy {
  labelArray: string[] = [];
  weightArray: number[] = [];

  userWeightSubscription!: Subscription;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.userWeightSubscription = this.firestore.collection('user_weight', ref => ref.orderBy('date')).valueChanges().subscribe(result => {
      this.labelArray = [];
      this.weightArray = [];
      result.forEach((object: any) => {
        const date = object.date.toDate().toLocaleDateString("en-GB");
        this.labelArray.push(date);
        this.weightArray.push(object.weight);
      });
    });
  }

  ngOnDestroy(): void {
    if(this.userWeightSubscription != null) {
      this.userWeightSubscription.unsubscribe();
    }
  }
}
