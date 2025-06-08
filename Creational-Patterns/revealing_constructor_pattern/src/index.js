import { Config } from "./config.js"

const config = new Config((appConfig) => {
    appConfig.set("port", 3000);
    appConfig.set("env", "development")
    appConfig.setMultiple({
        database: "myappdb",
        debug: true
    });
});



console.log("App port:", config.get("port"));
console.log("All settings: ", config.getAll());

config.getAll.port = 8000;

console.log("App port after modification", config.get("port"));