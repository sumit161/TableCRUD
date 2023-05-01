import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassenger } from 'src/app/shared/model/passenger';
import { PassengerService } from 'src/app/shared/services/passenger.service';

@Component({
  selector: 'app-pass-details',
  templateUrl: './pass-details.component.html',
  styleUrls: ['./pass-details.component.scss'],
})
export class PassDetailsComponent implements OnInit {
  @Input() passObj!: Ipassenger;
  @Output() emitPass: EventEmitter<Ipassenger> = new EventEmitter<Ipassenger>();
  isEditable: boolean = false;

  constructor(private _PassengerServiceField: PassengerService) {}
  OnClick(pname: string) {
    this.isEditable = !this.isEditable;
    this._PassengerServiceField.upDatePassengerullname(this.passObj.id, pname);
    console.log(pname);
  }
  OnRemove() {
    this.emitPass.emit(this.passObj)
    this._PassengerServiceField.RemovePassenger(this.passObj.id);
  }
  ngOnInit(): void {}
}
