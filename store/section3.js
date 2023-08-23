
import { defineStore } from 'pinia';

export const useSection3Store= defineStore("section3", ()=>{
    const project= ref(true)
    const dataa= ref(false)
    const ux= ref(false)
    const it= ref(false)
    const digital= ref(false)
    const datascientist= ref(false)
    const frontend= ref(false)
    const book= ref(false)

    function handleProject() {
        project.value=true
        dataa.value = false
        ux.value= false
        it.value= false
        digital.value= false
        datascientist.value= false
        frontend.value= false
        book.value= false
        }

        function dataAnalyst() {
        dataa.value= true
        project.value=false
        ux.value= false
        it.value= false
        digital.value= false
        datascientist.value= false
        frontend.value= false
        book.value= false
        }

        
        function handleUx(){
        ux.value= true
        dataa.value= false
        project.value=false
        it.value= false
        digital.value= false
        datascientist.value= false
        frontend.value= false
        book.value= false
        }

        function handleIt(){
        it.value= true
        ux.value= false
        dataa.value= false
        project.value=false
        digital.value= false
        datascientist.value= false
        frontend.value= false
        book.value= false
        }

        function handleDigital(){
            digital.value= true
            it.value= false
            ux.value= false
            dataa.value= false
            project.value=false
            datascientist.value= false
            frontend.value= false
            book.value= false
            }

        function handleDatascientist(){
              datascientist.value=true
            digital.value= false
                it.value= false
                ux.value= false
                dataa.value= false
                project.value=false
                frontend.value= false
                book.value= false
                }
         function handleFrontend(){
            frontend.value=true
                    digital.value= false
                    it.value= false
                    ux.value= false
                    dataa.value= false
                    project.value=false
                    datascientist.value= false
                    book.value= false
                    }
        function handleBook(){
                        book.value=true
                        digital.value= false
                        it.value= false
                        ux.value= false
                        dataa.value= false
                        project.value=false
                        datascientist.value= false
                        frontend.value= false
                        }

                        

   return {project, dataa, ux,it,digital,datascientist,frontend,book,handleProject, dataAnalyst,handleUx, handleIt,handleDigital,handleDatascientist,handleFrontend,handleBook }     
})

