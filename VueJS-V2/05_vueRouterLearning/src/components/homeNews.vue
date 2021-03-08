<template>
  <div>
    <ul>
      <li>{{news1}}</li>
      <li>{{news2}}</li>
      <li>{{news3}}</li>
      <li>{{news4}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        news1: "Hello World",
        news2: "Are you OK?",
        news3: "Hi, Siri",
        news4: 'See you'
      }
    }
  }
</script>