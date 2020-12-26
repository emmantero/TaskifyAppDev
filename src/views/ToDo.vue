<template>
    <div id="todo">
        <div class="container">
            <h1>My ToDo List</h1>
            <input type="text" placeholder="Enter your task" v-model="newTask">
            <button @click="addTask">Add Task</button>
            <button class="delete-all" @click="deleteAll">Delete All</button>

            <div v-for="(task,index) in tasks" :key="index">
                <div class="task">
                 {{task.description}}
                <span><button class="delete" @click="deleteTask(index)">Delete</button></span>
                <span><button class="delete">Done</button></span>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ToDo',
    data(){
        return{
            newTask: "",
            tasks: []
        }
    },
    methods:{
        addTask(){
            this.tasks.push({
                description: this.newTask
            }),
            this.newTask = ''
        },
        deleteTask(index){
            this.tasks.splice(index,1);
        },
        deleteAll(){
            this.tasks = [];
        }
    }
}
</script>
