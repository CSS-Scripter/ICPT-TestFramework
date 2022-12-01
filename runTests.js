import { RunAllSuites } from "./TestFramework/Suite.js";
import { readdirSync } from "fs";

const runAllSpecFiles = async () => {
  const testFiles = readdirSync("./").filter(fn => fn.endsWith(".spec.js"));
  
  for (let file of testFiles) {
    await import(`./${file}`);
  }

  RunAllSuites();  
}

runAllSpecFiles();
