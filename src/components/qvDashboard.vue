<template>
  <div class="main-content">
    <div style="width:30rem; max-width:50%; float:left;">
      <h4 class="mt-2"><b>{{$t('dashboard.infoTitle')}}:</b></h4>
      <p>
        <b>{{$t('dashboard.infoTotalNotebooks')}}:</b> {{notebookCount}}<br>
        <b>{{$t('dashboard.infoTotalNotes')}}:</b> {{notesCountTotal}}<br>
        <b>{{$t('dashboard.infoTotalTags')}}:</b> {{tagsCount}}
      </p>
      <p>
        <b>{{$t('dashboard.infoFirstNote')}}:</b> {{statistic.dateFirst | formatDate}}<br>
        <b>{{$t('dashboard.infoLastChanges')}}:</b> {{statistic.dateLast | formatDate}}
      </p>
      <p>
        <b>{{$t('dashboard.infoSearchIndexSize')}}:</b> {{statistic.dataSize}}
      </p>
    </div>
    <div style="width:30rem; max-width:50%; float:left;">
      <h4 class="mt-2"><b>{{$t('dashboard.tagsPieTitle')}}:</b></h4>
      <ve-pie
        :data="statistic.tagsCountChartData"
        :settings="{radius:80,offsetY: '50%', label:{show:false}}"
        :extend="statistic.tagsCountchartSettings"
        width="100%"
        height="13rem"
      ></ve-pie>

    </div>
    <div class="clearfix"></div>
    <div style="width:60rem; max-width:100%;">
      <h4 class="mt-4"><b>{{$t('dashboard.activityTitle')}}:</b></h4>
      <calendar-heatmap
        :values="statistic.calendarData"
        :end-date="new Intl.DateTimeFormat('en-US').format(new Date())"
        :range-color="['#ebedf0', '#c6e48b', '#7bc96f', '#24a53e', '#1f7a31', '#0e5b1d']"
        :locale="{ months: $t('dashboard.activityGraph.months'), days: $t('dashboard.activityGraph.days'), on: $t('dashboard.activityGraph.on'), less: $t('dashboard.activityGraph.less'), more: $t('dashboard.activityGraph.more') }"
        :tooltip-unit="$t('dashboard.activityGraph.tooltipUnit')"
      />
    </div>
  </div>
</template>

<script>
import mixin from './mixins'
import VePie from 'v-charts/lib/pie.common'
import { CalendarHeatmap } from 'vue-calendar-heatmap'

export default {
    name: 'qvDashboard',
    components: { VePie, CalendarHeatmap },
    mixins: [mixin],
    data () {
        return {
            statistic: {
                dateFirst: 0,
                dateLast: 0,
                // 'chartsCreatedDate': {},
                dataSize: 0,
                tagsCountChartData: {
                    columns: ['tags', 'cost'],
                    rows: []
                },
                tagsCountchartSettings: {
                    legend: {
                        // 'right': 'left',
                        left: 0,
                        top: 'middle',
                        orient: 'vertical',
                        show: true
                    }
                },
                calendarData: []
            }
        }
    },
    beforeCreate: function () {
        fetch(this.$store.getters.apiFolder + '/statistic.json')
            .then(response => response.json())
            .then(jsonData => {
                for (var elementC in jsonData.tagsCount) {
                    this.statistic.tagsCountChartData.rows.push({
                        tags: elementC,
                        cost: jsonData.tagsCount[elementC]
                    })
                }
                for (var elementD in jsonData.chartsUpdatedDate) {
                    this.statistic.calendarData.push({
                        date: elementD,
                        count: jsonData.chartsUpdatedDate[elementD]
                    })
                }
                this.statistic.dateFirst = jsonData.dateFirst
                this.statistic.dateLast = jsonData.dateLast
                this.statistic.dataSize = jsonData.dataSize
            })
            .catch(error => {
                console.error('Request failed', error)
                this.status = {
                    errorType: 2,
                    errorText: this.$t('dashboard.errorDownloadingStatistic')
                }
                this.$toast.error({
                    title: this.$t('dashboard.messageErrorTitle'),
                    message: this.$t('dashboard.errorDownloadingStatistic'),
                    closeButton: true,
                    progressBar: true,
                    timeOut: 7000
                })
            })
    }
}
</script>
