<template>
  <div class="cart-item">
    <div class="cart-item__img">
      <img :src="image" alt="item picture" />
    </div>
    <div class="cart-item__info">
      <h4>{{ cocktailName }}</h4>
      <p>{{ cocktailPrice }} €</p>
    </div>
    <div class="cart-item__amount">
      <button @click="incrementItemAmount">
        <i class="fas fa-plus"></i>
      </button>
      <h6>Menge:</h6>
      <p>{{ amount }}</p>
      <button @click="decrementItemAmount">
        <i class="fas fa-minus"> </i>
      </button>
      <h6 @click="deleteItem">entfernen</h6>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['increment-item', 'decrement-item', 'delete-item'],
  props: ['cocktailPrice', 'cocktailName', 'image', 'amount', 'id'],
  methods: {
    incrementItemAmount() {
      this.$emit('increment-item', this.id)
    },
    decrementItemAmount(){
      this.$emit('decrement-item', this.id)
    },
    deleteItem() {
      this.$emit('delete-item', this.id)
    }
  }
};
</script>
