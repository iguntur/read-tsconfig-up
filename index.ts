import path from 'path';
import findUp from 'find-up';
import readTsconfig, {ReadOptions} from 'read-tsconfig';

interface ResultContext {
	tsconfig: {};
	path: string;
}

function readTsconfigUp(options?: ReadOptions): Promise<ResultContext> {
	const opts = Object.assign({}, {cwd: process.cwd()}, options);

	return findUp('tsconfig.json', opts).then((filepath: string) => {
		return readTsconfig({cwd: path.dirname(filepath)}).then(tsconfig => ({
			tsconfig,
			path: filepath
		}));
	});
}

readTsconfigUp.sync = (options?: ReadOptions): ResultContext => {
	const opts = Object.assign({}, {cwd: process.cwd()}, options);

	try {
		const filepath = findUp.sync('tsconfig.json', opts);
		const tsconfig = readTsconfig.sync({cwd: path.dirname(filepath)});
		return {
			tsconfig,
			path: filepath
		}
	} catch (error) {
		throw error;
	}
};

export default readTsconfigUp;

module.exports = readTsconfigUp;
module.exports.default = readTsconfigUp;
