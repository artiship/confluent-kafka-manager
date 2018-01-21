<template>
  <div id="app">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="description" content="">
      <meta name="author" content="">
      <link rel="icon" href="../../../../favicon.ico">
      <title>Dashboard Template for Bootstrap</title>
    </head>
    <body>
      <app-header></app-header>
      <div class="container-fluid">
        <div class="row">
          <side-nav></side-nav>
          <app-content></app-content>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import AppHeader from '@/components/Header'
import SideNav from '@/components/SideNav'
import AppContent from '@/components/AppContent'

export default {
  name: 'App',
  components: {
    AppHeader,
    SideNav,
    AppContent
  }
}
</script>

<style type="scss">
@import '/assets/css/app.css'
</style>
