<template>
    <div
        class="filter-nav mt-10 flex lg:hidden shadow-lg shadow-gray-800/300 justify-center rounded-lg text-gray-400 font-bold items-center bg-white p-4 mb-12">
        <button class="nav-item ease-in-out duration-300" :class="{ 'pr-4': true, 'text-primary': filter === 'all' }"
            @click="$emit('update:filter', 'all')">All</button>
        <button class="nav-item ease-in-out duration-300" :class="{ 'pr-4': true, 'text-primary': filter === 'active' }"
            @click="$emit('update:filter', 'active')">Active</button>
        <button class="nav-item ease-in-out duration-300" :class="{ '': true, 'text-primary': filter === 'done' }"
            @click="$emit('update:filter', 'done')">Done</button>
    </div>
</template>
  
<script setup>
defineProps(['filter'])
</script>
  