export function formatBytes(bytes: number) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024; // or 1000 for metric
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(1));

    return `${formattedSize} ${sizes[i]}`;
}