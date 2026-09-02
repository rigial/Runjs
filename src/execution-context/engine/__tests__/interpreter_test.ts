import { simulateExecutionContext } from '../interpreter';
import { CONTEXT_PRESETS } from '../presets';

console.log(
  `=== Testing JavaScript Execution Context Visualizer Presets ===\n`
);

let passedCount = 0;

for (const preset of CONTEXT_PRESETS) {
  console.log(`Testing preset "${preset.title}" (${preset.category})...`);
  const result = simulateExecutionContext(preset.code);

  if (!result.success) {
    throw new Error(
      `Preset "${preset.title}" failed to simulate: ${result.error} (line ${result.errorLine})`
    );
  }

  if (result.steps.length === 0) {
    throw new Error(`Preset "${preset.title}" produced 0 steps.`);
  }

  const finalStep = result.steps[result.steps.length - 1];
  console.log(
    `  ✓ ${result.steps.length} steps generated, ${finalStep.logs.length} logs produced.`
  );
  passedCount++;
}

console.log(
  `\nAll ${passedCount}/${CONTEXT_PRESETS.length} presets validated successfully!\n`
);
