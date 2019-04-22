

<template>
  <div>
<nav class="navbar navbar-expand-lg navbar navbar-dark" style="background-color: #990000">
  <router-link class="navbar-brand" to="/menu">KUNZ </router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mx-auto">
      <li class="nav-item mr-4">
        <router-link class="nav-link" to="/tisch" tag="li" active-class="active" exact> <i class="d-none d-md-inline fas fa-shoe-prints fa-2x"></i> Bestellen </router-link >
      </li>
      <li class="nav-item mr-4">
        <router-link  class="nav-link" to="/sushi" tag="li" active-class="active" exact> <i class="d-none d-md-inline  fas fa-fish fa-2x"></i> Sushi  </router-link >
      </li>
         <li class="nav-item">
        <router-link  class="nav-link" to="/bezahlen" tag="li" active-class="active" exact> <i class="d-none d-md-inline fas fa-euro-sign fa-2x"></i> Bezahlen</router-link >
      </li>
  
    
    </ul>
  </div>
</nav>
  </div>
</template>
    



<script>
export default {
    name: 'AppHeader'
}
</script>
