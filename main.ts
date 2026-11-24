import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const joke = "HR told me my performance review was 'transformative', which actually means you're fired.";
const outputPath = '/output/entry.txt';

try {
  const dir = dirname(outputPath);
  mkdirSync(dir, { recursive: true });
  writeFileSync(outputPath, joke);
  console.log('Joke written successfully to ' + outputPath);
} catch (err) {
  console.error('Error writing joke:', err);
  process.exit(1);
}
