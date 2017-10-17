/**
 * Created by bikesh on 10/17/17.
 */


Vue.component('message', {
    props: ['title', 'body'],
    template: `
        <div>
            <article class="message">
                <div class="message-header">
                    <p>{{title}}</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                 {{ body }} 
                </div>
            </article>
        </div>
        `
});

var app1 = new Vue({
    el: '#root'
});
