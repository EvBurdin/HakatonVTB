<template>
  <div class="col-4">
            <div class="card border-info mb-3" style="max-width: 20rem;">
              <div class="card-header">Активно до: 21.09.19 - 15.00</div>
              <div class="card-body bodyCard">
                <h4 class="card-title">Заголовок опроса</h4>
                <p class="card-text">1. Первый пункт <br>2. Второй классный пункт <br>3. Третий офигенный пункт офигенного опроса <br>4. И всякое остальное</p>
              </div>
          </div>
      </div>
</template>

<script>
export default {
  name: 'pollCard',
};
</script>

<style >

.border-info {
    border-color: #1E9FDF!important;
    border-radius: 3px;
}
.bodyCard {
  max-height: 140px;
  overflow: hidden;
  border-bottom: 15px solid white;
}
</style>
