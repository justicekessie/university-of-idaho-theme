import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = file => JSON.parse(readFileSync(path.join(root, file), 'utf8'));
const manifest = read('package.json');
const hex = /^#(?:[0-9a-f]{6}|[0-9a-f]{8})$/i;
const luminance = color => {
  const rgb = color.slice(1).match(/../g).slice(0, 3).map(v => parseInt(v, 16) / 255);
  const linear = rgb.map(v => v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
  return linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722;
};
const contrast = (a, b) => (Math.max(luminance(a), luminance(b)) + 0.05) / (Math.min(luminance(a), luminance(b)) + 0.05);
assert.equal(manifest.contributes.themes.length, 2);
assert(readFileSync(path.join(root, manifest.icon)).subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10])), 'Icon must be PNG');
for (const entry of manifest.contributes.themes) {
  const theme = read(entry.path);
  const c = theme.colors;
  assert.equal(theme.name, entry.label);
  assert.equal(theme.type, entry.uiTheme === 'vs-dark' ? 'dark' : 'light');
  for (const [key, value] of Object.entries(c)) assert.match(value, hex, key);
  for (const area of ['editor', 'terminal', 'input', 'editorSuggestWidget', 'positronConsole', 'positronVariables', 'positronDataExplorer']) {
    assert(contrast(c[`${area}.foreground`], c[`${area}.background`]) >= 4.5, `${entry.label}: ${area} text contrast`);
  }
  assert(contrast(c['button.foreground'], c['button.background']) >= 4.5, 'Button contrast');
  for (const rule of theme.tokenColors) {
    assert.match(rule.settings.foreground, hex);
    assert(contrast(rule.settings.foreground, c['editor.background']) >= 4.5, `${entry.label}: ${rule.scope} syntax contrast`);
  }
  assert.equal(theme.semanticHighlighting, true);
  for (const [token, style] of Object.entries(theme.semanticTokenColors)) {
    const color = typeof style === 'string' ? style : style.foreground;
    assert.match(color, hex);
    assert(contrast(color, c['editor.background']) >= 4.5, `${token} semantic contrast`);
  }
  assert.equal(c['button.background'], '#F1B300');
  assert.equal(c['activityBar.background'], '#191919');
  console.log(`${entry.label}: ${Object.keys(c).length} UI colors; syntax, semantic tokens and core text contrast passed`);
}
console.log('Manifest, icon, and both themes validated.');
