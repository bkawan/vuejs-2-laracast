/**
 * Created by bikesh on 10/17/17.
 */


Vue.component('message', {
    props: ['title', 'body'],
    data(){
        return {
            isVisible: true,
            showBody: true
        };
    },
    template: `
        <div v-show="isVisible">
            <article class="message">
                <div class="message-header">
                    <p>{{title}}</p>
                    <button class="delete" @click='hideModal' aria-label="delete"></button>
                </div>
                <div class="message-body" v-show="showBody">
                 {{ body }} 
                   <button class="delete" @click='showBody = false' aria-label="delete"></button>
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

Vue.component('modal', {
    template: `
   <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
            <slot></slot>
            </div>
            <button class="modal-close is-large"  @click="$emit('close')" aria-label="close"></button>
        </div>
   `
});
var app1 = new Vue({
    el: '#root',
    data:{
        showModal:false
    }
});
