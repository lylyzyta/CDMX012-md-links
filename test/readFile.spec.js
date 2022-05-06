const readFile = require('../components/readFile.js');

describe('readFile', () => {
    it('is a function', () => {
      expect(typeof readFile).toBe('function');
    });

    it('Read content Files', () => {
      const readContentFile = ['C:\\Users\\lylyz\\OneDrive\\Documentos\\MD-Links\\CDMX012-md-links\\FilesL1_1\\FilesL2\\FilesL3\\fileL3_1.md',
      'C:\\Users\\lylyz\\OneDrive\\Documentos\\MD-Links\\CDMX012-md-links\\FilesL1_1\\FilesL2\\FilesL3\\FilesL4\\fileL4_1.md']
      expect(readFile(readContentFile)).toEqual([
        'Archivo fileL3_1.md\r\n' +
          '* [fileL3_1 Intro test con dom](https://www.youtube.com/watch?v=HXWzPx8kjiY)\r\n' +
          '* [fileL3_1 promise-it-wont-hurt](https://github.com/promise-it-wont-hurt)\r\n' +
          '* [fileL3_1 promise-it-wont-hurt](https://github.com/promise-it-wont-hurt)\r\n',
        'Archivo fileL4_1.md\r\n' +
          '* [learnyounode](https://github.com/worshopper/learnyounode)\r\n'])
        });
  })
