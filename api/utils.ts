import LZString from 'lz-string';

export class Utils {
    public compress(data: any): any {
        return LZString.compressToBase64(data);
    }

    public decompress(data: any): string {
        return LZString.decompressFromBase64(data);
    }
}