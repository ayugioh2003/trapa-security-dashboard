<template>
  <div class="px-20 timeline">
    <h2 class="text-center font-bold mb-6">ACTION TIMELINE</h2>
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="actionStatus[activity.status].icon"
        :color="actionStatus[activity.status].color"
        :timestamp="activity.timestamp"
      >
        <el-card
          class="w-full cursor-pointer"
          :class="{
            'bg-green-400': activity.status === 'done',
            'text-white': activity.status === 'done',
          }"
        >
          <div class="font-bold mb-2">
            {{ activity.actionName }}
          </div>
          <div
            v-if="activity.score"
            class="border-b"
            :style="{ 'border-color': actionStatus[activity.status].color }"
          ></div>
          <div class="flex justify-between mt-2" v-if="activity.score">
            <div class="">{{ activity.duration }} minutes</div>
            <div>Score: {{ activity.score }}</div>
          </div>
          <div
            v-if="activity.score"
            class="text-gray-300 cursor-pointer text-right mt-4"
          >
            Read More
          </div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script lang="ts" setup>
import { MoreFilled, Check, Search, Clock } from '@element-plus/icons-vue'

const actionStatus = {
  done: {
    color: '#22C55E',
    icon: Check,
  },
  doing: {
    color: '#FACC14',
    icon: Search,
  },
  todo: {
    color: 'red',
    icon: Clock,
  },
}

const activities = [
  {
    actionName: 'Action 1: DMZ Scanner',
    actionDescription: `A IP with offensive actions has success login on Portal, please find out which account was compromised. Also providing the login time, attacker's IP`,
    tags: ['T1078'],
    timestamp: '2022-07-26 06:26:58',
    status: 'done',
  },
  {
    actionName: 'Action 2: Command Injection',
    duration: 15,
    score: 300,
    tags: ['T1078'],
    status: 'todo',
  },
  {
    actionName: 'Action 3: SQL Injection',
    duration: 5,
    score: 100,
    tags: ['T1078'],
    size: 'large',
    status: 'todo',
  },
  {
    actionName: 'Action 4: Back Connect',
    duration: 2,
    score: 50,
    tags: ['T1078'],
    type: 'primary',
    color: '#FACC14',
    status: 'doing',
  },
  {
    actionName: 'Action 5: C2 Server',
    duration: 10,
    score: 200,
    tags: ['T1078'],
    color: '#FACC14',
    status: 'doing',
  },
  {
    actionName: 'Action 6: Data Leakage',
    duration: 2,
    score: 50,
    tags: ['T1078'],
    status: 'todo',
  },
  {
    actionName: 'Action 7: Hash Dumped',
    duration: 2,
    score: 50,
    tags: ['T1078'],
    status: 'doing',
  },
]
</script>

<style lang="scss">
:root {
  --size: 40px;
}

.timeline {
  .el-timeline-item__node {
    width: var(--size);
    height: var(--size);
    transform: translate(-15px, 0px);
  }
  .el-timeline-item__wrapper {
    margin-left: 30px;
  }
}
</style>
