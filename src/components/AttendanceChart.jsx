import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';

export default function AttendanceChart() {
    const chartContainer = useRef(null);

    useEffect(() => {
        const chart = Highcharts.chart(chartContainer.current, {
            chart: {
                type: 'areaspline',
                backgroundColor: 'transparent',
                height: 300,
                spacing: [15, 10, 10, 10],
            },
            title: {
                text: null,
            },
            credits: {
                enabled: false,
            },
            legend: {
                enabled: true,
                align: 'right',
                verticalAlign: 'top',
                itemStyle: {
                    color: '#aab3c2',
                    fontWeight: '600',
                },
            },
            xAxis: {
                categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                lineColor: '#263142',
                tickColor: '#263142',
                labels: {
                    style: {
                        color: '#7f8b9d',
                    },
                },
            },
            yAxis: {
                min: 70,
                max: 100,
                tickInterval: 5,
                title: {
                    text: null,
                },
                gridLineColor: '#202a38',
                labels: {
                    format: '{value}%',
                    style: {
                        color: '#7f8b9d',
                    },
                },
            },
            tooltip: {
                shared: true,
                valueSuffix: '%',
                backgroundColor: '#111827',
                borderColor: '#263142',
                style: {
                    color: '#fff',
                },
            },
            plotOptions: {
                areaspline: {
                    lineWidth: 3,
                    fillOpacity: 0.12,
                    marker: {
                        radius: 4,
                        lineWidth: 2,
                    },
                },
            },
            series: [
                {
                    name: 'Attendance',
                    data: [91, 94, 89, 96, 93, 95],
                    color: '#22c7d6',
                },
            ],
        });

        return () => chart.destroy();
    }, []);

    return <div ref={chartContainer} className="highchart" />;
}
