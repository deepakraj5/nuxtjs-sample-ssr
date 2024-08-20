<script setup lang="ts">
    const counter = useState('counter', () => 0);

    const todos = useTodoStore();

    await callOnce(todos.fetch)

</script>

<template>
    <h1>Todos</h1>

    <p>counter: {{ counter }}</p>

    <button @click="counter++">click</button>

    <li v-for="todo in todos">
        <!-- {{ todo. }} -->
    </li>
</template>
