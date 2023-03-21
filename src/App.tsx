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

const A = (_:any, { slots }:any) => (
    <>
        <div>{slots.default ? slots.default() : '默认'}</div>
        <div>{slots.foo?.()}</div>
    </>
)


// TODO: setup函数模式
// FIXME: 常用
// FIXME: ref在template中会自动解包.value,在tsx中不会自动解包，所以需要使用.value
// FIXME: ref在template中会自动解包.value
import { defineComponent, ref } from "vue";
interface IProps{
  name?:string 
}
export default defineComponent({
  props:{ 
      name:String 
  },
  emits:['on-click'],
  setup(props:IProps,{emit}) {
      // TODO: v-show支持
      // TODO: v-if不支持，可以使用三元表达式 代替
      // TODO: 使用map代替v-for
      // TODO: 使用{}代替v-bind
      const flag = ref(false)
      const data  = [
        {name:'name1'},
        {name:'name2'},
        {name:'name3'},
        {name:'name4'},
      ]
      // return () => <div v-show={flag.value}>gfdgdf </div>

      // return ()=>(<>
      //   <div>{flag.value ? <div>true</div>:<div>false</div>}</div> 
      // </>)
      const fn = (v:string)=>{
        console.log(v)
        emit('on-click',v)
      }
      const slot = {
        default:()=>(<div>默认插槽</div>),
        foo:()=>(<div>foo插槽</div>)
      }
      const v = ref<string>('')
      return()=>(<>
        <input type="text" v-model={v.value} />
        <div>{v.value}</div>
        <hr />
        <A v-slots={slot}></A>
        <hr />
        <div>props:{props?.name}</div>
        <hr />
        {data.map(v=>{
          return (
            // FIXME: 使用fn()会默认触发一次，可以使用fn，但如果需要传参，使用函数柯里化，（）=>fn()的形式
              // <div onClick={fn} name={v.name}>
              //     {v.name}
              // </div>
                
               <div onClick={()=>fn(v.name)} name={v.name}>
                  {v.name}
              </div>
          )
        })}
      </>)


  },
});
