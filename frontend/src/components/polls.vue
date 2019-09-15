<template>
  <div>
    <div class="row header">
   <div class="col-12">
   <h2>Ожидают Ваш голос</h2>
  </div>
  </div>
    <div class="row mt-5">
      <div class="col-4">
            <div class="card border-info mb-3" style="max-width: 20rem;">
              <div class="card-header">Активно до: 21.09.19 - 15.00</div>
              <div class="card-body bodyCard">
                <h4 class="card-title">Заголовок опроса</h4>
                <p class="card-text">1. Первый пункт <br>2. Второй классный пункт <br>3. Третий офигенный пункт офигенного опроса <br>4. И всякое остальное</p>
              </div>
          </div>
      </div>
      <div class="col-4">
            <div class="card border-info mb-3" style="max-width: 20rem;">
              <div class="card-header">Активно до: 21.09.19 - 15.00</div>
              <div class="card-body bodyCard">
                <h4 class="card-title">Заголовок опроса</h4>
                <p class="card-text">1. Первый пункт <br>2. Второй классный пункт <br>3. Третий офигенный пункт офигенного опроса <br>4. И всякое остальное</p>
              </div>
          </div>
      </div>
      <div class="col-4">
            <div class="card border-info mb-3" style="max-width: 20rem;">
              <div class="card-header">Активно до: 21.09.19 - 15.00</div>
              <div class="card-body bodyCard">
                <h4 class="card-title">Заголовок опроса</h4>
                <p class="card-text">1. Первый пункт <br>2. Второй классный пункт <br>3. Третий офигенный пункт офигенного опроса <br>4. И всякое остальное</p>
              </div>
          </div>
      </div>
      <div class="col-4">
            <div class="card border-info mb-3" style="max-width: 20rem;">
              <div class="card-header">Активно до: 21.09.19 - 15.00</div>
              <div class="card-body bodyCard">
                <h4 class="card-title">Заголовок опроса</h4>
                <p class="card-text">1. Первый пункт <br>2. Второй классный пункт <br>3. Третий офигенный пункт офигенного опроса <br>4. И всякое остальное</p>
              </div>
          </div>
      </div>
      <div class="col-4">
            <div class="card border-info mb-3" style="max-width: 20rem;">
              <div class="card-header">Активно до: 21.09.19 - 15.00</div>
              <div class="card-body bodyCard">
                <h4 class="card-title">Заголовок опроса</h4>
                <p class="card-text">1. Первый пункт очень длинный. Чтобы красиво было <br>2. Второй классный пункт <br>3. Третий офигенный пункт офигенного опроса <br>4. И всякое остальное</p>
              </div>
          </div>
      </div>

    </div>
    <div class="row header">
   <div class="col-12">
   <h2>Ожидают завершения</h2>
  </div>
  </div>
    <div class="row mt-5">
      <pollCard />
    </div>
  </div>
</template>

<script>
import pollCard from '@/components/pollCard';
export default {
  name: 'polls',
  components: { pollCard },
};
</script>

<style >
.header {
  text-align: center;
  margin-top: 60px;
}
h2 {
  font-size: 42px;
  color: #2f3441
}
</style>
