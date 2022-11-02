<template>
    <div>
        <div>
            <div v-if="isaddproduct==true" class="row d-flex justify-content-center">
                <div class="col-md-8 border shadow p-5 m-5">
                    <h1> <b>Add Product</b></h1>
                    <div class="container">
            <div class="row">
                <div class="col _forminput">
                    <label for="">Name</label>
                    <input class="form-control m-1" type="text" placeholder="Enter Product Name">
                    <label for="">Description</label>
                    <textarea name="" class="form-control" id="" cols="30" rows="3"></textarea>
                    <label for="">Quantity</label>
                    <input class="form-control m-1" type="text" placeholder="Enter Product Name">
                    <label for="">Brand</label> 
                    <div class="row gx-0">
                        <div class="col-sm-8">
                            <select name=""   v-model="brandlist" class="form-control" id="">
                            <option v-for="b in brand" :value=b.id>{{b.name}}</option>
       
                            </select>
        
                        </div>

                        <div class="col-sm-4">
                         <button class="btn btn-primary" type="button" @click="isnewbrand=!isnewbrand">
                            New
                         </button>
                         <button class="btn btn-danger" @click="deletebrand">
                            Del
                         </button>
 
                         </div>
                      
                    </div>
                    <div class="mt-2 mb-2 p-2 border rounded" v-if="isnewbrand==true" id="addbrand">
                    <div class="row gx-0 ">
                        <div class="col-sm-4"> 
                            <label for="">New-Brand</label>
                        </div>

                          <div class="col-sm-6"> 
                            <input type="text" v-model="newbrand" id="newbrand" class="form-control">
                        </div>
                        <div class="col-sm-2"> 
                            <button class="btn btn-primary" type="button" @click="addbrand()">
                            <span v-if="bload==false">Add</span>
                            <div v-if="bload==true" class="spinner-border" role="status">
  <span  class="visually-hidden">Loading...</span>
</div>
                         </button>
                        </div>
                        
                        
                     </div>
                    </div>
                </div>
                <div class="col _forminput">
                    <label for="">Category</label> 
                    <div class="row gx-0">
                        <div class="col-sm-8">
                            <select name="" class="form-control" v-model="categorylist" id="categorylist">
                            <option v-for="c in category" :value=c.id>{{c.name}}</option>
                           
                            </select>
        
                        </div>

                        <div class="col-sm-4">
                         <button class="btn btn-primary" type="button" @click="isnewcategory=!isnewcategory">
                            New
                         </button>
                         <button class="btn btn-danger" @click="deletecategory()" >
                            Del
                         </button>
 
                         </div>
                      
                    </div>
                    <div class=" mt-2 mb-2 p-2 border rounded" v-if="isnewcategory==true" id="addcategory">
                    <div class="row gx-0 ">
                        <div class="col-sm-4"> 
                            <label for="">New-Category</label>
                        </div>

                          <div class="col-sm-6"> 
                            <input type="text" class="form-control" id="newcategory" v-model="newcategory">
                        </div>
                        <div class="col-sm-2"> 
                            <button class="btn btn-primary" type="button" @click="addcategory()">
                                <span v-if="cload==false">Add</span>
                            <div v-if="cload==true" class="spinner-border" role="status">
  <span  class="visually-hidden">Loading...</span>
</div>
                         </button>
                        </div>
                        
                        
                     </div>
                    </div>

                    <label for="">Sub-Category</label> 
                    <div class="row gx-0">
                        <div class="col-sm-8">
                            <select name="" class="form-control" id="">
                            <option value="">adfaf</option>
                            <option value="">adfaf</option>
                            </select>
        
                        </div>

                        <div class="col-sm-4">
                         <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#addsubcategory" aria-expanded="false" aria-controls="collapseExample">
                            New
                         </button>
                         <button class="btn btn-danger" >
                            Del
                         </button>
 
                         </div>
                      
                    </div>
                    <div class="collapse mt-2 mb-2 p-2 border rounded" id="addsubcategory">
                    <div class="row gx-0 ">
                        <div class="col-sm-4"> 
                            <label for="">New-Category</label>
                        </div>

                          <div class="col-sm-6"> 
                            <input type="text" class="form-control">
                        </div>
                        <div class="col-sm-2"> 
                            <button class="btn btn-primary" type="button" >
                            Add
                         </button>
                     
                        </div>
                        
                        
                     </div>
                    </div>

                    <label for="">M_Type</label> 
                    <div class="row gx-0">
                        <div class="col-sm-8">
                            <select name="" class="form-control" id="">
                            <option value="">adfaf</option>
                            <option value="">adfaf</option>
                            </select>
        
                        </div>

                        <div class="col-sm-4">
                         <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#addm_type" aria-expanded="false" aria-controls="collapseExample">
                            New
                         </button>
                         <button class="btn btn-danger" >
                            Del
                         </button>
                         </div>
                      
                    </div>
                    <div class="collapse mt-2 mb-2 p-2 border rounded" id="addm_type">
                    <div class="row gx-0 ">
                        <div class="col-sm-4"> 
                            <label for="">New_m_type</label>
                        </div>

                          <div class="col-sm-6"> 
                            <input type="text" class="form-control">
                        </div>
                        <div class="col-sm-2"> 
                            <button class="btn btn-primary" type="button" >
                            Add
                         </button>
                        </div>
                        
                        
                     </div>
                    </div>

                    <label for="">Purchase Price</label>
                    <div class="row gx-0 ">
                        <div class="col-sm-12"> 
                            <input type="text" class="form-control" @keyup="calpercentage()" v-model="purchaseprice">
                        </div>

                    
                                                
                     </div>
          
                    <label for="">Sell Price</label>
                    <div class="row gx-0 ">
                        <div class="col-sm-8"> 
                            <input type="text" @keyup="setpercentage()" v-model="saleprice" class="form-control">
                        </div>

                          <div class="col-sm-3"> 
                            <input type="text" @keyup="calpercentage()" v-model="percentage" class="form-control" >
                        </div>
                        <div class="col-sm-1"> 
                           <h2>%</h2>
                        </div>

                   
                                                
                     </div>
             
               
                    
           


       





                   
                </div>
                
            </div>
               <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-secondary m-2" @click="isaddproduct=!isaddproduct" >Close</button>
        <button type="button" class="btn btn-primary m-2">Create</button>
       
        </div>
        </div>
        
     
              </div>
            </div>
      

<div class="row gx-0 d-flex justify-content-center p-5">
    <div class="col-sm-3  d-flex justify-content-center">
        
<button type="button" class="btn btn-primary" v-if="isaddproduct==false" @click="isaddproduct=!isaddproduct">
  Add Product
</button>

    </div>
    <div class="col-sm-4 d-flex justify-content-center">
        <div class="row ">
            <div class="col-sm-6">
                <h5>Filter by Name :</h5>
            </div>
            <div class="col-sm-6">
                <select name="" class="form-control" id="">
            <option value=""> Filter by Name</option>
            <option value=""> Filter by Brand</option>
            <option value=""> Filter by Category</option>
            <option value=""> Filter by SubCategory</option>

        </select>
                </div>

        </div>
     
        
            </div>
            <div class="col-sm-4  d-flex justify-content-center">
                <div class="row">
            <div class="col-sm-6">
                <h5>Search with :</h5>
            </div>
            <div class="col-sm-6">
                <input type="text" placeholder="search" class="form-control">
      
                </div>

        </div>
     
  
            </div>

</div>

<div class="row gx-0 d-flex justify-content-center mt-5">
<div class="col-sm-10 ">
    <table class="table table-bordered table-hover">
        <thead> 
            <tr>
             
                <th>No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Sub-Category</th>
                <th>M_Type</th>
                <th>Purchase Price</th>
                <th>Sell Price</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td> 1 </td>
                <td> Coffee </td>
                <td> Good Coffee </td>
                <td> 250 </td>
                <td> Premier </td>
                <td> Coffee </td>
                <td> Mix </td>
                <td> Package </td>
                <td> 2500 </td>
                <td> 2600 </td>
                <td> <button>Edit</button>
                    <button>Delete</button></td>
            

            </tr>
        </tbody>
    </table>
</div>

</div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
  
      </div>
      <div class="modal-footer">
    
      </div>
    </div>
  </div>
</div>

        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data () {
        

        return {
            link:'http://127.0.0.1:8000',
            percentage:'',
            saleprice:'',
            purchaseprice:'',
            brandlist:'',
            categorylist:'',
           subcategorylist:'',
            mtypelist:'',
            brand:[],
            category:[],
            subcategory:[],
            mtype:[],
            newbrand:'',
            newcategory:'',
            newsubcategory:'',
            newmtype:'',
            isnewbrand:false,
            isnewcategory:false,
            isnewsubcategory:false,
            isnewmtype:false,
            bload:false,
            scload:false,
            cload:false,
            mload:false,
            isaddproduct:false,

        }
    },
    mounted () {
        this.showbrand()
    
    },
    methods: {
        setpercentage()
        {
            if(this.saleprice!="")
            {
            let value=parseInt(this.saleprice)-parseInt(this.purchaseprice);
            this.percentage=parseFloat(value/this.purchaseprice*100);
            }
        
        },
        calpercentage() {
            if(this.purchaseprice!="")
            {
                let saleprice=0;
            saleprice= parseInt(this.purchaseprice) +parseInt((this.purchaseprice/100)*this.percentage);
            this.saleprice=saleprice;
            }
 

        },
        
   deletebrand(){

       
   

axios.delete(this.link+"/api/brand/"+this.brandlist)
  .then(response =>console.log(response)).then(
 
      this.showbrand(),
       this.showbrand()
       





  )
  .catch(error => {
    this.errorMessage = error.message;
    console.error("There was an error!", error);
     })

},
showbrand(){
    
    axios.get(this.link+"/api/brand")
       .then(response => {
               this.brand = response.data;
         
               
       })
       .catch(error => {
         this.errorMessage = error.message;
         console.error("There was an error!", error);});
           },
addbrand(){
          
        
         
               if(this.newbrand=="")
               {
                 return  document.getElementById("newbrand").focus();
               }
              
               this.bload=true
               let article = 
               {
                 data1:this.newbrand,
         
              
   
               };
               
     axios.post(this.link+"/api/brand", article)
       .then(response =>{console.log(response)
       
        this.bload=false
       })
       .catch(error => {
         this.errorMessage = error.message;
         console.error("There was an error!", error);
          })
          this.showbrand();
          this.showbrand();
          this.showbrand();
          this.showbrand();
        
     
          
      
  
   
   },


   deletecategory(){

       
   

axios.delete(this.link+"/api/category/"+this.categorylist)
  .then(response =>console.log(response)).then(
 
      this.showbrand(),
       this.showbrand()
       





  )
  .catch(error => {
    this.errorMessage = error.message;
    console.error("There was an error!", error);
     })

},
showcategory(){
    
    axios.get(this.link+"/api/category")
       .then(response => {
               this.category = response.data;
         
               
       })
       .catch(error => {
         this.errorMessage = error.message;
         console.error("There was an error!", error);});
           },
addcategory(){
          
        
         
               if(this.newcategory=="")
               {
                 return  document.getElementById("newcategory").focus();
               }
              
               this.cload=true
               let article = 
               {
                 data1:this.newcategory,
         
              
   
               };
               
     axios.post(this.link+"/api/category", article)
       .then(response =>{console.log(response)
       
        this.cload=false
       })
       .catch(error => {
         this.errorMessage = error.message;
         console.error("There was an error!", error);
          })
          this.showcategory();
          this.showcategory();
          this.showcategory();
          this.showcategory();
        
     
          
      
  
   
   },
    },
}
</script>

<style lang="scss" scoped>
    ._forminput{
        min-width:350px;
     
    }
</style>