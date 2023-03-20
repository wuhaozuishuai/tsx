// TODO:  直接返回渲染函数

// export default function(){
//     return (<div>432423</div>)
// }

// TODO optionsApi

// import { defineComponent } from "vue";
// export default defineComponent({
//     data(){
//         return {
//             age:24
//         }
//     },
//     render(){
//         return (<div>{this.age}</div>)
//     }
// })

// TODO: setup函数模式
// FIXME: 常用
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    // TODO: v-show支持
    const flag = false;
    return () => <div v-show={flag}>gfdgdf </div>;
  },
});
