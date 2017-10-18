/**
 * Created by bikesh on 10/17/17.
 */


Vue.component('message', {
    props: ['title', 'body'],
    data(){
        return {
            isVisible: true
        };
    },
    template: `
        <div v-show="isVisible">
            <article class="message">
                <div class="message-header">
                    <p>{{title}}</p>
                    <button class="delete" @click='hideModal' aria-label="delete"></button>
                </div>
                <div class="message-body">
                 {{ body }} 
                </div>
            </article>
        </div>
        `,
    methods: {
        hideModal(){
            this.isVisible = false;

        },
    }

});

var app1 = new Vue({
    el: '#root'
});
