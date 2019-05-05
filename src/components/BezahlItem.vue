<template>




            <li class="d-flex bd-highlight list-group-item" > <div class="p-2 bd-highlight">{{pay.quantity}} x </div>  <div class="p-2 bd-highlight"
                     style="color: #990000">{{pay.name}}</div> <div class="p-2 bd-highlight ml-auto p-2">{{pay.price}}</div> 

             </li>


</template>

<script>
    export default {
        name: 'BezahlAnsicht',
        props: ['pay']
        
  }
        
    
</script>