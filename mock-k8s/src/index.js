import 'babel-polyfill';
import 'babel-core/register';
import express from 'express';

import { injectK8SStub } from './routes';

const port = parseInt(process.env.PORT || 3010, 10);

const app = express();

app.listen(port, () => {
  injectK8SStub(app);
});
