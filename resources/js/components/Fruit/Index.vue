<template>
<div>
    Fruit list
    <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">price</th>

        </tr>
        </thead>
        <tbody>
        <tr v-for="item in fruits">
            <th scope="row">{{ item.id }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>

        </tr>

        </tbody>
    </table>
</div>
</template>

<script>
import api from "../../api";

export default {
    name: "Index",
    data() {
      return {
          fruits: null
      }
    },
    methods: {
        getFruit() {
            api.get('api/auth/fruit')
                .then(res => {
                    this.fruits = res.data.data
                })

        }
    },
    mounted() {
        this.getFruit()
    }
}
</script>

<style scoped>

</style>
