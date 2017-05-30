var app = new Vue({
    data: {
        todos: [],
        newTodo: ''
    },
    methods: {
        addTodo: function() {
            if (!this.newTodo) return;
            this.todos.push({
                id: Math.random(),
                title: this.newTodo,
                completed: false
            });
            this.newTodo = '';
        },
        removeTodo: function (todo) {
            this.todos.splice(this.todos.indexOf(todo), 1)
        }
    }
});

app.$mount('.todoapp');