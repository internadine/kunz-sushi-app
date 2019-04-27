<template>
  <div class="container">


    <div class="menuItem text-info border rounded border-info shadow">
      <div class="d-flex flex-row justify-content-around">
        <div class="p-2 "> <h4>Tisch 1</h4>  </div>
        <div class="p-2">
          
           <div class="form-group">

    <select class="form-control" >
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
          
          
          </div>
        <div class="p-2 " > <h4 > <span style="color: #990000" class="ml-2">Hoso Maki</span> </h4> </div>
        <div class="p-2 "><i class="fas fa-check-circle fa-2x"></i></div>
      </div>
      <div class="d-flex flex-row-reverse">
        <div class="p-1 text-muted">Lachs</div>
        <div class="p-1 text-muted">Mango</div>
        <div class="p-1 text-muted">Avocado</div>
      </div>
    </div>



  </div>
</template>

<script>
  export default {
    name: 'Sushi',
    data() {
      return {
        items: [

        ]
      }
    }
  }
</script>

<style scoped>
  .menuItem {
    background-color: whitesmoke;
    border: 1px solid rgb(22, 170, 170);
    width: 100%;
    height: 80px;
    margin-top: 2rem;
    padding: 3px;

  }
</style>