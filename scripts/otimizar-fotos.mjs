/*
 * Converte as fotos do site para WebP leve.
 * Uso: coloque as fotos (.jpg, .jpeg, .png) na pasta certa e rode `npm run fotos`.
 *
 *   src/assets/membros/  → fotos da comissão (máx. 800px de largura)
 *   src/assets/posts/    → artes do Instagram (máx. 1080px de largura)
 *
 * - Gera <nome>.webp (já girada certo)
 * - Move o arquivo original para <pasta>/originais/ (o site não usa essa pasta)
 */
import { mkdir, readdir, rename, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const folders = [
  { dir: 'src/assets/membros', width: 800 },
  { dir: 'src/assets/posts', width: 1080 },
];

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;

for (const folder of folders) {
  const dir = path.resolve(folder.dir);
  const originals = path.join(dir, 'originais');

  const files = (await readdir(dir)).filter((f) => /\.(jpe?g|png)$/i.test(f));
  if (files.length === 0) {
    console.log(`${folder.dir}: nenhuma foto nova para converter.`);
    continue;
  }
  await mkdir(originals, { recursive: true });

  for (const file of files) {
    const input = path.join(dir, file);
    const output = path.join(dir, `${path.parse(file).name}.webp`);

    await sharp(input)
      .rotate() // respeita a orientação da câmera (EXIF)
      .resize({ width: folder.width, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(output);

    const [before, after] = await Promise.all([stat(input), stat(output)]);
    await rename(input, path.join(originals, file));
    console.log(`${folder.dir}: ${file} → ${path.basename(output)}  (${kb(before.size)} → ${kb(after.size)})`);
  }
}
