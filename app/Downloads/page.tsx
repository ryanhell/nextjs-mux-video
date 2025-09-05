import { promises as fs } from 'fs';
import path from 'path';




export default async function DownloadPage() {
  const filePath = path.join(process.cwd(), 'download_list.txt');
  const fileContent = await fs.readFile(filePath, 'utf-8');

  // Split the file content into an array of file paths.
  const assetPaths = fileContent.split('\n').filter(line => line.trim() !== '');

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Downloadable Assets</h1>
      <ul className="space-y-4">
        {assetPaths.map((assetPath) => (
          <li key={assetPath}>
            {/* Create a standard anchor tag. No special Next.js Link component needed. */}
            <a
              href={`/${assetPath}`}
              download
              className="text-blue-600 hover:underline"
            >
              Download: {assetPath.split('/').pop()}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
