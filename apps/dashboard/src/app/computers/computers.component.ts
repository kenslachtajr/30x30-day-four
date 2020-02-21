import { Component, OnInit } from '@angular/core';
import {
  Computer,
  ComputersService,
  emptyComputer,
  NotifyService
} from '@computers/core-data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'computers-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})
export class ComputersComponent implements OnInit {
  computers$;
  selectedComputer: Computer;
  form: FormGroup;

  constructor(
    private computersService: ComputersService,
    private formBuilder: FormBuilder,
    private notify: NotifyService
  ) {}

  resetComputer() {
    this.form.reset();
    this.selectComputer(emptyComputer);
  }

  ngOnInit() {
    this.getComputers();
    this.initForm();
    this.resetComputer();
  }

  selectComputer(computer: Computer) {
    this.selectedComputer = computer;
    this.form.patchValue(computer);
  }

  getComputers() {
    this.computers$ = this.computersService.all();
  }

  saveComputer() {
    if (!this.form.value.id) {
      this.createComputer();
    } else {
      this.updateComputer();
    }
  }

  updateComputer() {
    this.computersService.update(this.form.value).subscribe(() => {
      this.getComputers();
      this.resetComputer();
    });
    this.notify.notification(`you have updated ${this.form.value.title}`);
  }

  createComputer() {
    this.computersService.create(this.form.value).subscribe(() => {
      this.getComputers();
      this.resetComputer();
    });
    this.notify.notification(`you have updated ${this.form.value.title}`);
  }

  deleteComputer(computer) {
    this.computersService
      .delete(computer.id)
      .subscribe(() => this.getComputers());
    this.notify.notification(`You have deleted ${computer.name}`);
  }

  cancel() {
    this.resetComputer();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      make: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required])],
      ram: ['', Validators.compose([Validators.required])],
      isDesktop: ['', Validators.compose([Validators.required])]
    });
  }
}
