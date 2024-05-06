#made a custom data structure, a queue, using objects instead of arrays

class Queue {
    constructor() {
        this.obj={}
        this.rear=0
        this.front=0
    }
    
    Enqueue(element) {
        this.obj[this.rear]=element
        this.rear++
    }

    Dequeue() {
        const item = this.obj[this.front]
        delete this.obj[this.front]
        this.front++
        return item
    }

    Size() {
        return this.rear-this.front
    }

    IsEmpty() {
        return this.rear-this.front === 0
    }

    Peek() {
        if (this.IsEmpty){
            return null
        }
        return this.obj[this.front]
    }

    Print (){
        console.log(this.obj)
    }
    
}

const queue=new Queue()

queue.Enqueue("Rakesh")
queue.Enqueue("Ramesh")
queue.Enqueue("Sarojana")
console.log(queue.Peek())
console.log(queue.Size())

queue.Dequeue()
queue.Dequeue()
queue.Dequeue()
console.log(queue.IsEmpty())
console.log(queue.Peek())
console.log(queue.Size())

queue.Print()
  
