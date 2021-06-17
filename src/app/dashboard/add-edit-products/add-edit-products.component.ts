import { UserService } from 'src/app/user/user.service';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-edit-products',
  templateUrl: './add-edit-products.component.html',
  styleUrls: ['./add-edit-products.component.css'],
})
export class AddEditProductsComponent implements OnInit, OnChanges {
  @Input() selectedItem: any;
  @Input() categoryList: Array<any> = [];
  @Input() subCategoryList: Array<any> = [];
  @Output('editEvent') editEvent: EventEmitter<any>;
  @Output('addEvent') addEvent: EventEmitter<any>;
  @Output('deleteEvent') deleteEvent: EventEmitter<any>;
  formData: FormGroup;
  contor: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.addEvent = new EventEmitter();
    this.editEvent = new EventEmitter();
    this.deleteEvent = new EventEmitter();
    this.formData = this.formBuilder.group({
      id: [null],
      title: ['', Validators.minLength(4)],
      description: ['', Validators.minLength(10)],
      imageUrl: ['', Validators.required],
      price: [
        1,
        Validators.compose([Validators.min(1), Validators.max(10000)]),
      ],
      ownerId: [this.userService.getUser()?.id],
      categoryId: [null],
      subCategoryId: [null],
    });
  }

  ngOnInit(): void {
    //tipul returnat nu este obligatoriu, pt lifecycle
  }

  ngOnChanges(): void {
    //tipul returnat nu este obligatoriu, pt lifecycle
    if (this.selectedItem != null) {
      this.formData = this.formBuilder.group({
        id: [this.selectedItem.id],
        title: [this.selectedItem.title, Validators.minLength(4)],
        description: [this.selectedItem.description, Validators.minLength(10)],
        imageUrl: [this.selectedItem.imageUrl, Validators.required],
        price: [
          this.selectedItem.price,
          Validators.compose([Validators.min(1), Validators.max(10000)]),
        ],
        ownerId: [this.userService.getUser()?.id],
        categoryId: [this.selectedItem.category.id],
        subCategoryId: [this.selectedItem.subCategory.id],
      });
    } else {
      this.setupForm();
    }
  }

  private setupForm(): void {
    this.formData = this.formBuilder.group({
      id: [null],
      title: ['', Validators.minLength(4)],
      description: ['', Validators.minLength(10)],
      imageUrl: ['', Validators.required],
      price: [
        1,
        Validators.compose([Validators.min(1), Validators.max(10000)]),
      ],
      ownerId: [this.userService.getUser()?.id],
      categoryId: [null],
      subCategoryId: [null],
    });
  }

  onDelete(): void {
    this.deleteEvent.emit(this.formData.controls['id'].value);
    this.setupForm();
  }

  onSubmit(): void {
    // if(this.formData.controls["userName"].valid){
    //   console.log(this.formData.controls["userName"].value)
    // } else {
    //   console.log("input invalid")
    // }

    // if(this.formData.controls["phone"].valid){
    //   console.log(this.formData.controls["phone"].value)
    // } else {
    //   console.log("input invalid")
    // }

    // if(this.formData.controls["password"].valid){
    //   console.log(this.formData.controls["password"].value)
    // } else {
    //   console.log("input invalid")
    // }

    // console.log(this.formData.valid);

    // let formResult = this.formData.value;
    // console.log(formResult);
    // console.log(formResult["userName"])

    // cu ajutorul lui emit trimitem date in afara componentei
    // this.addEvent.emit(this.formData.value);
    // this.setupForm();

    if (this.formData.controls['id'].value == null) {
      this.formData.controls['id'].setValue(this.contor);
      this.contor += 1;
      this.addEvent.emit(this.formData.value);
    } else {
      this.editEvent.emit(this.formData.value);
    }

    this.setupForm();
    this.selectedItem = null;
  }
}
