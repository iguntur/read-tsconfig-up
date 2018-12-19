import path from 'path';
import test from 'ava';
import readTsconfig from 'read-tsconfig';
import m from '.';

const cwd = path.resolve('.', 'dist');

test('async', async t => {
	const expected = {
		tsconfig: await readTsconfig(),
		path: path.resolve('.', 'tsconfig.json')
	};

	t.deepEqual(await m({cwd}), expected);
});

test('sync', t => {
	const expected = {
		tsconfig: readTsconfig.sync(),
		path: path.resolve('.', 'tsconfig.json')
	};

	t.deepEqual(m.sync({cwd}), expected);
});
