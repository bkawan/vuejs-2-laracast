/**
 * Created by bikesh on 11/1/17.
 */


Vue.component('coupon', {
    template: '<input placeholder="Enter a coupon" @blur="onCouponApplied"></input>',
    methods: {
        onCouponApplied(){
            alert('Coupon was applied successfully')
        }

    }

});


new Vue({
    el: '#root',
    methods: {
        onCouponApplied(){
            alert('Coupon was applied successfully')
        }

    }
});