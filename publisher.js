const kafka = require('kafka-node'),
    Producer = kafka.Producer,
    client = new kafka.KafkaClient(),
    producer = new Producer(client)

producer.on('ready', function (data) {
    console.log(data);
});
    
producer.on('error', function (err) {
    console.log(err);
})

const publish = async (payload) => {
    producer.send(payload, function (err, data) {
        console.log("RETURN ---->",data);
    });
};

publish(
    [{ 
        topic: 'kafka.dev.v1', 
        messages: JSON.stringify(
            {
                id: 1,
                payload: {
                    name: "Test pauload 1"
                }
            }
        ), 
        partition: 0 
    }]
);