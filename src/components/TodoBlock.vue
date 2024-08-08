<template>
    <section class="container">
        <div class="flex justify-center bg-bg-mobile lg:bg-bg-desktop bg-no-repeat bg-cover h-48 mx-[-20px] pt-6 px-5">
            <div class="w-full max-w-lg">
                <div class="uppercase font-sans text-2xl lg:text-3xl text-white font-bold tracking-widest mb-6">
                    Todo
                </div>
                <div class="block w-full text-lg p-4 px-6 text-dark bg-white rounded-lg mb-4">
                    <form class="flex" @submit.prevent="addTodo">
                        <span class="border-4 mr-4 border-indigo-500/75" :class="`bubble border-slate-300`"></span>
                        <input type="text" name="content" id="content" placeholder="Create a new todo..."
                            v-model="inputContent" />
                    </form>
                </div>
                <div class="todo-list shadow-lg shadow-gray-800/300">
                    <div class="list rounded-lg" id="todo-list">
                        <div v-for="todo in filteredTodos" :key="todo.createdAt"
                            :class="`todo-item border-b shadow-slate-100 border-gray-300 p-4 px-6  first:rounded-t-lg flex items-center bg-white p-4  ${todo.done && 'line-through text-gray-300 done'}`">
                            <label class="todo-label">
                                <input type="checkbox" v-model="todo.done" />
                                <span class="border-4 border-indigo-500/75" :class="`bubble border-slate-300`"></span>
                            </label>
                            <div class="todo-content">
                                <input type="text" class="text-xl"
                                    :class="`${todo.done && 'done line-through text-gray-300'}`" v-model="todo.content" />
                            </div>
                            <div class="actions lg:opacity-0 ease-in-out duration-300">
                                <button class="cursor-pointer" @click="removeTodo(todo)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                                        <path fill="#494C6B" fill-rule="evenodd"
                                            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <FilterNavDesktop :filter="filter" :remainingTodos="remainingTodos" @update:filter="filter = $event"
                            @clearCompleted="clearCompleted" />
                    </div>
                </div>
                <FilterNav :filter="filter" @update:filter="filter = $event" />
                <div class="text-center text-gray-400">
                    Drag and drop to reorder list
                </div>
            </div>
        </div>
    </section>
</template>
  
<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import FilterNav from './FilterNav.vue'
import FilterNavDesktop from './FilterNavDesktop.vue'

const todos = ref([])
const inputContent = ref('')
const filter = ref('all')

const todosAsc = computed(() => todos.value.sort((a, b) => a.createdAt - b.createdAt))

const filteredTodos = computed(() => {
    if (filter.value === 'all') {
        return todosAsc.value
    } else if (filter.value === 'active') {
        return todosAsc.value.filter(todo => !todo.done)
    } else if (filter.value === 'done') {
        return todosAsc.value.filter(todo => todo.done)
    }
    return todosAsc.value
})

const remainingTodos = computed(() => todos.value.filter(todo => !todo.done).length)

watch(todos, (newVal) => {
    localStorage.setItem('todos', JSON.stringify(newVal))
}, {
    deep: true
})

const addTodo = () => {
    if (inputContent.value.trim() === '') {
        return
    }

    todos.value.push({
        content: inputContent.value,
        done: false,
        editable: false,
        createdAt: new Date().getTime()
    })

    inputContent.value = ''
}

const removeTodo = (todo) => {
    todos.value = todos.value.filter((t) => t !== todo)
}

const clearCompleted = () => {
    todos.value = todos.value.filter(todo => !todo.done)
}

onMounted(() => {
    todos.value = JSON.parse(localStorage.getItem('todos')) || []
})
</script>
  