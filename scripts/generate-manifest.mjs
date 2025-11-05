// Copy media from D:\Portfolio1.0\animation to portfolio/public/animation and generate manifest.json
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const workspaceRoot = path.resolve(projectRoot, '..');
const sourceDir = path.resolve(workspaceRoot, 'animation');
const publicAnimationDir = path.resolve(projectRoot, 'public', 'animation');

function ensureDir(dir) {
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir, { recursive: true });
	}
}

function copyMedia(srcDir, destDir) {
	ensureDir(destDir);
	const entries = fs.readdirSync(srcDir, { withFileTypes: true });
	for (const entry of entries) {
		if (entry.isFile()) {
			const ext = path.extname(entry.name).toLowerCase();
			if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.mp4'].includes(ext)) {
				fs.copyFileSync(path.join(srcDir, entry.name), path.join(destDir, entry.name));
			}
		}
	}
}

function generateManifest(destDir) {
	const files = fs.readdirSync(destDir);
	const items = files
		.filter((name) => !name.toLowerCase().endsWith('.json'))
		.map((name) => {
			const ext = path.extname(name).toLowerCase();
			const type = ext === '.mp4' ? 'video' : 'image';
			return {
				filename: name,
				path: `/animation/${name}`,
				type,
			};
		});
	const manifestPath = path.join(destDir, 'manifest.json');
	fs.writeFileSync(manifestPath, JSON.stringify(items, null, 2), 'utf8');
	return manifestPath;
}

function main() {
	console.log('Source:', sourceDir);
	console.log('Destination:', publicAnimationDir);
	copyMedia(sourceDir, publicAnimationDir);
	const manifestPath = generateManifest(publicAnimationDir);
	console.log('Manifest written:', manifestPath);
}

main();
