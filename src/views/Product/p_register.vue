<template>
    <div>
        <div>
      

            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

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
                    
                    <label for="">Sell Price</label>
                    <input type="text" class="form-control">
                    <label for="">Purchase Price</label>
                    <input type="text" class="form-control">
                    
           


       





                   
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
        

        return {}
    },
    mounted () {

    
    },
}
</script>

<style lang="scss" scoped>
    ._forminput{
        min-width:350px;
     
    }
</style>