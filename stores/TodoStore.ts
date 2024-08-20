export type Todo = {
    id: number,
    title: string
}

export const useTodoStore = defineStore('todoStore', {
    state: () => ({
        todos: [] as Todo[]
    }),
    actions: {
        async fetch() {
            const response: Todo[] = await $fetch('https://jsonplaceholder.typicode.com/todos');
            // const data = await response.json();

            this.todos = response;
        }
    }
})
