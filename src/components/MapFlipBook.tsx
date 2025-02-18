import HTMLFlipBook from 'react-pageflip';
import Image from 'next/image';

const MapFlipBook = () => {
    return (
        <div className="flex justify-center items-center my-8 max-w-[90vw] mx-auto">
            <HTMLFlipBook
                width={600}
                height={400}
                size="fixed"
                minWidth={300}
                maxWidth={700}
                minHeight={300}
                maxHeight={500}
                flippingTime={800}
                drawShadow={true}
                usePortrait={true}
                startZIndex={10}
                autoSize={true}
                maxShadowOpacity={0.3}
                showCover={true}
                mobileScrollSupport={true}
                swipeDistance={30}
                className="book-container shadow-2xl"
                style={{
                    backgroundColor: '#f5f5f5',
                    borderRadius: '12px',
                    padding: '20px',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                    border: '2px solid #ddd'
                }}
                startPage={0}
                clickEventForward={true}
                useMouseEvents={true}
                showPageCorners={true}
                disableFlipByClick={false}
            >
                {/* Page 1 */}
                <div>
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/mercibakery-3697b.appspot.com/o/hcm202%2Fbando30nampart1.png?alt=media&token=40587062-a9af-4761-a97b-1f3cc26e8d15"
                        alt="Bản đồ hành trình 30 năm cứu nước trang 1"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover p-4 rounded-lg"
                        priority
                    />
                </div>

                {/* Page 2 */}
                <div >
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/mercibakery-3697b.appspot.com/o/hcm202%2Fbando30nampart2.png?alt=media&token=7a34d4db-3465-4ab8-a568-b17bd1f36161"
                        alt="Bản đồ hành trình 30 năm cứu nước trang 2"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover p-4 rounded-lg"
                        priority
                    />
                </div>
            </HTMLFlipBook>

            {/* Hướng dẫn lật trang */}
            <div className="text-center mt-4 text-gray-600 font-medium">
                <p>Dùng chuột để kéo góc trang hoặc vuốt sang trái/phải để lật.</p>
            </div>
        </div>
    );
};

export default MapFlipBook;
