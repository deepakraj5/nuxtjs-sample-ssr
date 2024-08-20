export type Todo = {
    id: number,
    title: string
}

export const useTodoStore = defineStore('todoStore', {
    state: () => ({
        todos: [] as Todo[]
    }),
    actions: {
        async fetchTodos() {
            const response: Todo[] = await $fetch('https://jsonplaceholder.typicode.com/todos');

            this.todos = response;
        }
    }
})
