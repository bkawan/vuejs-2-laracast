/**
 * Created by bikesh on 11/1/17.
 */

window.Event = new Vue();

Vue.component('coupon', {
    template: '<input placeholder="Enter a coupon" @blur="onCouponApplied"></input>',
    methods: {
        onCouponApplied(){
            Event.$emit('applied');
        }

    }

});


new Vue({
    el: '#root',
    data: {
        couponApplied: false,
    },
    // methods: {
    //     onCouponApplied(){
    //         this.couponApplied= true
    //     }
    // },
    created(){
        Event.$on('applied', () => alert('coupon has applied'))

    }
});