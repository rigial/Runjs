import { simulateCode } from '../simulator';
import { VISUALIZER_PRESETS } from '../presets';

console.log(
  `=== Testing All ${VISUALIZER_PRESETS.length} Visualizer Presets ===\n`
);

let passed = 0;

for (const preset of VISUALIZER_PRESETS) {
  console.log(`Testing preset: "${preset.title}" (${preset.category})...`);
  const result = simulateCode(preset.code);

  if (!result.success) {
    throw new Error(
      `Preset "${preset.title}" failed to simulate: ${result.error}`
    );
  }

  if (result.steps.length < 2) {
    throw new Error(
      `Preset "${preset.title}" produced insufficient steps: ${result.steps.length}`
    );
  }

  const finalStep = result.steps[result.steps.length - 1];
  if (finalStep.eventLoopPhase !== 'finished') {
    throw new Error(
      `Preset "${preset.title}" did not reach finished phase (got ${finalStep.eventLoopPhase})`
    );
  }

  console.log(
    `  ✓ ${result.steps.length} steps generated, final logs: ${finalStep.logs.length}`
  );
  passed++;
}

console.log(
  `\nAll ${passed}/${VISUALIZER_PRESETS.length} presets validated successfully!`
);
