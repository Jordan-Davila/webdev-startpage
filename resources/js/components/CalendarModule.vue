<template>
    <div
        class="fav-links flex flex-col rounded-lg shadow-lg pt-4 px-4 mb-6"
        style="background: #303348"
    >
        <date-picker title-position="left" is-dark color="indigo" v-model="date" />
    </div>
</template>
<script>
import Calendar from "v-calendar/lib/components/calendar.umd";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
export default {
    components: {
        Calendar,
        DatePicker,
    },
    data() {
        return {
            date: new Date(),
        };
    },
};
</script>
