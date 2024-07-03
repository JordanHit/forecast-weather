<template>
  <header>
    <div class="place-container">
      <div class="region-container">
        {{region}} обл., {{ country }}
      </div>
      <div class="city-container">
        {{city}}
      </div>
    </div>
    <div class="search-container">
      <div class="search-icon">
        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="16" height="16">
          <path
              d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"/>
        </svg>
      </div>
      <input class="search-input" type="text" placeholder="Введите город">
    </div>
  </header>
</template>

<script>
export default {
  name: 'SearchComponent',
  props: ['city','region','country'],
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
header{
  display: flex;
  height: 41px;
  gap: 50px;
  .place-container{
    .region-container{
      font-size: 13px;
      color: var(--grey-light);
    }
    .city-container{
      font-size: 20px;
      color: var(--white);
    }
  }
  .search-container {
    display: flex;
    align-items: center;
    background-color: var(--black-light);
    width: 358px;
    height: 100%;
    border-radius: 10px;
    gap: 10px;
    padding: 0 10px;

    .search-icon {
      width: 16px;
      height: 16px;

      svg {
        fill: var(--grey);
      }
    }

    .search-input {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background-color: var(--black-light);
      border: 0 transparent;
      outline: none;
      color: var(--grey);
      caret-color: var(--grey);
    }
    input[type="text"]::-webkit-input-placeholder {
      color: var(--grey);
    }
  }
}
</style>