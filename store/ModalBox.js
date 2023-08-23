
import { defineStore } from "pinia";

export const useModal = defineStore("modal",()=> {

const isOpen= ref(false);
const view= ref({});
const actions= ref([]);

const open=()=>{
    isOpen.value= true;
    
}
//   state: (): Modal => ({
//     isOpen: false,
//     view: {},
//     actions: [],
//   }),
//   actions: {
//     open(view: object, actions?: ModalAction[]) {
//       this.isOpen = true;
//       this.actions = actions;
//       // using markRaw to avoid over performance as reactive is not required
//       this.view = markRaw(view);
//     },
//     close() {
//       this.isOpen = false;
//       this.view = {};
//       this.actions = [];
//     },
//   }
// })
});

export default useModal;
