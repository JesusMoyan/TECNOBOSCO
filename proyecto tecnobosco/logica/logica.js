var usuarios = [];
function registro() {
    var usuario1 = document.getElementById("user").value;
    var nombres1 = document.getElementById("name").value;
    var apellidos1 = document.getElementById("lname").value;
    var contraseña1 = document.getElementById("pass2").value;
    var contraseña2 = document.getElementById("pass2").value;
    var email1 = document.getElementById("email").value;
    var id1 = document.getElementById("id").value;

    var marca = true;

    for (var i = 0; i < usuarios.length; i++) {

        if (usuarios[i].email == email1 ) {
            marca = false;
            break;
        }

    }

if(contraseña1 == contraseña2 &&  contraseña1.length > 6 && marca){

    

   

        

        var guardarusuarios = {

            usuario: "",
            nombres: "",
            apellidos: "",
            contraseña: "",
            email: "",
            id: ""
        }

        guardarusuarios.usuario = usuario1;
        guardarusuarios.nombres = nombres1;
        guardarusuarios.apellidos = apellidos1;
        guardarusuarios.contraseña = contraseña1;
        guardarusuarios.email = email1;
        guardarusuarios.id = id1;

        usuarios.push(guardarusuarios);

        var usuarios_registados = JSON.stringify(usuarios);
        localStorage.setItem("usuariosr", usuarios_registados);
        window.location = 'login.html';
        
    

}else{
    alert("error")
}  

}

function login() {

    var usuario2 = document.getElementById("userlogin").value;
    var contraseña2 = document.getElementById("passlogin").value;
    var marca = false;


    for (var i = 0; i < usuarios.length; i++) {

        if (usuario2 == usuarios[i].id && contraseña2 == usuarios[i].contraseña) {
            marca = true;
            break;
        }
    }

    if (marca == false) {
        alert("error")

    } else {

        window.location=("principal.html")
    
    }
}

function iniciar() {

    var ola = localStorage.getItem("usuariosr");

    if (ola != null) {
        usuarios = JSON.parse(ola);

    } else {
        usuarios = [];
    }



    var ola2 = localStorage.getItem("datosr");

    if (ola != null) {
        datos = JSON.parse(ola2);

    } else {
        datos = [];
    }


}












function iniciar() {

    var ola = localStorage.getItem("usuariosr");

    if (ola != null) {
        usuarios = JSON.parse(ola);

    } else {
        usuarios = [];
    }



    var ola2 = localStorage.getItem("datosr");

    if (ola != null) {
        datos = JSON.parse(ola2);

    } else {
        datos = [];
    }


    fechas();



}

setInterval(fechas, 1000);

function fechas() {
    var hoy = new Date();

    var dia = hoy.getDate();
    var mes = hoy.getMonth() + 1;
    var angio = hoy.getFullYear();

    dia = ("0" + dia).slice(-2);
    mes = ("0" + mes).slice(-2);

    let formato2 = dia + "/" + mes + "/" + angio;

    document.getElementById("fecha").innerHTML = formato2;


    var hora = new Date();
    document.getElementById("hora").innerHTML = hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds();

}




function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.currentTarget.appendChild(document.getElementById(data));
}






//GRAFICOS

function grafica(){
    const config = {
        type: 'bar',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Chart.js Bar Chart'
            }
          }
        },
      };


      const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

const labels = Utils.months({count: 7});
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Fully Rounded',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
      borderWidth: 2,
      borderRadius: Number.MAX_VALUE,
      borderSkipped: false,
    },
    {
      label: 'Small Radius',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      borderWidth: 2,
      borderRadius: 5,
      borderSkipped: false,
    }
  ]
};


const actions = [
    {
      name: 'Randomize',
      handler(chart) {
        chart.data.datasets.forEach(dataset => {
          dataset.data = Utils.numbers({count: chart.data.labels.length, min: -100, max: 100});
        });
        chart.update();
      }
    },
  ];
}

