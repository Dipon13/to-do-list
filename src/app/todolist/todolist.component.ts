import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
  ischecked : any
  val : any 
  index : number =0
  num : any 
  arr : any[]=[]
  arr2 : any[]=[]
  del : any[]=[]
  addtask(item:string){
    this.arr.push(item)
    console.log(this.arr)
  }

  removetask(){
    for (let j = 0; j < this.arr.length; j++){
      this.arr2[j]=this.arr[j];
    }
    for (let key = 0; key < this.del.length; key++){
      this.num=this.del[key]//accessing element of del array in "num"
        for (let ind = 0; ind < this.arr.length; ind++) {//ind is index of arr
          if(this.arr2[this.num]==this.arr[ind]){
            this.arr.splice(ind,1)
            break;
          };
      }
    }
    this.del=[]
  }

  checkbox(event : any){
    this.ischecked=event.target.checked
    this.val=event.target.name //task name being assigned to val..> will be required later to collect index on the basis of task name(index by value)
    this.index=this.arr.indexOf(this.val) // used here as said above.
    if (this.ischecked) {
       this.del.push(this.index)//collection of indexes whose element to be deleted as per main array
    }
    else
    {
      for (let i = 0; i < this.del.length; i++) { //this loop tracks the Unselected index and searches for it in "del" array to remove it if was present previously
        var element = this.del[i];
        if (element == this.index) {
          this.del.splice(i,1)
        }
      }
    }
  }
}
