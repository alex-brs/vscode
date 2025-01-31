/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ParsedArgs } from 'minimist';
import { Application } from '../../../../automation';
import { afterSuite, beforeSuite } from '../../utils';

export function setup(opts: ParsedArgs) {
	describe.skip('Terminal Profiles', () => {
		beforeSuite(opts);
		afterSuite(opts);

		it.skip('should launch the default profile', async () => {
			const app = this.app as Application;
			console.log(app);
		});
	});
}
