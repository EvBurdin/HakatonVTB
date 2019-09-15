<template>
  <div class="">
            <div class="card border-info mb-3" >
              <div class="card-header">Заголовок вопроса</div>
                  <div class="input-group">
                  <input type="text" class="form-control" placeholder="Оставьте комментарий" >
                  <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button">Добавить</button>
                  </div>
               </div>
              <div class="card-body bodyCard">
                <h4 class="card-title">Заголовок опроса</h4>
                <p class="card-text">1. Первый пункт <br>2. Второй классный пункт <br>3. Третий офигенный пункт офигенного опроса <br>4. И всякое остальное</p>
              </div>
          </div>
          <div class="row">
               <button class="col-6 btn votebtn">Голосовать "За"</button>

            <button class="col-6 btn votebtn">Голосовать "Против"</button>
          </div>
  </div>
</template>
<script>
export default {
  name: 'voteCard',
};
</script>
<style scoped>

.border-info {
    border-color: #1E9FDF!important;
    border-radius: 3px;
}
.bodyCard {
  max-height: 140px;
  overflow: hidden;
  border-bottom: 15px solid white;
  padding-left: 40px;
  padding-right: 40px;
}
.votebtn {
   cursor: pointer;
}
</style>
