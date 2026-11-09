
Chart.register(ChartDataLabels);

const ctx1 = document.getElementById('grafico1').getContext('2d');
const ctx2 = document.getElementById('grafico2').getContext('2d');
const ctx3 = document.getElementById('grafico3').getContext('2d');
const ctx4 = document.getElementById('grafico4').getContext('2d');

const grafico1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: [
            ['Baixa', '5,0–6,0'], 
            ['Regular', '6,0–7,0'], 
            ['Boa', '7,0–8,0'], 
            ['Muito Boa', '8,0–9,0'], 
            ['Excelente', '9,0–10,0']
        ],
        datasets: [{
            label: 'Média de downloads (mi)',
            data: [22.9, 29.0, 43.0, 56.5, 68.5],
            backgroundColor: [
                '#2c2575', 
                '#453b99', 
                '#6154c7', 
                '#8376eb', 
                '#c3bcf8' 
            ],
            borderRadius: 6, 
            borderSkipped: false, 
            barPercentage: 0.7, 
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, 
        layout: {
            padding: {
                top: 30 
            }
        },
        plugins: {
            legend: {
                display: false 
            },
            tooltip: {
                enabled: true 
            },
            datalabels: {
                anchor: 'end',
                align: 'top',
                offset: 4,
                color: '#ffffff', 
                font: {
                    weight: 'bold',
                    size: 14
                },
                formatter: function(value) {
                    return value.toFixed(1).replace('.', ',');
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false, 
                    drawBorder: false
                },
                ticks: {
                    color: '#CBC9EE', 
                    font: {
                        size: 12,
                        weight: '500'
                    },
                    padding: 10
                }
            },
            y: {
                beginAtZero: true,
                max: 80, 
                ticks: {
                    color: '#CBC9EE',
                    stepSize: 10, 
                    font: {
                        size: 12
                    },
                    padding: 10
                },
                grid: {
                    color: 'rgba(203, 201, 238, 0.1)', 
                    drawBorder: false 
                }
            }
        }
    }
});

const grafico2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Ação', 'Ficção Científica', 'Terror', 'Comédia', 'Drama'],
        datasets: [{
            label: 'Volume (Milhões)',
            data: [36.6, 34.8, 23.4, 21.6, 21.3],
            backgroundColor: [
                '#d49a2a', 
                '#d49a2a', 
                '#4b418c', 
                '#4b418c', 
                '#4b418c'  
            ],
            borderRadius: 6,
            borderSkipped: false,
            barPercentage: 0.6, 
        }]
    },
    options: {
        indexAxis: 'y', 
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                right: 40 
            }
        },
        plugins: {
            legend: {
                display: false 
            },
            tooltip: {
                enabled: true
            },
            datalabels: {
                anchor: 'end',
                align: 'right',
                offset: 6,
                color: '#ffffff',
                font: {
                    weight: 'bold',
                    size: 14
                },
                formatter: function(value) {
                    return value.toFixed(1).replace('.', ',');
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                max: 40, 
                display: false 
            },
            y: {
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    color: '#CBC9EE', // Lilás claro
                    font: {
                        size: 13,
                        weight: '500'
                    },
                    padding: 10
                }
            }
        }
    },
});

const grafico3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['1ª sem', '2ª sem', '3ª sem', '4ª sem', '5ª sem', '6ª sem', '7ª sem', '8ª sem'],
        datasets: [
            {
                label: '',
                data: [100, 35, 15, 6, 3, 1, 0, 0],
                borderColor: '#E6B04A', 
                backgroundColor: '#E6B04A', 
                borderWidth: 3, 
                borderDash: [], 
                pointBackgroundColor: '#E6B04A',
                pointBorderColor: '#E6B04A',
                pointRadius: 4,
                pointHoverRadius: 6,
                tension: 0.3 
            },
            {
                label: '',
                data: [100, 65, 45, 28, 16, 8, 3, 1],
                borderColor: '#4b418c', 
                backgroundColor: '#4b418c',
                borderWidth: 3, 
                borderDash: [5, 5], 
                pointBackgroundColor: '#4b418c',
                pointBorderColor: '#4b418c',
                pointRadius: 4,
                pointHoverRadius: 6,
                tension: 0.3
            },
            {
                label: '',
                data: [100, 78, 62, 50, 38, 27, 18, 10],
                borderColor: '#3b729a', 
                backgroundColor: '#3b729a',
                borderWidth: 3, 
                borderDash: [5, 5], 
                pointBackgroundColor: '#3b729a',
                pointBorderColor: '#3b729a',
                pointRadius: 4,
                pointHoverRadius: 6,
                tension: 0.3
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                    right: 120, 
                    top: 10,
                    bottom: 10
                }
        },
        plugins: {
            legend: {
                display: false 
            },
            tooltip: {
                enabled: true
            },
            datalabels: {
                display: function(context) {
                    return context.dataIndex === 0; 
                },
                align: 'top',
                color: function(context) {
                    return context.dataset.borderColor;
                },
                font: { weight: 'bold', size: 12 },
                formatter: function(value) { return value + '%'; }
            },
            offset: -10
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    color: '#CBC9EE',
                    font: { size: 12 }
                }
            },
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    color: '#CBC9EE',
                    stepSize: 20,
                    callback: function(value) {
                        return value + '%';
                    },
                    font: { size: 12 }
                },
                grid: {
                    color: 'rgba(203, 201, 238, 0.1)',
                    drawBorder: false
                }
            }
        }
    },

    plugins: [{
        id: 'customLineLabels',
        afterDatasetsDraw(chart, args, options) {
            const { ctx } = chart;
            chart.data.datasets.forEach((dataset, i) => {
                const meta = chart.getDatasetMeta(i);
                if (!meta.hidden) {
  
                    const lastPoint = meta.data[meta.data.length - 1];
                    
                    ctx.save();
                    ctx.fillStyle = dataset.borderColor;
                    ctx.font = 'bold 12px Montserrat, sans-serif';
                    ctx.textAlign = 'left';
                    ctx.textBaseline = 'middle';
                    
                    ctx.fillText(dataset.label, lastPoint.x + 15, lastPoint.y);
                    ctx.restore();
                }
            });
        }
    }, ChartDataLabels]
});

const corDestaque = '#E6B04A';
const corPadrao = '#4b418c';

const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
const coresBarras = meses.map(mes => {
    if (['Mai', 'Jun', 'Jul', 'Nov', 'Dez'].includes(mes)) {
        return corDestaque;
    }
    return corPadrao;
});

const grafico4 = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: meses,
        datasets: [
            {
                label: 'Variação do Volume',
                data: [
                    [12, 43], [12, 45], [11, 47], [10, 47], 
                    [35, 90], [35, 89], [40, 88],          
                    [15, 47], [12, 47], [12, 48],           
                    [35, 90], [33, 89]                      
                ],
                backgroundColor: coresBarras,
                borderColor: coresBarras,
                borderWidth: 0,
                borderRadius: 6, 
                barPercentage: 0.6, 
                categoryPercentage: 0.8,
                order: 2 
            },
            {
                label: 'Tendência',
                type: 'line',
                data: [35, 37, 39, 41, 44, 46, 48, 50, 51, 53, 55, 58], 
                borderColor: '#ffffff',
                borderWidth: 2,
                borderDash: [5, 5], 
                pointRadius: 0, 
                fill: false,
                tension: 0, 
                order: 1 
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: { top: 20 }
        },
        plugins: {
            legend: { display: false }, 
            tooltip: {
                callbacks: {
                    label: function(context) {
                        if (context.dataset.type === 'line') return `Tendência: ${context.raw}`;
                        const val = context.raw;
                        return `Variação: ${val[0]} a ${val[1]}`;
                    }
                }
            },
            datalabels: {
                display: false 
            }
        },
        scales: {
            x: {
                grid: { display: false, drawBorder: false },
                ticks: { color: '#CBC9EE', font: { size: 13, weight: '500' } }
            },
            y: {
                beginAtZero: true,
                max: 100, 
                ticks: {
                    color: '#CBC9EE',
                    stepSize: 20,
                    font: { size: 12 }
                },
                grid: {
                    color: 'rgba(203, 201, 238, 0.1)',
                    drawBorder: false
                }
            }
        }
    },
    plugins: [ChartDataLabels]
});
