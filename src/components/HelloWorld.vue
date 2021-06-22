<template>
  <div class="hello">
    <el-date-picker
      v-model="value1"
      ref="picker"
      @change="handleChange"
      type="datetimerange"
      :picker-options="pickerOptions"
    >
    </el-date-picker>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    const vm = this
    return {
      value1: "",
      pickerOptions: {
        // disabledDate() {
        //   return true;
        // },
      
        onPick() {
            const range = [dayjs().set('hour', 14).set('minute', 40).set('second', 0).toDate(), dayjs().toDate()]
            console.log(range)
          this.$nextTick(()=>{
            vm.$refs.picker.picker.$refs.minTimePicker.$refs.spinner.selectableRange=[range]
          })
        },
      },
    };
  },
  mounted() {
    // console.log(this.$refs.picker);
    // console.log(dayjs(dayjs().set('hour', 14).set('minute', 40).set('second', 0)).format("YYYY-MM-DDHH:mm:ss"));
    // console.log(dayjs(dayjs(dayjs().set('hour', 23).set('minute', 40).set('second', 0)).format("YYYY-MM-DDHH:mm:ss")).format("YYYY-MM-DDHH:mm:ss"));
  },
  methods: {
    handleChange(v) {
      console.log(v);
    },
  },
};
</script>

