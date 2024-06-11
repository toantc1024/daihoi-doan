import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./styles.css";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import pdf from './VanKien.pdf';
import logo1 from '/home/andyanh/daihoi-doan/src/assets/images/TLVK1.png'; 
import logo2 from '/home/andyanh/daihoi-doan/src/assets/images/TLVK2.png'; 
import logo3 from '/home/andyanh/daihoi-doan/src/assets/images/TLVK3.jpg'; 

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Pages = React.forwardRef((props, ref) => {
    return (
        <div className="demoPage" ref={ref} >
            <p>{props.children}</p>
            <p>Page number: {props.number}</p>
        </div>
    );
});

function FlipBook() {


    // const [loading, setLoading] = useState(true);
  
    const [numPages, setNumPages] = useState(null);
  
    const onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
    //   setTimeout(()=>{

    //       setLoading(false);
    //   },1000)
    };
    return (
<> 

        {/* {loading && <Loading loading = {loading} />} */}
      <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center md:justify-center scroll-mx-2 overflow-hidden">
        <div className="w-full md:w-1/2 flex justify-center items-center mb-4">
            <img src={logo3} alt="Logo" className="max-w-full" />
          </div>
          <div className="w-full  md:w-1/2 flex justify-center items-center mb-4">
            <a href="https://forms.gle/LgEzHAv54WK9cjSY7" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Góp ý văn kiện
            </a>
          </div>
          <div className="w-full  md:w-1/2 flex justify-center items-center mb-4">
            <img src={logo2} alt="Logo" className="max-w-full" />
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center mb-4">
            <a href="https://drive.google.com/drive/folders/1mt5w87in6HH7n7BGy3ZNsTb3_nFw15vg" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Mời đại biểu nhấn vào đây
            </a>
          </div>
          <div className="w-full  md:w-1/2 flex justify-center items-center mb-4">
            <img src={logo1} alt="Logo" className="max-w-full" />
          </div>

        <HTMLFlipBook width={500} height={750} showCover={true} className="mt-0">
            


        {[...Array(numPages).keys()].map((n) => (
                <Pages number={`${n+1}`}>
                 <Document
              file={pdf}
              onLoadSuccess={onDocumentLoadSuccess} 
              
            >
              <Page pageNumber={n+1}  renderAnnotationLayer={false} renderTextLayer={false} width={500} className='border-3 border-black' />
            </Document>
           
            </Pages>
              ))}
        </HTMLFlipBook>
      </div>
      </>
    );
}

export default FlipBook;