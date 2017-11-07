import { Component,EventEmitter,Output } from "@angular/core";


@Component({
    selector: 'app-buttons-component',
    templateUrl:'./buttons.component.html',
})

export class buttonscomponent {
@Output() private resetall:EventEmitter<void>;
@Output() private resettaps:EventEmitter<void>;
@Output() private resetpresses:EventEmitter<void>;

constructor() {
    this.resetall=new EventEmitter<void>();
    this.resettaps=new EventEmitter<void>();
    this.resetpresses=new EventEmitter<void>();
    

}

ResetAll(){
this.resetall.emit();
    }
Resettaps(){
this.resettaps.emit();
}
Resetpresses(){
this.resetpresses.emit();
}
}