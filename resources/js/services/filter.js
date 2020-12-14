import Vue from "vue";

export default Vue.filter("validateDateTime", function(date) {
    const dateTime = new Date(date);

    const day = dateTime.getDate();
    const month = dateTime.getMonth();
    const year = dateTime.getFullYear();
    const hour = dateTime.getHours();
    const minute = dateTime.getMinutes();
    const second = dateTime.getSeconds();

    return `${day}-${month + 1}-${year} ${hour}:${minute}:${second}`;
});