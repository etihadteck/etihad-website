import {
  FaBoxOpen,
  FaIndustry,
  FaFileAlt,
  FaTruck,
  FaShieldAlt,
  FaChartLine,
} from 'react-icons/fa';

function OurServices() {
  return (
    <>
      <h1 className="bg-accent-700 rounded-lg px-6 py-3 pb-6 text-center text-2xl font-bold text-white md:w-fit md:text-end md:text-4xl lg:text-5xl">
        خدمات الشحن لدينا
      </h1>

      <div className="mt-16 grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:text-right lg:grid-cols-3">
        {/* 1 */}
        <div className="flex flex-col items-center space-y-4 md:items-start">
          <FaBoxOpen className="text-accent-700 text-4xl" />
          <h2 className="text-xl font-bold">
            شحن جزئي (LCL) من جميع المدن والمصانع في الصين
          </h2>
        </div>

        {/* 2 */}
        <div className="flex flex-col items-center space-y-4 md:items-start">
          <FaIndustry className="text-accent-700 text-4xl" />
          <h2 className="text-xl font-bold">
            تجميع شحنات متعددة من أكثر من مورد
          </h2>
        </div>

        {/* 3 */}
        <div className="flex flex-col items-center space-y-4 md:items-start">
          <FaFileAlt className="text-accent-700 text-4xl" />
          <h2 className="text-xl font-bold">تخليص جمركي كامل داخل المملكة</h2>
        </div>

        {/* 4 */}
        <div className="flex flex-col items-center space-y-4 md:items-start">
          <FaTruck className="text-accent-700 text-4xl" />
          <h2 className="text-xl font-bold">
            توصيل محلي إلى جميع مدن السعودية
          </h2>
        </div>

        {/* 5 */}
        <div className="flex flex-col items-center space-y-4 md:items-start">
          <FaShieldAlt className="text-accent-700 text-4xl" />
          <h2 className="text-xl font-bold">تغليف آمن واحترافي</h2>
        </div>

        {/* 6 */}
        <div className="flex flex-col items-center space-y-4 md:items-start">
          <FaChartLine className="text-accent-700 text-4xl" />
          <h2 className="text-xl font-bold">متابعة مستمرة لحالة الشحنة</h2>
        </div>
      </div>
    </>
  );
}

export default OurServices;
