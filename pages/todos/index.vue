<script setup lang="ts">
    const counter = useState('counter', () => 0);

    const todoStore = useTodoStore();

    await callOnce(todoStore.fetchTodos);

</script>

<template>
    <h1>Todos</h1>

    <p>counter: {{ counter }}</p>

    <button @click="counter++">click</button>

    <li v-for="todo in todoStore.todos">
        {{ todo.title }}
    </li>
</template>
