import {
  Component,
  OnInit,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';


@Component({
  selector: 'app-boxy',
  templateUrl: './boxy.component.html',
  styleUrls: ['./boxy.component.css'],
  animations: [
    trigger('boxState', [
      state('inactive', style({

      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})

export class BoxyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  box = {
    state:"active"
  }

  boxOnOff(box){
    if(typeof box == "undefined"){
      this.boxOnOff(this.box);
      return;
    }

    if (box.state == "active"){
        box.state = "inactive";
    } else {
      box.state = "active";
    }
    
  }

  boxes = [{name:"send"}, {name:"submit"}, {name:"retry"}];
  numbers = [{label:1},{label:2},{label:1}];
  names = [{name:"one"}];
 
  numberMul(number){
    number.label=number.label*2; 
    console.log(number.label);
  }
  numberNull(index){
    this.numbers.splice(index,1);
  }
  numberNew(number){
    this.numbers.push(number);
  }

  newName(name){
    this.names.push(name);
  }
  

}
