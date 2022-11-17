<script setup lang="ts">
import { useGamesStore } from "./store/games";
const gameStore = useGamesStore();
const addGame = () => {
  let newId;
  if(gameStore.games.length == 0)
    newId = 1
  else
    newId = Number.parseInt(gameStore.games[gameStore.games.length - 1]?.id) + 1
  gameStore.addNewGame({
    id: newId.toString(),
    name: "Doom",
    createYear: "1999",
    imgUrl:
      "https://prokomputer.ru/wp-content/uploads/2021/02/Doom-Eternal-llega-a-Game-Pass.jpg",
  });
};
const setSelectState = (game: Game): void => {
  if (gameStore.selected.filter((x) => x.id == game.id).length > 0)
    gameStore.unselectGame(game.id);
  else gameStore.selectGame(game);
};
const deleteSelected = () => {
  for(let item of gameStore.selected){
    gameStore.deleteGame(item.id)
    gameStore.unselectGame(item.id)
  }
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <div class="actions">
      <button @click="addGame">Add Game</button>
      <button @click="gameStore.$reset()">Reset Store</button>
      <button @click="deleteSelected">Delete Selected</button>
    </div>
    <div class="list">
      <div
        class="list__item game"
        @click="setSelectState(game)"
        v-for="game in gameStore.games"
        :key="game.id"
        :class="{
          'game_selected':
            gameStore.selected.filter((x) => x.id == game.id).length > 0,
        }"
      >
        <div>
          <img class="game__img" :src="game.imgUrl" alt="" />
        </div>
        <div class="game__name">{{ game.name }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
}
.list__item {
  margin: 20px;
}
.game_selected {
  box-sizing: content-box;
  border: 1px solid black;
  filter: drop-shadow(0 0 1em yellow);
}
.game__img {
  width: 350px;
  height: 400px;
  cursor: pointer;
}
.game__name {
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
