

export { AppServerModule } from './app/app.server.module';
import 'zone.js/node';
import { enableProdMode } from '@angular/core';
import { join } from 'path';
import * as express from 'express';
import { readFileSync } from 'fs';
import { AppServerModule } from './src/main.server';

const app = express();
const indexHtml = readFileSync(join('dist/browser', 'index.html'), 'utf-8');

app.get('*.*', express.static(join('dist/browser')));

app.get('*', (req:any, res:any) => {
  res.send(indexHtml);
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`SSR server running on http://localhost:4000`);
});

