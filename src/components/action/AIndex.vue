<template>
  <div class="px-20 timeline">
    <h2 class="text-center font-bold mb-6">ACTION TIMELINE</h2>
    <el-timeline>
      <el-timeline-item
        @click="onClickForm(activity)"
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

    <el-dialog v-model="dialogFormVisible">
      <template #header="{ }">
        <div class="my-header">
          <h4 class="text-center font-bold">
            <div>Investigate Action</div>
            <div>{{ currentActivity.actionName }}</div>
          </h4>
        </div>
      </template>

      <div class="flex justify-between">
        <div>
          Duration:
          <span class="font-bold">{{ currentActivity.duration }} minutes</span>
        </div>
        <div>
          Score: <span class="font-bold">{{ currentActivity.score }} pts</span>
        </div>
      </div>

      <div class="text-center mb-2">
        <span
          v-for="(item, index) in currentActivity.tags"
          :key="index"
          class="inline-block rounded-full py-1 px-2"
          :style="{ 'background-color': '#BAE6FD' }"
        >
          <span class="flex gap-1">
            <span style="color: #1a90ce;">•</span>
            <span>{{ item }}</span>
          </span>
        </span>
      </div>

      <div>
        <p class="font-bold mb-2">
          {{ currentActivity.actionDescription }}
        </p>
        <p class="font-bold mb-2">Related dashboard: Web Access</p>
        <p class="text-gray-400 text-xs">
          Notice: There may be more than one answer. You can submit any of it.
        </p>
      </div>

      <hr class="my-5" />

      <form action="">
        <div class="grid grid-cols-2 gap-8">
          <div>
            <label>
              <div class="mb-2">
                <div class="text-lg font-semibold">Login Time</div>
                <div class="text-gray-400">success login time</div>
              </div>
              <el-input
                v-model="form.loginTime"
                placeholder="____-__-__T__:__:__"
              />
            </label>
          </div>
          <div>
            <label>
              <div class="mb-2">
                <div class="text-lg font-semibold">Attacker IP</div>
                <div class="text-gray-400">source ip address</div>
              </div>
              <el-input v-model="form.attackerIp" placeholder="" />
            </label>
          </div>
          <div>
            <label>
              <div class="mb-2">
                <div class="text-lg font-semibold">Username</div>
                <div class="text-gray-400">login username</div>
              </div>
              <el-input v-model="form.username" placeholder="" />
            </label>
          </div>
        </div>
      </form>

      <template #footer>
        <span class="dialog-footer">
          <el-button
            :bg="true"
            color="#525252"
            rounded
            style="background: #525252;"
            @click="dialogFormVisible = false"
            >Submit</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { Check, Search, Clock } from '@element-plus/icons-vue'
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

// action timeline
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

const desc = `A IP with offensive actions has success login on Portal, please find out which account was compromised. Also providing the login time, attacker's IP`

const activities = [
  {
    actionName: 'Action 1: DMZ Scanner',
    actionDescription: desc,
    tags: ['T1078'],
    timestamp: '2022-07-26 06:26:58',
    status: 'done',
  },
  {
    actionName: 'Action 2: Command Injection',
    actionDescription: desc,
    duration: 15,
    score: 300,
    tags: ['T1078'],
    status: 'todo',
  },
  {
    actionName: 'Action 3: SQL Injection',
    actionDescription: desc,
    duration: 5,
    score: 100,
    tags: ['T1078'],
    size: 'large',
    status: 'todo',
  },
  {
    actionName: 'Action 4: Back Connect',
    actionDescription: desc,
    duration: 2,
    score: 50,
    tags: ['T1078'],
    type: 'primary',
    color: '#FACC14',
    status: 'doing',
  },
  {
    actionName: 'Action 5: C2 Server',
    actionDescription: desc,
    duration: 10,
    score: 200,
    tags: ['T1078'],
    color: '#FACC14',
    status: 'doing',
  },
  {
    actionName: 'Action 6: Data Leakage',
    actionDescription: desc,
    duration: 2,
    score: 50,
    tags: ['T1078'],
    status: 'todo',
  },
  {
    actionName: 'Action 7: Hash Dumped',
    actionDescription: desc,
    duration: 2,
    score: 50,
    tags: ['T1078'],
    status: 'doing',
  },
]

// form
const currentActivity = ref({})
const onClickForm = (activity) => {
  dialogFormVisible.value = true
  currentActivity.value = activity
}

const form = reactive({
  loginTime: '',
  attackerIp: '',
  username: '',
})
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
