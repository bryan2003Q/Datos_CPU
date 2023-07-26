/*################################################################################################*/
/*####################################### CLIENTE MQTT ###########################################*/
/*################################################################################################*/

//var wsbroker = "192.168.0.3";  //mqtt websocket enabled broker
//var wsbroker = "localhost";
var wsbroker = "broker.hivemq.com";

//var wsport = 8083 // port for above
var wsport = 1883; // port for above

var client = new Paho.MQTT.Client(
	wsbroker,
	Number(8000),
	"myclientid_" + parseInt(Math.random() * 100, 10)
);

client.onConnectionLost = function (responseObject) {
	console.log("connection lost: " + responseObject.errorMessage);
};

/*################################################################################################*/
/*####################################### LLEGA EL MENSAJE########################################*/
/*################################################################################################*/

client.onMessageArrived = function (message) {
	let destination = message.destinationName;
	if (destination === "mensajebryan") {
		let response = JSON.parse(message.payloadString);
		dataFormat = response;
		//let dataCPU= dataFormat.cpu;
		//let dataMemoria=dataFormat.memoria;
		//let dataDisco=dataFormat.discoduro;
		console.log(dataFormat);
		console.log(parseFloat(dataFormat.value));

		//cargar datos cpu, memoria y almacenamiento
		addData(
			myChart,
			parseFloat(dataFormat.cpu),
		);


		addData_Memory(
			myChartMemory,
			parseFloat(dataFormat.memoria),
		);

		addData_Disco(
			myChartDisco,
			parseFloat(dataFormat.discoduro),
		);


	}
};

var options = {
	timeout: 3,
	onSuccess: function () {
		console.log("mqtt connected");
		// Connection succeeded; subscribe to our topic, you can add multile lines of these
		client.subscribe("mensajebryan", { qos: 1 });
	},
	onFailure: function (message) {
		console.log("Connection failed: " + message.errorMessage);
	},
};

function init() {
	client.connect(options);
}
