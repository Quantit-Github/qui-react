import fs from 'fs';
import sass from 'sass';

const result = sass.compile('./lib/styles/main.scss');

fs.writeFileSync('./dist/main.css', result.css);
