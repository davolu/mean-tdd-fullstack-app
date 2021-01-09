import { expect } from "chai";
import TodoApp from './app.js'
describe("app", function() {
  let todoApp;
  beforeEach(()=>{
    todoApp = new TodoApp
    todoApp.add('My first task')
  })
  
  it("todolist should be an array", function() {
    expect(todoApp.todolist).to.be.an('array');
  });


  it("adds todo", function() {
    todoApp.add('My first task')
    expect(todoApp.todolist.length).to.equal(2)
  });
  
  it("has content, date, and id", function(){
    expect(todoApp.todolist[0].content).to.equal("My first task")
    expect(todoApp.todolist[0].date).not.to.equal(undefined)
    expect(todoApp.todolist[0].id).to.equal(0)
  });

  it("reads", function() {
    expect(todoApp.read(0).content).to.equal("My first task")
  });
  it("updates (update)", function() {
    todoApp.update(0, "My first task")
    expect(todoApp.read(0).content).to.equal('My first task')
  });

  it("deletes (delete)", function() {
    todoApp.delete(1)
    expect(todoApp.todolist.length).to.equal(0)
  });
 
 


  

});