document.addEventListener('DOMContentLoaded', function () {
    // Definindo dados fictícios para os gráficos
    const salesData = {
        'January': [15000, 16000, 14000, 13000, 18000],
        'February': [16000, 17000, 15500, 14500, 19000],
        'March': [12000, 13000, 12500, 11000, 15000],
        'April': [20000, 21000, 19500, 18500, 24000],
        'May': [25000, 24000, 23000, 22000, 27000],
        'June': [22000, 23000, 24000, 21000, 25000],
        'July': [28000, 27500, 26000, 25000, 29000]
    };

    // Inicializa o gráfico de vendas
    let selectedMonth = 'June'; // Mês inicial selecionado
    const ctx = document.getElementById('salesChart').getContext('2d');
    let salesChart;

    function renderSalesChart() {
        const monthlySales = salesData[selectedMonth];
        
        // Criação do gráfico de vendas
        if (salesChart) salesChart.destroy(); // Destrói o gráfico anterior para renderizar o novo
        
        salesChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5'],
                datasets: [{
                    label: `Vendas de ${selectedMonth}`,
                    data: monthlySales,
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
                        display: true
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
            }
        });
    }

    // Função para atualizar as estatísticas do painel
    function updateDashboardStats() {
        const userStats = {
            'activeUsers': [1200, 1250, 1300, 1400, 1500, 1600, 1700], // Exemplo de usuários ativos por mês
            'sales': {
                'January': 20000,
                'February': 25000,
                'March': 22000,
                'April': 30000,
                'May': 35000,
                'June': 28000,
                'July': 40000
            }
        };

        // Atualizando informações no painel
        document.querySelector('.vendas .content p').innerHTML = `<strong>R$ ${userStats.sales[selectedMonth]}</strong> em vendas`;
        document.querySelector('.usuarios .content p').innerHTML = `<strong>${userStats.activeUsers[5]}</strong> usuários ativos`;

        // Mostra a porcentagem de crescimento com base no mês anterior (exemplo)
        let lastMonthIndex = Object.keys(userStats.sales).indexOf(selectedMonth) - 1;
        if (lastMonthIndex >= 0) {
            let lastMonthSales = userStats.sales[Object.keys(userStats.sales)[lastMonthIndex]];
            let percentageChange = ((userStats.sales[selectedMonth] - lastMonthSales) / lastMonthSales) * 100;
            document.querySelector('.vendas .percentage').innerText = `${percentageChange.toFixed(2)}% em relação ao mês anterior`;
        }
    }

    // Função para alterar o mês e atualizar o painel
    function changeMonth(event) {
        selectedMonth = event.target.value;
        updateDashboardStats();
        renderSalesChart();
    }

    // Inicia com dados do mês de Junho
    renderSalesChart();
    updateDashboardStats();

    // Adicionando os filtros de mês para o gráfico e dados
    const monthSelector = document.getElementById('monthSelector');
    monthSelector.addEventListener('change', changeMonth);
});