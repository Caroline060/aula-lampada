let clientWeb = null; 

const clientId = "ESP8266" + Math.floor(Math.random() * 900) + 100;
clientWeb = new Paho.MQTT.Client("broker.emqx.io", 8884, clientId);
//clientWeb = new Paho.MQTT.Client("broker.hivemq.com", 8884, clientId);

clientWeb.connect({
  useSSL: true,
  timeout: 5,
  onSuccess: function () {
    alert('Conectado com sucesso!!');
  },
  onFalure: function (){
    alert('A conexão falhou!');
  }
});

function ligarLed() {
  document.getElementById("amarelo").classList.add("amar");

  //fazendo publish no tópico, (broker)
  const msgAmar = new Paho.MQTT.Message("");
  msgAmar.destinationName = "ncg/led/on"
  clientIdWeb.send(msgAmar)

}

function desligar() {
    document.getElementById("amarelo").classList.remove("amar");

    let msg = new Paho.MQTT.Message(``);
    msg.destinationName = "ncg/led/off"
    clientWeb.send(msg);
}