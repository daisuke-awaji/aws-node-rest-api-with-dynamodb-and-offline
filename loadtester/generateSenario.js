function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function generatePhases(phases, duration, arrivalRate) {
  const generatedPhases = [];
  for (let i = 0; i < rand(phases.min, phases.max); i++) {
    generatedPhases.push({
      duration: rand(duration.min, duration.max),
      arrivalRate: rand(arrivalRate.min, arrivalRate.max)
    });
  }
  return generatedPhases;
}

function generateScript() {
  fs = require("fs");
  yaml = require("js-yaml");
  const script = yaml.safeLoad(fs.readFileSync("./script.yml", "utf-8"));
  const phases = {
    min: 1,
    max: 10
  };
  const duration = {
    min: 10,
    max: 60
  };
  const arrivalRate = {
    min: 10,
    max: 100
  };
  script.config.phases = generatePhases(phases, duration, arrivalRate);
  fs.writeFileSync("./script.yml", yaml.safeDump(script));
}

generateScript();
