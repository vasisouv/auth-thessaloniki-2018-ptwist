<template>
    <div>
        <small class="d-block text-uppercase font-weight-bold mb-3">Date range</small>
        <div class="datepicker-trigger">
            <base-input
                    addon-left-icon="ni ni-calendar-grid-58"
                    type="text"
                    id="datepicker-trigger"
                    placeholder="Select dates"
                    :value="formatDates(dateOne, dateTwo)"
            >
            </base-input>

            <AirbnbStyleDatepicker
                    ref="datePicker"
                    :trigger-element-id="'datepicker-trigger'"
                    :mode="'range'"
                    :fullscreen-mobile="true"
                    :date-one="dateOne"
                    :min-date="minDate"
                    :end-date="endDate"
                    :date-two="dateTwo"
                    @apply="emitTimestamps"
                    @date-one-selected="val => { dateOne = val }"
                    @date-two-selected="val => { dateTwo = val }"/>
        </div>
    </div>
</template>
<script>
    import {Bus} from '../bus'
    import moment from 'moment'
    import 'vue-airbnb-style-datepicker/dist/styles.css'

    const dateFormat = 'MMM D, YYYY';
    const firstCollectionDate = moment("2018-03-14").format(dateFormat);
    const thirtyDaysAgo = moment().subtract(30, 'days').format(dateFormat);
    import format from 'date-fns/format'
    const todayDate = moment().format(dateFormat);

    export default {
        name: 'daterange-picker',
        data() {
            return {
                dateFormat: dateFormat,
                dateOne: thirtyDaysAgo,
                dateTwo: todayDate,
                minDate: firstCollectionDate,
                endDate: todayDate
            }
        },
        mounted() {
            this.emitInitTimestamps();
        },
        methods: {
            formatDates(dateOne, dateTwo) {
                let formattedDates = '';
                if (dateOne) {
                    formattedDates = format(dateOne, this.dateFormat)
                }
                if (dateTwo) {
                    formattedDates += ' - ' + format(dateTwo, this.dateFormat)
                }
                return formattedDates
            },
            emitInitTimestamps(){
                let timestamps = {
                    from: moment(this.dateOne, dateFormat).unix() * 1000,
                    to: moment(this.dateTwo, dateFormat).unix() * 1000
                };
                Bus.$emit('daterange-update', timestamps);
            },
            emitTimestamps() {
                let timestamps = {
                    from: moment(this.dateOne, 'YYYY-MM-DD').unix() * 1000,
                    to: moment(this.dateTwo, 'YYYY-MM-DD').unix() * 1000
                };
                Bus.$emit('daterange-update', timestamps);
            },

        }
    }
</script>
