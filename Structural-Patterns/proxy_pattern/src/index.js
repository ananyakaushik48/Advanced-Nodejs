import fsOG from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fsProxy from "./fsProxy.js";

const fs = new fsProxy(fsOG);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const txtFilePath = path.resolve(__dirname, "testFile.txt");
const jsonFilePath = path.resolve(__dirname, "testFile.json");


const handleFileRead = (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log("File content:", data);
    }
}


fs.readFile(txtFilePath, "utf8", handleFileRead);

fs.readFile(jsonFilePath, "utf8", handleFileRead);