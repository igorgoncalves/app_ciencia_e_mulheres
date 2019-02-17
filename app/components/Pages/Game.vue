<template>
  <Page>
    <GridLayout ~mainContent columns="*" rows="*">
        <Label class="message" :text="msg" col="0" row="0"/>
    </GridLayout>
  </Page>
</template>

<script >
  export default {
    props: ["item"],
    data() {
      return {
        msg: this.item
      }
    }
  }
</script>

<style scoped>
   
</style>
