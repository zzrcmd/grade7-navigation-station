<template>
  <div class="weather" v-if="weatherData.place">
    <span>{{ weatherData.place }}&nbsp;</span>
    <span>{{ weatherData.windDirection }}&nbsp;</span>
    <span>{{ weatherData.windScale }}&nbsp;</span>
    <span>天气 {{ weatherText }}</span>
  </div>
  <div class="weather" v-else>
    <span>天气数据获取失败</span>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { getWeather } from "@/api";

// 天气数据
const weatherData = ref({
  place: null,
  windDirection: null,
  windScale: null,
  weather1: null,
  weather2: null,
});

// 计算天气显示文本
const weatherText = computed(() => {
  if (!weatherData.value.weather1) return "";
  if (weatherData.value.weather1 === weatherData.value.weather2) {
    return weatherData.value.weather1;
  }
  return `${weatherData.value.weather1}转${weatherData.value.weather2}`;
});

// 获取天气数据
const getWeatherData = async () => {
  try {
    const data = await getWeather();
    if (data.code === "200") {
      weatherData.value = {
        place: data.place,
        windDirection: data.windDirection,
        windScale: data.windScale,
        weather1: data.weather1,
        weather2: data.weather2,
      };
    } else {
      throw new Error(data.msg || "获取天气数据失败");
    }
  } catch (error) {
    console.error("天气信息获取失败:", error);
    ElMessage.error("天气信息获取失败");
  }
};

// 每30分钟更新一次天气
onMounted(() => {
  getWeatherData();
  setInterval(getWeatherData, 30 * 60 * 1000);
});
</script>

<style scoped>
.weather {
  font-size: 1rem;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

@media screen and (max-width: 768px) {
  .weather {
    font-size: 0.9rem;
  }
}
</style>
