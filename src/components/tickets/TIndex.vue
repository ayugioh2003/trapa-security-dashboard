<template>
  <div class="bg-white shadow-md TIndex">
    <h2 class="font-bold p-4">Tickets</h2>
    <hr />
    <section class="p-5">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane
          :label="item.label"
          :name="item.label"
          v-for="item in categoryList"
          :key="item.label"
        >
          <template #label>
            <span class="custom-tabs-label">
              <span
                class="mr-2"
                :class="{ 'text-gray-500': item.label !== activeName }"
                >{{ item.label }}</span
              >
              <el-tag
                class="rounded-full"
                :type="item.label === activeName ? '' : 'info'"
                >{{ item.list.length }}</el-tag
              >
            </span>
          </template>
        </el-tab-pane>
      </el-tabs>

      <div>
        <div
          v-for="(item, index) in computedList"
          :key="index"
          class="flex items-center py-3 px-2 rounded border-b hover:bg-blue-100"
        >
          <!-- status -->
          <div class="w-24 mr-3">
            <div
              class="inline-block text-white px-2 rounded"
              :style="{
                'background-color': statusList.find(
                  (v) => v.status === item.status
                ).color,
              }"
            >
              {{ item.status }}
            </div>
          </div>

          <!-- action name & tags -->
          <div class="mr-auto">
            <div>{{ item.actionName }}</div>
            <div class="">
              <span
                v-for="(item, index) in item.tags"
                :key="'tags' + index"
                class="mr-2"
              >
                {{ item }}
              </span>
              <span v-if="item.status === 'Resolved'" style="color: green;"
                >+{{ item.points }} pts</span
              >
            </div>
          </div>

          <!-- remain time -->
          <div v-if="item.status === 'Processing'" class="w-44 mr-6">
            <el-progress
              :percentage="(600 - item.remainTime) / 6"
              color="#3C3C3C"
              :show-text="false"
            />
            <div class="text-center text-gray-500">
              {{ toHHMMSS(item.remainTime) }} remain
            </div>
          </div>

          <!-- description -->
          <div class="w-56 text-gray-500">
            {{ getDesc(item) }}
          </div>

          <!-- index -->
          <div class="text-gray-500 w-16">#{{ item.index }}</div>

          <!-- icon -->
          <div class="w-10">
            <font-awesome-icon
              icon="fa-solid fa-bars"
              class="text-gray-500 cursor-pointer"
              v-if="item.status === 'Pending'"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import dayjs from 'dayjs'

const activeName = ref('All')
const handleClick = (tab, event) => {
  console.log(tab, event)
}

const statusList = [
  { status: 'Resolved', color: '#65A30D' },
  { status: 'Rejected', color: '#DC2626' },
  { status: 'Processing', color: '#FACC15' },
  { status: 'Pending', color: '#0284C7' },
]

const ticketList = ref([
  {
    index: '21',
    status: 'Pending',
    actionName: 'Action3: SQL Injection',
    tags: ['T1078'],
    remainTime: null,
    startIn: 6,
    started: null,
    rejectDate: '',
    resolveDate: '',
  },
  {
    index: '19',
    status: 'Pending',
    actionName: 'Action3: SQL Injection',
    tags: ['T1078'],
    remainTime: null,
    startIn: 1,
    started: null,
    rejectDate: '',
    resolveDate: '',
  },
  {
    index: '20',
    status: 'Pending',
    actionName: 'Action3: SQL Injection',
    tags: ['T1078'],
    remainTime: null,
    startIn: 6,
    started: null,
    rejectDate: '',
    resolveDate: '',
  },
  {
    index: '18',
    status: 'Pending',
    actionName: 'Action3: SQL Injection',
    tags: ['T1078'],
    remainTime: null,
    startIn: 1,
    started: null,
    rejectDate: '',
    resolveDate: '',
  },
  {
    index: '17',
    status: 'Processing',
    actionName: 'Action 4: Back Connect',
    tags: ['T1552.001'],
    remainTime: 99,
    startIn: null,
    started: 1,
    rejectDate: '',
    resolveDate: '',
  },
  {
    index: '16',
    status: 'Processing',
    actionName: 'Action 7: Hash Dumped',
    tags: ['T1003.008'],
    remainTime: 89,
    startIn: null,
    started: 1,
    rejectDate: '',
    resolveDate: '',
  },
  {
    index: '15',
    status: 'Processing',
    actionName: 'Action 5: C2 Server',
    tags: ['T1505.003'],
    remainTime: 532,
    startIn: null,
    started: 1,
    rejectDate: '',
    resolveDate: '',
  },
  {
    index: '12',
    status: 'Rejected',
    actionName: 'Action 3: SQL Injection',
    tags: ['T1078'],
    remainTime: 532,
    startIn: 1,
    started: null,
    rejectDate: dayjs().add(12, 'days'), // + 12 days
    resolveDate: '',
  },
  {
    index: '2',
    status: 'Resolved',
    actionName: 'Action 3: SQL Injection',
    tags: ['T1595.002'],
    remainTime: null,
    startIn: null,
    started: null,
    rejectDate: '',
    resolveDate: dayjs().add(20, 'days'), // + 20 days
    points: 100,
  },
  {
    index: '15',
    status: 'Resolved',
    actionName: 'Action 3: SQL Injection',
    tags: ['T1203', 'T1204.002'],
    remainTime: null,
    startIn: null,
    started: null,
    rejectDate: '',
    resolveDate: dayjs().add(20, 'days'), // + 20 days
    points: 400,
  },
])

const categoryList = [
  { label: 'All', list: ticketList.value },
  {
    label: 'Queued',
    list: ticketList.value.filter((item) =>
      ['Pending', 'Processing'].includes(item.status)
    ),
  },
  {
    label: 'Resolved',
    list: ticketList.value.filter((item) => ['Resolved'].includes(item.status)),
  },
  {
    label: 'Rejected',
    list: ticketList.value.filter((item) => ['Rejected'].includes(item.status)),
  },
]

const computedList = computed(() => {
  return categoryList.find((item) => item.label === activeName.value).list
})

const toHHMMSS = (secs) => {
  var sec_num = parseInt(secs, 10)
  var hours = Math.floor(sec_num / 3600)
  var minutes = Math.floor(sec_num / 60) % 60
  var seconds = sec_num % 60

  return [hours, minutes, seconds]
    .map((v) => (v < 10 ? '0' + v : v))
    .filter((v, i) => v !== '00' || i > 0)
    .join(':')
}

const getDesc = (item) => {
  if (item.status === 'Pending') {
    return `Start in ${item.startIn} minutes`
  } else if (item.status === 'Processing') {
    return `Started ${item.started} minutes ago`
  } else if (item.status === 'Rejected') {
    return `Rejected ${Math.abs(dayjs().diff(item.rejectDate, 'day'))} days ago`
  } else if (item.status === 'Resolved') {
    return `Resolved ${Math.abs(
      dayjs().diff(item.resolveDate, 'day')
    )} days ago`
  }
}

console.log('categoryList', categoryList)
</script>

<style lang="scss">
.TIndex {
  .el-tabs__nav-wrap::after {
    background-color: transparent;
  }
}
</style>
