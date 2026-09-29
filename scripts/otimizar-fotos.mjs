/*
 * Converte as fotos dos membros para WebP leve.
 * Uso: coloque as fotos (.jpg, .jpeg, .png) em src/assets/membros/ e rode `npm run fotos`.
 *
 * - Gera NN.webp (máx. 800px de largura, já girada certo)
 * - Move o arquivo original para src/assets/membros/originais/ (o site não usa essa pasta)
 */
import { mkdir, readdir, rename, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const dir = path.resolve('src/assets/membros');
const originals = path.join(dir, 'originais');
await mkdir(originals, { recursive: true });

const files = (await readdir(dir)).filter((f) => /\.(jpe?g|png)$/i.test(f));
if (files.length === 0) console.log('Nenhuma foto nova para converter.');

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;

for (const file of files) {
  const input = path.join(dir, file);
  const output = path.join(dir, `${path.parse(file).name}.webp`);

  await sharp(input)
    .rotate() // respeita a orientação da câmera (EXIF)
    .resize({ width: 800, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(output);

  const [before, after] = await Promise.all([stat(input), stat(output)]);
  await rename(input, path.join(originals, file));
  console.log(`${file} → ${path.basename(output)}  (${kb(before.size)} → ${kb(after.size)})`);
}
