<template>
    <div id="todo">
        <div class="nav">
            <b-navbar default="true">
                <b-navbar-brand href="#">Taskify</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item>
                        <router-link to="/schedule">Scheduled Tasks</router-link>
                    </b-nav-item>
                    <b-nav-item href="#">
                        <router-link to="/todo">To-Do List</router-link>
                    </b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template #button-content>
                        <em>Account</em>
                    </template>
                    <b-dropdown-item><router-link to="/">Sign Out</router-link></b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
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
            if (this.newTask) {
                this.tasks.push({
                    description: this.newTask
                }),
                this.newTask = '';
            }
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

<style scoped>
    .nav{
        background-color: #FAD744;
        /* position: relative; */
    }

    b-navbar {
        background-color: #FAD744;
    }

    b-nav-item {
        color: black;
    }

    .container {
        padding-top: 80px;
    }

    .ml-auto {
        float: right;
    }
</style>