import { Component, ViewChild } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Job } from '../Models/Job';
import { MatTableModule } from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule, FormGroupDirective} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class CalculateComponent {

  
  
  jobs: Job[] = [
    new Job("Paychex", "Hourly", "Bi-Weekly", "Hr", 20.00, 0),
    new Job("Side Job", "Salary", "Weekly", "Week", 825.67, 1),
  ];

  id = 2
  step = 0;
  currName: string = "";
  currPayType: string = "";
  currPayTime: string = "";
  currWage: number = 0;

 //@ViewChild('myForm', {static: false}) myForm: NgForm;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step = 0;
  }

  

  submit(form: NgForm){
    var payPeriod = "";
    if(this.currPayType == "Hourly"){
      payPeriod = "Hr";
    }
    else if(this.currPayTime == "Weekly"){
      payPeriod = "Week";
    }
    else if(this.currPayTime == "Bi-Weekly"){
      payPeriod = "Two Weeks";
    }
    else if(this.currPayTime == "Monthly"){
      payPeriod = "Month";
    }
    var job = new Job(this.currName, this.currPayType, this.currPayTime, payPeriod, this.currWage, this.id);
    this.jobs.push(job); 
    this.id++;
    this.nextStep()
    form.resetForm();
    this.currName ="";
    this.currPayType = "";
    this.currPayTime = "";
    this.currWage = 0;
    
  }

  
  delete(id: number){
    this.jobs = this.jobs.filter(job => job.id !== id)
  }

  canSubmit(): boolean{
    return !(this.currName != "" && this.currPayTime !="" && this.currPayType !="" && this.currWage != null)
  }

}
