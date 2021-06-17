import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-edit-sub-categories',
  templateUrl: './add-edit-sub-categories.component.html',
  styleUrls: ['./add-edit-sub-categories.component.css'],
})
export class AddEditSubCategoriesComponent implements OnInit {
  @Input() selectedSubCategory: any;
  @Output('editEvent') editEvent: EventEmitter<any>;
  @Output('addEvent') addEvent: EventEmitter<any>;
  @Output('deleteEvent') deleteEvent: EventEmitter<any>;
  formData: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.addEvent = new EventEmitter();
    this.editEvent = new EventEmitter();
    this.deleteEvent = new EventEmitter();
    this.formData = this.formBuilder.group({
      id: [null],
      title: ['', Validators.minLength(3)],
    });
  }

  ngOnChanges(): void {
    if (this.selectedSubCategory != null) {
      this.formData = this.formBuilder.group({
        id: [this.selectedSubCategory.id],
        title: [this.selectedSubCategory.title, Validators.minLength(3)],
      });
    } else {
      this.setupForm();
    }
  }

  ngOnInit(): void {}

  private setupForm(): void {
    this.formData = this.formBuilder.group({
      id: [null],
      title: ['', Validators.minLength(3)],
    });
  }

  onDelete(): void {
    this.deleteEvent.emit(this.formData.controls['id'].value);
    this.setupForm();
  }

  onSubmit(): void {
    if (this.formData.controls['id'].value == null) {
      this.addEvent.emit(this.formData.value);
    } else {
      this.editEvent.emit(this.formData.value);
    }

    this.setupForm();
    this.selectedSubCategory = null;
  }
}
