import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercise-item',
  templateUrl: './exercise-item.component.html',
  styleUrls: ['./exercise-item.component.css']
})
export class ExerciseItemComponent implements OnInit {
  @Input() exercise: any;
  @Output() onSelectedExercise = new EventEmitter();
  constructor() { }

  ngOnInit(): void {}

  selectExercise() {
    this.onSelectedExercise.emit(this.exercise);
  }
}
