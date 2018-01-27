<template lang="html">
  <b-nav class="col-md-2 d-none d-md-block bg-light sidebar">
   <div class="sidebar-sticky">
    <ul class="nav flex-column">
      <b-nav-item active>
        Active
      </b-nav-item>
      <b-nav-item active>
        <span data-feather="file"></span>
        Topic
      </b-nav-item>
      <li class="nav-item">
        <a class="nav-link" href="/schema">
          <span data-feather="shopping-cart"></span>
          Schema
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/connect">
          <span data-feather="users"></span>
          Connect
        </a>
      </li>
    </ul>

    <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
      <span>Settings</span>
      <a class="d-flex align-items-center text-muted" href="#">
        <span data-feather="plus-circle"></span>
      </a>
    </h6>
    <ul class="nav flex-column mb-2">
      <li class="nav-item">
        <a class="nav-link" href="#">
          <span data-feather="file-text"></span>
          ACL
        </a>
      </li>
    </ul>
  </div>
</b-nav>
</template>

<script>

export default {
  name:'sidebar'
}
</script>

<style lang="css">
</style>
