const findLinks = require('../components/findLinks.js');

describe('findLinks', () => {
    it('is a function', () => {
      expect(typeof findLinks).toBe('function');
    });
    it('Read Links', () => {
      const readContentFile = [
        'Archivo fileL3_1.md\r\n' +
          '* [fileL3_1 Intro test con dom](https://www.youtube.com/watch?v=HXWzPx8kjiY)\r\n' +
          '* [fileL3_1 promise-it-wont-hurt](https://github.com/promise-it-wont-hurt)\r\n' +
          '* [fileL3_1 promise-it-wont-hurt](https://github.com/promise-it-wont-hurt)\r\n',
        'Archivo fileL4_1.md\r\n' +
          '* [learnyounode](https://github.com/worshopper/learnyounode)\r\n'
      ]
      const routePath = ['C:\\Users\\lylyz\\OneDrive\\Documentos\\MD-Links\\CDMX012-md-links\\FilesL1_1\\FilesL2\\FilesL3\\fileL3_1.md',
      'C:\\Users\\lylyz\\OneDrive\\Documentos\\MD-Links\\CDMX012-md-links\\FilesL1_1\\FilesL2\\FilesL3\\FilesL4\\fileL4_1.md']
      
       expect(findLinks(readContentFile, routePath)).toEqual([
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
      ])
      
      });
    });
