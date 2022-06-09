import { Component, OnInit } from '@angular/core';
import { faWeight, faDumbbell,faChartLine, faGears } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faWeight = faWeight;
  faDumbbell = faDumbbell;
  faChartLine = faChartLine;
  faGears = faGears;

  constructor() { }

  ngOnInit(): void {}
}
