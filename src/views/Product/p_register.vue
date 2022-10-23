<template>
    <div>
        <div>
      

<div class="row gx-0 d-flex justify-content-center p-5">
    <div class="col-sm-3  d-flex justify-content-center">
        
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                            <select name="" class="form-control" id="">
                            <option value="">adfaf</option>
                            <option value="">adfaf</option>
                            </select>
        
                        </div>

                        <div class="col-sm-4">
                         <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#addbrand" aria-expanded="false" aria-controls="collapseExample">
                            New
                         </button>
                         <button class="btn btn-danger" >
                            Del
                         </button>
 
                         </div>
                      
                    </div>
                    <div class="collapse mt-2 mb-2 p-2 border rounded" id="addbrand">
                    <div class="row gx-0 ">
                        <div class="col-sm-4"> 
                            <label for="">New-Brand</label>
                        </div>

                          <div class="col-sm-6"> 
                            <input type="text" class="form-control">
                        </div>
                        <div class="col-sm-2"> 
                            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#addcategory" aria-expanded="false" aria-controls="collapseExample">
                            Add
                         </button>
                        </div>
                        
                        
                     </div>
                    </div>
                </div>
                <div class="col _forminput">
                    <label for="">Category</label> 
                    <div class="row gx-0">
                        <div class="col-sm-8">
                            <select name="" class="form-control" id="">
                            <option value="">adfaf</option>
                            <option value="">adfaf</option>
                            </select>
        
                        </div>

                        <div class="col-sm-4">
                         <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#addcategory" aria-expanded="false" aria-controls="collapseExample">
                            New
                         </button>
                         <button class="btn btn-danger" >
                            Del
                         </button>
 
                         </div>
                      
                    </div>
                    <div class="collapse mt-2 mb-2 p-2 border rounded" id="addcategory">
                    <div class="row gx-0 ">
                        <div class="col-sm-4"> 
                            <label for="">New-Category</label>
                        </div>

                          <div class="col-sm-6"> 
                            <input type="text" class="form-control">
                        </div>
                        <div class="col-sm-2"> 
                            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#addcategory" aria-expanded="false" aria-controls="collapseExample">
                            Add
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
                            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#addcategory" aria-expanded="false" aria-controls="collapseExample">
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
                            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#addcategory" aria-expanded="false" aria-controls="collapseExample">
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
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Create</button>
      </div>
    </div>
  </div>
</div>

        </div>
    </div>
</template>

<script>

export default {
    data () {
        

        return {
            percentage:'',
            saleprice:'',
            purchaseprice:'',
        }
    },
    mounted () {

    
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
 

            


        }
    },
}
</script>

<style lang="scss" scoped>
    ._forminput{
        min-width:350px;
     
    }
</style>