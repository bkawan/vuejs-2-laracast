/**
 * Created by bikesh on 10/26/17.
 */


Vue.component('tabs', {
    template: `
        <div class="tab-component">
            <div class="tabs">
              <ul>
              <li v-for="tab in tabs" :class="{'is-active':tab.isActive}">
                 <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
              </li>
              </ul>
            </div>
            <div class="tab-details">
                <slot></slot>
            </div>
        </div>

    `,
    // mounted(){
    //     console.log(this.$children)
    // },
    data(){
        return {tabs: []};
    },
    created(){
        this.tabs = this.$children;
    },
    methods: {
        selectTab(selectedTab){
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            })
        },
    }


});

Vue.component('tab', {
    template: `
        <div v-show="isActive">
            <slot></slot>
        </div> 
  `,
    props: {
        name: {required: true},
        section: {required: false},
        selected: {default: false},

    },
    data(){
        return {
            isActive: false
        }
    },
    mounted(){
        this.isActive = this.selected;
    },
    computed: {
        href(){
            return '#' + this.name.trim().toLowerCase().replace(/ /g, '-');
        }
    }

});
new Vue({
    el: '#root'
});