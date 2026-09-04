function assert(condition: boolean, message: string) {
  if (!condition) {
    throw new Error(`Assertion failed: ${message}`);
  }
}

function simulateHTMLResetButton(onConfirm: () => void, onClose: () => void) {
  try {
    onConfirm();
  } finally {
    onClose();
  }
}

console.log('=== Testing HTML Playground Reset Modal & Preview Reload ===\n');

// 1. Should call onConfirm and onClose upon reset click
{
  const state = { confirmed: false, closed: false };

  simulateHTMLResetButton(
    () => {
      state.confirmed = true;
    },
    () => {
      state.closed = true;
    }
  );

  assert(state.confirmed, 'onConfirm should have been called');
  assert(state.closed, 'onClose should have been called');
  console.log('  ✓ Successfully called onConfirm and onClose on reset click');
}

// 2. Should guarantee onClose is executed even if onConfirm throws
{
  const state = { closed: false, errorCaught: false };

  try {
    simulateHTMLResetButton(
      () => {
        throw new Error('Simulation of unexpected failure');
      },
      () => {
        state.closed = true;
      }
    );
  } catch (err) {
    state.errorCaught = true;
    assert(
      (err as Error).message === 'Simulation of unexpected failure',
      'Expected error message'
    );
  }

  assert(state.errorCaught, 'Error should be propagated');
  assert(state.closed, 'Modal onClose must always be called via finally block');
  console.log('  ✓ Guaranteed onClose execution even if onConfirm throws');
}

// 3. Should not cause infinite recursion between reload and onManualReload
{
  let reloadCount = 0;
  let manualReloadCount = 0;

  // Decoupled preview ref implementation
  const reloadIframe = () => {
    reloadCount++;
  };

  const handleToolbarReload = () => {
    reloadIframe();
    onManualReload();
  };

  const previewRef = {
    reload: reloadIframe,
  };

  // Parent handler
  const handleRun = () => {
    manualReloadCount++;
    previewRef.reload();
  };

  const onManualReload = () => {
    handleRun();
  };

  // Step 1: Calling previewRef.reload() directly (as in executeReset)
  previewRef.reload();
  assert(reloadCount === 1, 'reloadCount should be 1');
  assert(
    manualReloadCount === 0,
    'Imperative reload should not trigger onManualReload'
  );

  // Step 2: Calling toolbar reload button
  handleToolbarReload();
  assert(
    reloadCount === 3,
    'reloadCount should be 3 (1 initial + 1 toolbar + 1 handleRun)'
  );
  assert(manualReloadCount === 1, 'manualReloadCount should be 1');
  console.log('  ✓ Decoupled reload does not trigger infinite recursion');
}

console.log('\nAll HTML Reset Modal and Preview Reload tests passed successfully! 🎉');
