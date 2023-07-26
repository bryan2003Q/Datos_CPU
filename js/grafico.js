/*################################################################################################*/
/*####################################### DESPLIEGUE DEL GRAFICO #################################*/
/*################################################################################################*/

const ctx = document.getElementById("myChart").getContext("2d");
let labels_n = [];
let data_n = [];
let data_n2 = [];
let data_n3 = [];
let data_n4 = [];
let myChart = new Chart(ctx, {
	type: "line",
	data: {
		labels: labels_n,
		datasets: [
			{
				label: "CPU",
				data: data_n,
				backgroundColor: ["rgba(255, 99, 132, 0.2)"],
				borderColor: ["rgba(255, 99, 132, 1)"],
				borderWidth: 1,
			},
			{
				label: "Base Line",
				data: data_n2,
				backgroundColor: ["rgba(0, 0, 255, 0.2)"],
				borderColor: ["rgba(0, 0, 255,1)"],
				borderWidth: 1,
			}
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
});

function addData(chart, dataS) {

	let today = new Date();
	let date =
		today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	// Datos recolectados del sensor
	chart.data.labels.push(date);
chart.data.datasets[0].data.push(dataS);
chart.data.datasets[1].data.push(40);
	chart.update();
}


const ctx2 = document.getElementById("myChartMemory").getContext("2d");
let labels_n_memory = [];
let data_n_memory=[];
let data_n2_memory= [];
let data_n3_memory =[];
let data_n4_memory =[];
let myChartMemory = new Chart(ctx2, {
	type: "line",
	data: {
		labels: labels_n_memory,
		datasets: [
			{
				label: "Memoria",
				data: data_n_memory,
				backgroundColor: ["rgba(255, 99, 132, 0.2)"],
				borderColor: ["rgba(255, 99, 132, 1)"],
				borderWidth: 1,
			},
			{
				label: "Base Line",
				data: data_n2_memory,
				backgroundColor: ["rgba(0, 0, 255, 0.2)"],
				borderColor: ["rgba(0, 0, 255,1)"],
				borderWidth: 1,
			}
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
});

function addData_Memory(chart, dataS) {

	let today = new Date();
	let date =
		today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	// Datos recolectados del sensor
	chart.data.labels.push(date);
    chart.data.datasets[0].data.push(dataS);
    chart.data.datasets[1].data.push(40);
	chart.update();
}


const ctx3 = document.getElementById("myChartDisco").getContext("2d");
let labels_n_disco = [];
let data_n_disco=[];
let data_n2_disco= [];
let data_n3_disco =[];
let data_n4_disco =[];
let myChartDisco = new Chart(ctx3, {
	type: "line",
	data: {
		labels: labels_n_memory,
		datasets: [
			{
				label: "Disco",
				data: data_n_disco,
				backgroundColor: ["rgba(255, 99, 132, 0.2)"],
				borderColor: ["rgba(255, 99, 132, 1)"],
				borderWidth: 1,
			},
			{
				label: "Base Line",
				data: data_n2_disco,
				backgroundColor: ["rgba(0, 0, 255, 0.2)"],
				borderColor: ["rgba(0, 0, 255,1)"],
				borderWidth: 1,
			}
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
});

function addData_Disco(chart, dataS) {

	let today = new Date();
	let date =
		today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	// Datos recolectados del sensor
	chart.data.labels.push(date);
    chart.data.datasets[0].data.push(dataS);
    chart.data.datasets[1].data.push(40);
	chart.update();
}
