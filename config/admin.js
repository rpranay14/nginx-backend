const { kafka } = require("./kafka");

async function admin() {
  const admin = kafka.admin();
  console.log("Admin connecting...");
  admin.connect();
  console.log("Adming Connection Success...");

  console.log("Creating Topic [rider-updates]");
  await admin.createTopics({
    topics: [
      {
        topic: "promotion",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic Created Success [ri]");

  console.log("Disconnecting Admin..");
  await admin.disconnect();
}
module.exports=admin;