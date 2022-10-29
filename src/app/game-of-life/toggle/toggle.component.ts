import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
  @Input() status:boolean = false;
  @Output() onStateChange = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  public onClick(){
    this.onStateChange.emit(!this.status);
  }

}
