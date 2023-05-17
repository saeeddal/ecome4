<template>
  <div>
    <header>
      <h3>this is main header from layout</h3>
      <nav class="flex align-center gap-4 p-4">
        <NuxtLink to="/">home page </NuxtLink>
        <NuxtLink to="/about">about </NuxtLink>
      </nav>
    </header>
    <slot />
    <footer>
      <h3>this is main footer from layout</h3>
    </footer>
  </div>
</template>
<style slot>
header {
  background-color: blueviolet;
  color: aliceblue;
}
footer {
  background-color: gray;
  color: aliceblue;
}
</style>
