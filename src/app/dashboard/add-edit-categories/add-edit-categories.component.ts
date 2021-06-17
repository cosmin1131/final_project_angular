import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-categories',
  templateUrl: './add-edit-categories.component.html',
  styleUrls: ['./add-edit-categories.component.css']
})
export class AddEditCategoriesComponent implements OnInit, OnChanges {
  @Input() selectedCategory: any;
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
      title: ['',Validators.minLength(3)]
    })
  }

  ngOnChanges(): void {
    if (this.selectedCategory != null) {
      this.formData = this.formBuilder.group({
        id: [this.selectedCategory.id],
        title: [this.selectedCategory.title, Validators.minLength(3)]
      });
    } else {
      this.setupForm();
    }
  }

  ngOnInit(): void {
  }

  private setupForm(): void {
    this.formData = this.formBuilder.group({
      id: [null],
      title: ['',Validators.minLength(3)]
    })
  }

  onDelete(): void {
    this.deleteEvent.emit(this.formData.controls['id'].value);
    this.setupForm();
  }

  onSubmit(): void {
    if(this.formData.controls['id'].value == null) {
      this.addEvent.emit(this.formData.value);
    } else {
      this.editEvent.emit(this.formData.value);
    }

    this.setupForm();
    this.selectedCategory = null;
  }

}
