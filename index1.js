/**
 * Created by bikesh on 10/17/17.
 */


Vue.component('message', {
    template: `
<div>
        <article class="message">
            <div class="message-header">
                <p>Hello World</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus
                quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
                diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
                Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque.
                Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
        </article>
        </div>
    `
});

var app1 = new Vue({
    el: '#root'
});
