import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.css"],
})
export class DialogComponent implements OnInit {
  addTasks!: FormGroup;
  tasks: any = [];
  isShow = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addTasks = this.formBuilder.group({
      task: ["", Validators.required],
    });
  }
  onSubmit(form: FormGroup) {
    console.log("You entered Task:", form.value.task);
    this.tasks.push(form.value.task);
  }

  onDelete(i: number) {
    this.tasks.splice(i, 1);
  }
  onEdit(i: number) {
    let indexValue = this.tasks.indexOf(i);
    this.tasks[indexValue].isShow = !this.tasks[indexValue].isShow;
  }
}

//   updateValue(data){
//     // retriving index from array
//     let indexValue = this.items.indexOf(data);
//    // changing specific element in array
//     this.items[indexValue].isShow =  !this.items[indexValue].isShow;
// }
