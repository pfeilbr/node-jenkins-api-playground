require("dotenv").config();

const util = require("util");

const runJenkinsExamples = async () => {
  const jenkins = require("jenkins")({
    baseUrl: `https://${process.env.USERNAME}:${process.env.PASSWORD}@${
      process.env.JENKINS_BASE_URL
    }`,
    crumbIssuer: true
  });
  const jobName = "PERSONAL/PFEIL/pipeline-test-02";

  const jobConfig = () => {
    jenkins.job.config(jobName, function(err, data) {
      if (err) {
        return console.error(err);
      }
      console.log("queue item number", data);
    });
  };

  const build = () => {
    // jenkins.job.build({ name: jobName, parameters: {} }, function(err, data) {
    jenkins.job.build(jobName, function(err, data) {
      if (err) {
        return console.error(err);
      }
      console.log("queue item number", data);
    });
  };

  jobConfig()
  build()
};

runJenkinsExamples();
