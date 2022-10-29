import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cell } from 'src/domain/models/cell';
import { Matrix } from 'src/domain/models/matrix';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {
  @Input() matrix:Matrix = new Matrix();
  @Output() onCellChanged = new EventEmitter<{state:boolean,cell:Cell}>();
  size = 0;

  constructor() { }

  ngOnInit(): void {
    this.size = Math.sqrt(this.matrix.getArrayMatrix().length);
  }

  onStateChangeHandler(event:boolean,cell:Cell){
    this.onCellChanged.emit({state:event,cell});
  }

}
