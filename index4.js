/**
 * Created by bikesh on 11/1/17.
 */


Vue.component('coupon', {
    template: '<input placeholder="Enter a coupon" @blur="onCouponApplied"></input>',
    methods: {
        onCouponApplied(){
            this.$emit('applied');
        }

    }

});


new Vue({
    el: '#root',
    data:{
        couponApplied:false,
    },
    methods: {
        onCouponApplied(){
            this.couponApplied= true
        }

    }
});