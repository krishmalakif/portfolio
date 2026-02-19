import { Download } from "lucide-react";

export function DownloadButton() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 no-print">
      <button
        onClick={handleDownload}
        className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 font-semibold"
        aria-label="Download portfolio as PDF"
      >
        <Download className="w-5 h-5" />
        <span>Download PDF</span>
      </button>
    </div>
  );
}
