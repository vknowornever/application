import { Component, OnInit } from '@angular/core';

class Registration {
  constructor(
    public name:string = '',
    public desc:string = '',
    public addr:string = '',
    public city:string = '',
    public state:string = '',
    public zip:string = '',
    public country:string = '',
    public phone1:string = '',
    public phone2:string = '',
    public fax:string = '',
    public website:string = '',
     ) {}
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // It maintains list of Registrations
  registrations: Registration[] = [];
  // It maintains registration Model
  regModel: Registration;
  // It maintains registration form display status. By default it will be false.
  showNew: Boolean = false;
  // It will be either 'Save' or 'Update' based on operation.
  submitType: string = 'Save';
  // It maintains table row index based on selection.
  selectedRow: number;
  // It maintains Array of countries.
  constructor() {
    // Add default registration data.
    this.registrations.push(new Registration("bangalore","offshore development","39 pipline","bangalore","karnataka","560086","india","080-61405806","9739570917","    ","www.skycliff.com"));
    this.registrations.push(new Registration("bangalore","offshore development","39 pipline","bangalore","karnataka","560086","india","080-61405806","9739570917","    ","www.skycliff.com"));
    this.registrations.push(new Registration("bangalore","offshore development","39 pipline","bangalore","karnataka","560086","india","080-61405806","9739570917","    ","www.skycliff.com"));
    this.registrations.push(new Registration("bangalore","offshore development","39 pipline","bangalore","karnataka","560086","india","080-61405806","9739570917","    ","www.skycliff.com"));

  }

  ngOnInit() {}

  // This method associate to New Button.
  onNew() {
    // Initiate new registration.
    this.regModel = new Registration();
    // Change submitType to 'Save'.
    this.submitType = 'Save';
    // display registration entry section.
    this.showNew = true;
  }

  // This method associate to Save Button.
  onSave() {
    if (this.submitType === 'Save') {
      // Push registration model object into registration list.
      this.registrations.push(this.regModel);
    } else {
      // Update the existing properties values based on model.
      this.registrations[this.selectedRow].name = this.regModel.name;
      this.registrations[this.selectedRow].desc = this.regModel.desc;
      this.registrations[this.selectedRow].addr = this.regModel.addr;
      this.registrations[this.selectedRow].city = this.regModel.city;
      this.registrations[this.selectedRow].state = this.regModel.state;
      this.registrations[this.selectedRow].country = this.regModel.country;
      this.registrations[this.selectedRow].phone1 = this.regModel.phone1;
      this.registrations[this.selectedRow].phone2 = this.regModel.phone2;
      this.registrations[this.selectedRow].fax = this.regModel.fax;
      this.registrations[this.selectedRow].website = this.regModel.website;
    }
    // Hide registration entry section.
    this.showNew = false;
  }

  // This method associate to Edit Button.
  onEdit(index: number) {
    // Assign selected table row index.
    this.selectedRow = index;
    // Initiate new registration.
    this.regModel = new Registration();
    // Retrieve selected registration from list and assign to model.
    this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
    // Change submitType to Update.
    this.submitType = 'Update';
    // Display registration entry section.
    this.showNew = true;
  }

  // This method associate to Delete Button.
  onDelete(index: number) {
    // Delete the corresponding registration entry from the list.
    this.registrations.splice(index, 1);
  }

  // This method associate toCancel Button.
  onCancel() {
    // Hide registration entry section.
    this.showNew = false;
  }

}
