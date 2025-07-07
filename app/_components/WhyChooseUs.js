import {
  FaBoxes,
  FaTags,
  FaClock,
  FaUserTie,
  FaComments,
} from 'react-icons/fa';

function WhyChooseUs() {
  return (
    <section className="relative z-10 mt-24 px-4 py-12 text-center md:text-right">
      <h1 className="bg-accent-700 rounded-lg px-6 py-3 pb-6 text-center text-2xl font-bold text-white md:w-fit md:text-end md:text-4xl lg:text-5xl">
        لماذا تختار شركة الاتحاد؟
      </h1>

      <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {/* 1 */}
        <div className="flex flex-col items-center space-y-4 md:items-start">
          <FaBoxes className="text-accent-700 text-4xl" />
          <h2 className="text-xl font-bold">مرونة في الكميات</h2>
        </div>

        {/* 2 */}
        <div className="flex flex-col items-center space-y-4 md:items-start">
          <FaTags className="text-accent-700 text-4xl" />
          <h2 className="text-xl font-bold">أسعار منافسة وشفافية بالتكاليف</h2>
        </div>

        {/* 3 */}
        <div className="flex flex-col items-center space-y-4 md:items-start">
          <FaClock className="text-accent-700 text-4xl" />
          <h2 className="text-xl font-bold">تسليم آمن وفي الوقت المحدد</h2>
        </div>

        {/* 4 */}
        <div className="flex flex-col items-center space-y-4 md:items-start">
          <FaUserTie className="text-accent-700 text-4xl" />
          <h2 className="text-xl font-bold">
            فريق متخصص بخبرة في السوقين الصيني والسعودي
          </h2>
        </div>

        {/* 5 */}
        <div className="flex flex-col items-center space-y-4 md:items-start">
          <FaComments className="text-accent-700 text-4xl" />
          <h2 className="text-xl font-bold">تواصل مباشر وسريع مع العملاء</h2>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
