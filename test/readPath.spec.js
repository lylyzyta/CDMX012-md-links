const readPath = require('../components/readPath.js');

describe('readPath', () => {
    it('is a function', () => {
      expect(typeof readPath).toBe('function');
    });

 it('Read pathName if is directory convert to absolute path', () => {
    const readDirect = ('./FilesL1_1/FilesL2/FilesL3/')
    expect(readPath(readDirect)).toEqual['C:\\Users\\lylyz\\OneDrive\\Documentos\\MD-Links\\CDMX012-md-links\\FilesL1_1\\FilesL2\\FilesL3\\fileL3_1.md',
        'C:\\Users\\lylyz\\OneDrive\\Documentos\\MD-Links\\CDMX012-md-links\\FilesL1_1\\FilesL2\\FilesL3\\FilesL4\\fileL4_1.md']});
    });