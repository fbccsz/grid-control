// Exemplo de gráfico utilizando Chart.js
document.addEventListener('DOMContentLoaded', function () {
    // Gráfico de Vendas (Chart.js)
    var ctx = document.getElementById('salesChart').getContext('2d');
    var salesChart = new Chart(ctx,
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
            datasets: [{
                label: 'Vendas',
                data: [15000, 18000, 12000, 20000, 25000, 22000, 28000],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        });
});