document.addEventListener('DOMContentLoaded', function () {
    // Inicializando o gráfico de vendas no Canvas
    var ctx = document.getElementById('chart1').getContext('2d');

    // Criando o gráfico com a biblioteca Chart.js
    var chart = new Chart(ctx, {
        type: 'bar', // Tipo do gráfico (bar = barras)
        data: {
            labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'], // Rótulos para cada barra
            datasets: [{
                label: 'Vendas Semanais', // Nome da série de dados
                data: [12, 19, 3, 5, 2], // Dados reais para cada barra
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Cor de fundo das barras
                borderColor: 'rgba(75, 192, 192, 1)', // Cor da borda das barras
                borderWidth: 1 // Largura da borda
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true // Iniciar o eixo Y do gráfico a partir de 0
                }
            }
        }
    });
});