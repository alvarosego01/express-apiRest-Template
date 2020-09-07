import { Router } from 'express';

import appRoute from './appRoute';
import userRoute from './userRoute';

// import {  } from './userRoute';
// guaranteed to get dependencies
export default () => {
    const app = Router();

	userRoute(app);
	appRoute(app);

	return app

};


