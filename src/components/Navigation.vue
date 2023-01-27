<template>
  <nav>
    <h6><a href="#">Logo</a> </h6>
    <ul>
      <li v-for="(item, index) in navItems" :key="index">
        <a :href="item.route">{{item.name}}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { name: "Cocktails", route: "#" },
        { name: "About", route: "#" },
        { name: "Contact", route: "#" },
      ],
    };
  },

}
</script>