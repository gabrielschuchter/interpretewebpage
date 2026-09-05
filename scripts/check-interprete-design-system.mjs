#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
if (!args.length) {
  console.error('Uso: node scripts/check-interprete-design-system.mjs <arquivo-ou-pasta> [...]');
  console.error('Passe apenas código novo/migrado. O site legado academy-* ainda não é compatível.');
  process.exit(2);
}

const ignored = new Set(['node_modules', '.next', '.git', 'output', 'brand/source']);
const textExt = new Set(['.css', '.scss', '.sass', '.less', '.ts', '.tsx', '.js', '.jsx', '.mjs', '.mdx', '.html']);
const allowedHexFiles = new Set([
  path.normalize('docs/design-system/tokens.css'),
  path.normalize('docs/design-system/tokens.json'),
  path.normalize('app/tokens.css'),
  path.normalize('lib/design-system.ts')
]);

const rules = [
  {
    id: 'gradient',
    re: /(?:linear|radial|conic)-gradient\s*\(/gi,
    message: 'Gradientes são proibidos pelo design system.'
  },
  {
    id: 'legacy-academy',
    re: /--academy-|academy-(?:navy|blue|gray|shadow|button|brand-mark)/gi,
    message: 'Não copie tokens/classes visuais do sistema academy-* legado.'
  },
  {
    id: 'source-serif-4',
    re: /Source Serif 4/gi,
    message: 'Source Serif Pro é a serif canônica; Source Serif 4 é apenas artefato do mockup.'
  }
];

const brandHex = /#(?:F1EBE8|8C1535|410230|D62839|D60858|FFFFFF|000000|40222F|7A5A69|E2D6D1|E4DAD5)\b/gi;

function walk(input, out = []) {
  const stat = fs.statSync(input);
  if (stat.isDirectory()) {
    if (ignored.has(path.basename(input))) return out;
    for (const name of fs.readdirSync(input)) walk(path.join(input, name), out);
    return out;
  }
  if (textExt.has(path.extname(input))) out.push(input);
  return out;
}

const findings = [];
for (const input of args) {
  if (!fs.existsSync(input)) {
    findings.push({ file: input, line: 0, rule: 'missing', message: 'Caminho não existe.' });
    continue;
  }

  for (const file of walk(input)) {
    const normalized = path.normalize(file);
    const source = fs.readFileSync(file, 'utf8');
    const lines = source.split(/\r?\n/);

    for (const rule of rules) {
      lines.forEach((line, i) => {
        rule.re.lastIndex = 0;
        if (rule.re.test(line)) findings.push({ file, line: i + 1, rule: rule.id, message: rule.message });
      });
    }

    if (!allowedHexFiles.has(normalized)) {
      lines.forEach((line, i) => {
        brandHex.lastIndex = 0;
        if (brandHex.test(line)) {
          findings.push({
            file,
            line: i + 1,
            rule: 'raw-color',
            message: 'Use token semântico em código novo; hex cru pertence à camada de tokens.'
          });
        }
      });
    }
  }
}

if (findings.length) {
  for (const item of findings) {
    console.error(item.file + ':' + item.line + ' [' + item.rule + '] ' + item.message);
  }
  console.error('\n' + findings.length + ' violação(ões).');
  process.exit(1);
}

console.log('Interprete. design-system check: OK');
