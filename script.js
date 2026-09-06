window.addEventListener('DOMContentLoaded', () => {
    
    // 1. Line Chart
    const lineCanvas = document.getElementById('satisfactionChart');
    if (lineCanvas) {
        new Chart(lineCanvas, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                datasets: [
                    { label: 'Work in Office', data: [30, 60, 40, 65, 35, 45, 55, 40, 70, 50], borderColor: '#06b6d4', tension: 0.4 },
                    { label: 'Remote Work', data: [65, 70, 60, 40, 65, 50, 45, 60, 50, 55], borderColor: '#a855f7', tension: 0.4 }
                ]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }

    // 2. Donut Chart
    const donutCanvas = document.getElementById('attendanceChart');
    if (donutCanvas) {
        new Chart(donutCanvas, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [20, 10, 5, 4],
                    backgroundColor: ['#8b5cf6', '#ffffff', '#ec4899', '#f97316'],
                    borderWidth: 0,
                    cutout: '75%'
                }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }

});
