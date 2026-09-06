// Employee Monthly Performance Chart
const ctxEmpPerf = document.getElementById('empPerformanceChart').getContext('2d');

new Chart(ctxEmpPerf, {
    type: 'bar',
    data: {
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [{
            label: 'Performance Score',
            data: [3.8, 4.0, 4.5, 4.2, 4.8, 4.6],
            backgroundColor: '#5d5fef',
            borderRadius: 6,
            barThickness: 24
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: '#64748b' }
            },
            y: {
                min: 0,
                max: 5,
                grid: { color: '#1e2538' },
                ticks: { color: '#64748b' }
            }
        }
    }
});
