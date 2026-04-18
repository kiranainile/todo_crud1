import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Iflowers, Itodo } from '../shared/modules/todo.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @ViewChild('todosItem') todosItemRef!: ElementRef
  @ViewChild('flowerItem') todoItemRef!: ElementRef

  isTodoEditMode: boolean = false
  isFlowerEditMode: boolean = false

  todoArr = [
    { todoItem: "js", todoId: '123' },
    { todoItem: "ts", todoId: '124' },
    { todoItem: "Angular", todoId: '125' },
    { todoItem: "react", todoId: '89234' }
  ];

  todoArr1 = [
    { todoItem: "Rose", todoId: '12093' },
    { todoItem: "Sunflower", todoId: '1484' },
    { todoItem: "Lotus", todoId: '1765' },
    { todoItem: "Mogra", todoId: '1264' }
  ];

  editObj!: Itodo;
  editObj1!: Iflowers;

  constructor() {}

  ngOnInit(): void {}

  // ================= TODO =================

  todoSub(){
    let val: string = this. todosItemRef.nativeElement.value   

    if(val.length > 0){
      let newTodo: Itodo = {
        todoItem: val,
        todoId: Date.now().toString(),
      }

      this.todoArr.push(newTodo)
      this. todosItemRef.nativeElement.value = ''   
    }
  }

  onEdit(todos: Itodo){
    this.isTodoEditMode = true
    this.editObj = todos

    this.todosItemRef.nativeElement.value = this.editObj.todoItem   
  }

  onUpdate(){
    let UPDATE_ID = this.editObj.todoId

    let UPDATE_OBJ: Itodo = {
      todoItem: this. todosItemRef.nativeElement.value,   
      todoId: UPDATE_ID,
    }

    let getIndex = this.todoArr.findIndex(n => n.todoId === UPDATE_ID)
    this.todoArr[getIndex] = UPDATE_OBJ

    this. todosItemRef.nativeElement.value = ''
    this.isTodoEditMode = false
  }

  onRemove(id: string){
    let getIndex = this.todoArr.findIndex(n => n.todoId === id)
    this.todoArr.splice(getIndex, 1)
  }


  // ================= FLOWER =================

  todoSubb(){
    let val: string = this.todoItemRef.nativeElement.value

    if(val.length > 0){
      let newTodo1: Iflowers = {
        todoItem: val,
        todoId: Date.now().toString(),
      }

      this.todoArr1.push(newTodo1)
      this.todoItemRef.nativeElement.value = ''
    }
  }

  onEditi(todos: Iflowers){
    this.isFlowerEditMode = true
    this.editObj1 = todos

    this.todoItemRef.nativeElement.value = this.editObj1.todoItem
  }

  onUpdatei(){
    let UPDATE_ID = this.editObj1.todoId

    let UPDATE_OBJ: Iflowers = {
      todoItem: this.todoItemRef.nativeElement.value,
      todoId: UPDATE_ID,
    }

    let getIndex = this.todoArr1.findIndex(n => n.todoId === UPDATE_ID)
    this.todoArr1[getIndex] = UPDATE_OBJ

    this.todoItemRef.nativeElement.value = ''
    this.isFlowerEditMode = false
  }

  onRemovei(id: string){
    let getIndex = this.todoArr1.findIndex(n => n.todoId === id)
    this.todoArr1.splice(getIndex, 1)
  }

}