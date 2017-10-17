Vue.component('task-list', {
    template: `
  <div>
        <task v-for="task in tasks">{{task.name}} - {{task.completed}}</task>
    </div>
  `,
    data(){
        return {
            tasks: [
                {name: 'EAt', completed: true},
                {name: 'drink', completed: false},
                {name: 'play', completed: true},
                {name: 'dance', completed: false},
                {name: 'watch', completed: true},
                {name: 'sleep', completed: true},
            ]

        };
    },
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});


var app2 = new Vue({
    el: '#root2'
});


