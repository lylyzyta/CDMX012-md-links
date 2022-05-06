const unique = require('../components/unique.js');

describe('unique', () => {
    it('is a function', () => {
      expect(typeof unique).toBe('function');
    });
    it('Read pathName if is directory convert to absolute path', () => {
      const Links = [
        {
          href: 'https://www.youtube.com/watch?v=HXWzPx8kjiY',
          text: 'fileL3_1 Intro test con dom',
          file: 'C:\\Users\\lylyz\\OneDrive\\Documentos\\MD-Links\\CDMX012-md-links\\FilesL1_1\\FilesL2\\FilesL3\\fileL3_1.md'
        },
        {
          href: 'https://github.com/promise-it-wont-hurt',
          text: 'fileL3_1 promise-it-wont-hurt',
          file: 'C:\\Users\\lylyz\\OneDrive\\Documentos\\MD-Links\\CDMX012-md-links\\FilesL1_1\\FilesL2\\FilesL3\\fileL3_1.md'
        },
        {
          href: 'https://github.com/promise-it-wont-hurt',
          text: 'fileL3_1 promise-it-wont-hurt',
          file: 'C:\\Users\\lylyz\\OneDrive\\Documentos\\MD-Links\\CDMX012-md-links\\FilesL1_1\\FilesL2\\FilesL3\\fileL3_1.md'
        },
        {
          href: 'https://github.com/worshopper/learnyounode',
          text: 'learnyounode',
          file: 'C:\\Users\\lylyz\\OneDrive\\Documentos\\MD-Links\\CDMX012-md-links\\FilesL1_1\\FilesL2\\FilesL3\\FilesL4\\fileL4_1.md'
        }
      ]
      
      expect(unique(Links)).toEqual (3) });
      });
