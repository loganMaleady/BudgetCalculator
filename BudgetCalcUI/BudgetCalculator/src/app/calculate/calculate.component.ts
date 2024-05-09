import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Job } from '../Models/Job';
import { MatTableModule } from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent {
  jobs: Job[] = [
    new Job("Paychex", "Hourly", "Bi-Weekly", 20.00),
    new Job("Side Hustle", "Hourly", "Weekly", 25.50),
  ];

  


}
