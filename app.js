class TodoApp {
    constructor() {
      this.todolist = []
    }
    
    //add
    add(content){
      let item = {
        id: this.todolist.length,
        content: content,
        date: new Date()
      }
      this.todolist.push(item)
      
      return this.todolist
    }

    // Read
    read(id){
      return this.todolist[id];
    }

    //update
    update(id, update){
      this.todolist[id].content = update
      
      return this.todolist[id]
    }

    //delete
      delete(id) {
          this.todolist.splice(id - 1, 1)
          
          return this.todolist
      }

    
    
    


      
    

  }
  export default TodoApp