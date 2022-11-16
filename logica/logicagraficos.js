/*var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
      
       let datos = JSON.parse(xhttp.responseText);
       document.getElementById("demo").innerHTML = datos.residuos_basura;
    }
};
xhttp.open("GET", "https://profejohao.github.io/prueba/datos.jason", true);
xhttp.send();*/


    var residuos_totales = "";
    var residuos_reciclabes = "";
    var residuos_basura = "";

   
    
const requestURL = "https://jesusmoyan.github.io/Proyecto-KS-Celular/datos_proyecto.json";
const request = new XMLHttpRequest();
request.open("GET", requestURL);
request.send();
request.onload = function(){
    const datos = request.response;
    var lol = JSON.parse(datos)
    console.log(lol)
     residuos_totales = parseInt(lol.residuos_totales)
     residuos_reciclabes = parseInt(lol.residuos_reciclabes)
    residuos_basura = parseInt(lol.residuos_basura)


}


function botongraficas(){

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['residuos totales', 'residuos reciclabes', 'residuos basura'],
        datasets: [{
            type: 'bar',
            label: 'grafico en barra',
            data: [residuos_totales, residuos_reciclabes, residuos_basura],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                
            ],
        }, {
            type: 'line',
            label: 'grafico en linea',
            labels: ['residuos_totales', 'residuos_reciclabes','residuos_basura'],
            data: [residuos_totales, residuos_reciclabes, residuos_basura],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}

function botonpie(){

const ctx = document.getElementById('myChart1').getContext('2d');
const myChart1 = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['residuos totales', 'residuos reciclabes', 'residuos basura'],
        datasets: [{
            label: 'grafico en barra',
            data: [residuos_totales, residuos_reciclabes, residuos_basura],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

}

function botonarea(){

    const ctx = document.getElementById('myChart2').getContext('2d');
    const myChart2 = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ['residuos totales', 'residuos reciclabes', 'residuos basura'],
            datasets: [{
                label: 'grafico en barra',
                data: [residuos_totales, residuos_reciclabes, residuos_basura],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    
    }