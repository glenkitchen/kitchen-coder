interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
  return (
    <div className="w-full h-screen">
      <object data={pdfUrl} type="application/pdf" width="100%" height="100%">
        <p>
          It appears you don&apost have a PDF plugin for this browser. You can{" "}
          <a href={pdfUrl}>click here to download the PDF file.</a>
        </p>
      </object>
    </div>
  );
};

export default PDFViewer;
