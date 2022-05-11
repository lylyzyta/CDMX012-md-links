const validateLinks = require("../components/validateLinks.js");
const axios = require ('axios');
jest.mock('axios');

describe("validateLinks", () => {
  it("is a function", () => {
    expect(typeof validateLinks).toBe("function");
  });

  it("Read array and return status ok", () => {
    const arrayOutput = [
      {
        href: 'https://www.youtube.com/watch?v=HXWzPx8kjiY',
        text: 'fileL4_1 Intro test con dom',
        file: 'C:\\Users\\lylyz\\OneDrive\\Documentos\\MD-Links\\CDMX012-md-links\\FilesL1_1\\FilesL2\\FilesL3\\FilesL4\\fileL4_1.md'
      }
    ]
    
    
      const resolveArray =  [
        {
          href: 'https://www.youtube.com/watch?v=HXWzPx8kjiY',
          text: 'fileL4_1 Intro test con dom',
          file: 'C:\\Users\\lylyz\\OneDrive\\Documentos\\MD-Links\\CDMX012-md-links\\FilesL1_1\\FilesL2\\FilesL3\\FilesL4\\fileL4_1.md',
          statusCode: 200,
          OK: 'OK'
        }
      ] 
      
    
    axios.get.mockResolvedValue(resolveArray);
    return validateLinks(arrayOutput).then(data => expect(data).toEqual
    [
      {
        href: 'https://www.youtube.com/watch?v=HXWzPx8kjiY',
        text: 'fileL4_1 Intro test con dom',
        file: 'C:\\Users\\lylyz\\OneDrive\\Documentos\\MD-Links\\CDMX012-md-links\\FilesL1_1\\FilesL2\\FilesL3\\FilesL4\\fileL4_1.md',
        statusCode: 200,
        OK: 'OK'
      }
    ]); 

  });

    it("Read array and return status fail", () => {
      const arrayOutput = [
        {
          href: 'https://www.youtube.com/wach?v=HXWzPx8kjiY',
          text: 'fileL4_1 Intro test con dom',
          file: 'C:\\Users\\lylyz\\OneDrive\\Documentos\\MD-Links\\CDMX012-md-links\\FilesL1_1\\FilesL2\\FilesL3\\FilesL4\\fileL4_1.md'
        }
      ]
      
      
        const rejectArray =  [
          {
            href: 'https://www.youtube.com/wach?v=HXWzPx8kjiY',
            text: 'fileL4_1 Intro test con dom',
            file: 'C:\\Users\\lylyz\\OneDrive\\Documentos\\MD-Links\\CDMX012-md-links\\FilesL1_1\\FilesL2\\FilesL3\\FilesL4\\fileL4_1.md',
            status: 404,
            ok: 'fail'
          }
        ] 
        
      
      axios.get.mockRejectedValue(rejectArray);
      return validateLinks(arrayOutput).then(data => expect(data).toEqual
      [
        {
          href: 'https://www.youtube.com/wach?v=HXWzPx8kjiY',
          text: 'fileL4_1 Intro test con dom',
          file: 'C:\\Users\\lylyz\\OneDrive\\Documentos\\MD-Links\\CDMX012-md-links\\FilesL1_1\\FilesL2\\FilesL3\\FilesL4\\fileL4_1.md',
          statusCode: 404,
          OK: 'fail'
        }
      ]); 
  
    
    });

  

   
});
