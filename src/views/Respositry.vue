<template>
  <v-card>
    <v-card-title>
      Respositry
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <!-- <v-data-table :headers="headers" :items="desserts" ></v-data-table> -->
    <v-data-table :headers="headers" :items="desserts" :items-per-page="5" :search="search"></v-data-table>
  </v-card>
</template>
<script>
export default {
  name: 'Respositry',
  data() {
    return {
      resposData: [],
      search: '',
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'FullName', value: 'full_name' },
        { text: 'Private', value: 'private' },
        { text: 'Description', value: 'description' },
        { text: 'Language', value: 'language' },
        { text: 'Watchers', value: 'watchers' },
        { text: 'CreateTime', value: 'created_at' }
      ],
      desserts: []
    }
  },
  components: {},
  created() {
    this.axios.get('https://api.github.com/users/Kchenyuhang/repos').then((value) => {
      let respos = value.data
      for (let i = 0; i < respos.length; i++) {
        const item = respos[i]
        this.desserts.splice(1, 0, {
          name: item.name,
          full_name: item.full_name,
          private: item.private,
          description: item.description,
          language: item.language,
          watchers: item.watchers,
          created_at: item.created_at
        })
        console.log('名字：' + item.name)
      }
      console.log(this.desserts)
    })
  },
  mounted() {},
  methods: {},
  computed: {}
}
</script>
<style scoped lang="scss"></style>
