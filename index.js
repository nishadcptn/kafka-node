// topic -  kafka.dev.v1
const kafka = require('kafka-node');

const consume = async (topic, group) => {
    const ConsumerGroup = kafka.ConsumerGroup;

    const options = {
        kafkaHost: 'localhost:9092',
        batch: undefined,
        ssl: true,
        groupId: group,
        sessionTimeout: 15000,
        protocol: ['roundrobin'],
        encoding: 'utf8', 
        fromOffset: 'latest', 
        commitOffsetsOnFirstJoin: true, 
        outOfRangeOffset: 'earliest', 
        onRebalance: (isAlreadyMember, callback) => { callback(); } // or null
    }
    const consumerGroup = new ConsumerGroup(options, [topic]);

    consumerGroup.on('message', function (message) {
        console.log(`CONSUME --->[${group}]`,message);
        // 
    });
};

consume("kafka.dev.v1", "Nishad");

