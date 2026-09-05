import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const easy = JSON.parse(
  fs.readFileSync(path.join(rootDir, "src/data/output-questions-easy.json"), "utf-8")
);
const medium = JSON.parse(
  fs.readFileSync(path.join(rootDir, "src/data/output-questions-medium.json"), "utf-8")
);
const hard = JSON.parse(
  fs.readFileSync(path.join(rootDir, "src/data/output-questions-hard.json"), "utf-8")
);

const all = [...easy, ...medium, ...hard];

console.log(`Validating all ${all.length} output questions...`);

if (all.length !== 100) {
  throw new Error(`Expected exactly 100 questions, found ${all.length}`);
}

const seenIds = new Set();

for (const q of all) {
  if (seenIds.has(q.id)) {
    throw new Error(`Duplicate question ID detected: ${q.id}`);
  }
  seenIds.add(q.id);

  if (!q.topic || typeof q.topic !== "string") {
    throw new Error(`Question #${q.id} missing valid topic`);
  }
  if (!q.code || typeof q.code !== "string") {
    throw new Error(`Question #${q.id} missing valid code`);
  }
  if (!Array.isArray(q.options) || q.options.length !== 4) {
    throw new Error(`Question #${q.id} must have exactly 4 options`);
  }
  const optionSet = new Set(q.options);
  if (optionSet.size !== 4) {
    throw new Error(`Question #${q.id} has duplicate options: ${JSON.stringify(q.options)}`);
  }
  if (typeof q.correctIndex !== "number" || q.correctIndex < 0 || q.correctIndex > 3) {
    throw new Error(`Question #${q.id} has invalid correctIndex: ${q.correctIndex}`);
  }
  if (!q.explanation || typeof q.explanation !== "string" || q.explanation.trim().length === 0) {
    throw new Error(`Question #${q.id} has empty explanation`);
  }

  // Regression check for question 37 (IIFE)
  if (q.id === 37) {
    if (q.options[q.correctIndex] !== "2") {
      throw new Error(`Question #37 expected correct answer to be "2", but got "${q.options[q.correctIndex]}"`);
    }
  }

  // Regression check for question 67 (flat & flatMap)
  if (q.id === 67) {
    if (q.options[q.correctIndex] !== "[1, 2, [3]], [2, 2, [3]]") {
      throw new Error(`Question #67 expected correct answer to be "[1, 2, [3]], [2, 2, [3]]", but got "${q.options[q.correctIndex]}"`);
    }
  }

  // Regression check for question 39 (lexical this in an arrow function)
  if (q.id === 39) {
    if (q.options[q.correctIndex] !== "JS, Outer") {
      throw new Error(`Question #39 expected correct answer to be "JS, Outer", but got "${q.options[q.correctIndex]}"`);
    }
  }
}

console.log("✅ All 100 questions passed structural, uniqueness, and correctness validation!");
