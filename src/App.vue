<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
const isCollapse = ref(true)
const isDark = ref(true)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <div class="app flex">
    <menu>
      <el-menu
        :collapse="isCollapse"
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1" disabled>
          <el-icon><font-awesome-icon icon="fa-regular fa-flag" /></el-icon>
          <span>Navigator One</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><font-awesome-icon icon="fa-solid fa-house" /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon
            ><font-awesome-icon icon="fa-solid fa-chart-column"
          /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon
            ><font-awesome-icon icon="fa-solid fa-magnifying-glass"
          /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
        <el-menu-item index="5">
          <el-icon><font-awesome-icon icon="fa-solid fa-calculator" /></el-icon>
          <span>Navigator Five</span>
        </el-menu-item>
        <el-menu-item index="6">
          <el-icon
            ><font-awesome-icon icon="fa-solid fa-graduation-cap"
          /></el-icon>
          <span>Navigator Five</span>
        </el-menu-item>
        <el-menu-item index="7">
          <el-icon
            ><font-awesome-icon icon="fa-regular fa-address-card"
          /></el-icon>
          <span>Navigator Five</span>
        </el-menu-item>
        <el-menu-item index="8">
          <el-icon
            ><font-awesome-icon icon="fa-solid fa-sliders" rotation="270"
          /></el-icon>
          <span>Navigator Five</span>
        </el-menu-item>

        <el-menu-item index="99" class="sidebar-fixend">
          <div>
            <el-icon v-if="isDark"
              ><font-awesome-icon icon="fa-regular fa-sun"
            /></el-icon>
            <el-icon v-else
              ><font-awesome-icon icon="fa-regular fa-moon"
            /></el-icon>
            <div>
              <el-switch
                v-model="isDark"
                size="small"
                style="
                  --el-switch-on-color: #13ce66;
                  --el-switch-off-color: #999999;
                "
              />
            </div>
          </div>

          <span>Navigator Five</span>
        </el-menu-item>
      </el-menu>
    </menu>
    <main class="grow">
      <div
        class="flex justify-between px-5 pt-1 pb-3 shadow-lg shadow-gray-500/10"
      >
        <h1 class="font-bold">SOC Room</h1>
        <div class="flex gap-5 items-center">
          <span class="font-semibold text-sm text-gray-500">admin</span>
          <span
            ><font-awesome-icon
              icon="fa-regular fa-bell"
              :style="{ color: '#999999' }"
          /></span>
          <span
            ><font-awesome-icon
              icon="fa-solid fa-arrow-right-from-bracket"
              :style="{ color: '#999999' }"
          /></span>
        </div>
      </div>
      <RouterView />
    </main>
  </div>
</template>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: calc(100vw / 24);
  min-height: 100vh;
}
.el-menu-vertical-demo.el-menu--collapse {
  min-height: 100vh;
}

.el-menu-vertical-demo {
  /* position: relative; */
  .sidebar-fixend {
    position: absolute;
    bottom: 30px;
  }
}
</style>
