<template>
  <div class="note-sidebar">
    <span class="btn add-note" @click="onAddNote" >添加笔记</span>
    <el-dropdown class="notebook-title"  @command="handleCommand" placement="bottom">
      <span class="el-dropdown-link">
         {{curBook.title}}<i class="iconfont icon-down"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="notebook in notebooks" :command="notebook.id">{{notebook.title}}</el-dropdown-item>
        <el-dropdown-item  command="trash">回收站</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div class="menu">
      <div>更新时间</div>
      <div>标题</div>
    </div>
    <ul class="notes">
      <li v-for="note in notes">
        <router-link :to="`/note?noteId=${note.id}&notebookId=${curBook.id}`">
          <span class="date">{{note.updatedAtFriendly}}</span>
          <span class="title">{{note.title}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions,mapGetters ,mapMutations} from 'vuex'

export default {
  created() {
    this.getNotebooks()
      .then(() => {
       this.setCurBook({ curBookId: this.$route.query.notebookId})
        return this.getNotes({ notebookId: this.curBook.id})
      }).then(() => {
        this.setCurNote({ curNoteId: this.$route.query.noteId })
        this.$router.replace({
          path:'/note',
          query:{
            noteId:this.curNote.id,
            notebookId:this.curBook.id
          }
        })
    })
  },
  // props:['curNote'],
  data(){
    return {}
  },
  computed:{
    ...mapGetters([
      'notebooks',
      'notes',
      'curBook',
      //用getters而不直接用state的好处:可以直接使用getters里面的东西(不用写在哪个模块下modules)
      'curNote'
    ])
  },
  methods:{
    ...mapMutations([
      'setCurNote',
      'setCurBook'
    ]),
    ...mapActions([
      'getNotebooks',
      'getNotes',
      'addNote',

    ]),
    handleCommand(notebookId){
      if(notebookId ==='trash'){
        return this.$router.push({path:'/trash'})
      }
       this.$store.commit('setCurBook',{curBookId:notebookId})
      // 寻找与所点击按钮对应的
      this.getNotes({ notebookId })
         .then(() => {
        this.setCurNote({})
        this.$router.replace({
          path:'/note',
          query:{
            noteId:this.curNote.id,
            notebookId:this.curBook.id
          }
        })
      })
    },
    onAddNote(){
      this.addNote({notebookId: this.curBook.id})
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../assets/css/note-sidebar);
</style>
