<template>
    <div class="filter-nav flex justify-between rounded-b-lg text-gray-500 items-center bg-white p-4">
        <span>{{ remainingTodos }} items left</span>
        <div class="hidden lg:block">
            <button class="nav-item hover:text-gray-600 ease-in-out duration-300"
                :class="{ 'pr-4': true, 'text-primary': filter === 'all' }"
                @click="$emit('update:filter', 'all')">All</button>
            <button class="nav-item hover:text-gray-600 ease-in-out duration-300"
                :class="{ 'pr-4': true, 'text-primary': filter === 'active' }"
                @click="$emit('update:filter', 'active')">Active</button>
            <button class="nav-item hover:text-gray-600 ease-in-out duration-300"
                :class="{ '': true, 'text-primary': filter === 'done' }"
                @click="$emit('update:filter', 'done')">Done</button>
        </div>
        <button @click="$emit('clearCompleted')">Clear Completed</button>
    </div>
</template>
  
<script setup>
defineProps(['filter', 'remainingTodos'])
</script>
    