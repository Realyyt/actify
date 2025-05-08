interface ProductFlyersProps {
  productName: string;
  onClose: () => void;
}

export default function ProductFlyers({ productName, onClose }: ProductFlyersProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">{productName} Information</h2>
        <p className="mb-4">Product flyer content will be displayed here.</p>
        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
} 