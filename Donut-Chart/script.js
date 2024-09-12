const ctx = document.getElementById('mychart')

new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: false,
                text: 'Chart.js Doughnut Chart'
            }
        }
    },
});

const config = {
    type: 'doughnut',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'Chart.js Doughnut Chart'
            }
        }
    },
};

const DATA_COUNT = 2;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

const data = {
    labels: ['Donated', 'Remaining'],
    datasets: [{
        label: ' ',
        data: [58.89, 31.11],
        backgroundColor: Object.values(Utils.CHART_COLORS),
    }]
};