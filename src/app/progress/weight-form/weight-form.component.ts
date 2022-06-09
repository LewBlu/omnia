import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import firebase  from 'firebase/compat/app';

@Component({
  selector: 'app-weight-form',
  templateUrl: './weight-form.component.html',
  styleUrls: ['./weight-form.component.css']
})
export class WeightFormComponent implements OnInit {
  checkinForm!: FormGroup;
  formError: boolean = false;
  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.checkinForm = new FormGroup({
      date: new FormControl(new Date().toLocaleDateString('en-CA'), Validators.required),
      weight: new FormControl(null, Validators.required)
    });
  }

  submitForm(){
    if(this.checkinForm.valid) {
      const formData = this.checkinForm.value;
      formData.user_id = 'User1'
      formData.date = firebase.firestore.Timestamp.fromDate(new Date(formData.date));
      this.firestore.collection('user_weight').add(formData);
    } else {
      this.formError = true;
    }
  }
}
