import { Component, OnInit, OnDestroy} from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from 'rxjs';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit, OnDestroy {
  faPlus = faPlus;
  editMode: boolean = false; // Used to manage what form type should be displayed
  exerciseForm!: FormGroup;
  
  exerciseList: any[] = [];
  selectedExercise: any = null;
  exerciseSub: Subscription|null = null;

  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.exerciseSub = this.firestore.collection('exercises').valueChanges({idField: 'id'}).subscribe(exercises => {
      this.exerciseList = exercises;
    });

    this.exerciseForm = new FormGroup({
      name : new FormControl(null, Validators.required),
      description : new FormControl(null)
    });
  }

  // Retrieve details of selected exercise; Contains id:string, name:string, description:string
  exerciseSelected(event:any) {
    this.editMode = true;
    this.selectedExercise = event;
    this.exerciseForm.patchValue({
      name: event.name,
      description: event.description
    });
  }

  // Save the details from the form. If in editMode then update document; else create a new document
  submitForm() {
    if(this.exerciseForm.valid) {
      if(!this.editMode) {
        this.firestore.collection('exercises').add(this.exerciseForm.value);
      } else {
        this.firestore.doc('exercises/'+this.selectedExercise.id).update(this.exerciseForm.value);
      }
    }
    this.clearForm();
  }

  deleteExercise() {
    this.firestore.doc('exercises/'+this.selectedExercise.id).delete();
    this.clearForm();
  }

  clearForm() {
    this.exerciseForm.reset();
    this.selectedExercise = null;
    this.editMode = false;
  }

  ngOnDestroy() {
    if(this.exerciseSub != null) {
      this.exerciseSub.unsubscribe();
    }
  }
}
