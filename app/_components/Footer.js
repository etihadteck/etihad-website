import Link from 'next/link';

function Footer() {
  return (
    <footer className="z-20 mt-48 bg-gray-900 py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="mb-4 text-xl font-bold text-blue-400 lg:text-center">
              معلومات الاتصال
            </h3>
            <div className="flex flex-col justify-around gap-4 lg:flex-row">
              <div className="flex items-start gap-1 space-x-3 rtl:space-x-reverse">
                <span className="text-2xl">📱</span>
                <div>
                  <p className="font-semibold">رقم الجوال (الصين)</p>
                  <p className="text-gray-300">+86 159 1573 2732</p>
                </div>
              </div>

              <div className="flex items-start gap-1 space-x-3 rtl:space-x-reverse">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-semibold">البريد الإلكتروني</p>
                  <p className="text-gray-300">etihadco@aol.com</p>
                </div>
              </div>

              <div className="flex items-start gap-1 space-x-3 rtl:space-x-reverse">
                <span className="text-2xl">🕘</span>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">ساعات العمل</p>
                  <p className="text-gray-300">من 9:00 صباحًا حتى 6:00 مساءً</p>
                  <p className="text-sm text-gray-400">(بتوقيت الصين)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Info */}
          {/* <div className="space-y-4">
            <h3 className="mb-4 text-xl font-bold text-blue-400">عن الشركة</h3>
            <p className="leading-relaxed text-gray-300">
              نحن نقدم خدمات عالية الجودة لعملائنا الكرام. نسعى دائماً لتقديم
              أفضل الحلول والخدمات المتميزة.
            </p>
          </div> */}

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="mb-4 text-xl font-bold text-blue-400 lg:text-center">
              روابط سريعة
            </h3>
            <ul className="flex flex-col justify-around gap-4 lg:flex-row">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 transition-colors hover:text-blue-400"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 transition-colors hover:text-blue-400"
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="text-gray-300 transition-colors hover:text-blue-400"
                >
                  سجل الشحنات
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 جميع الحقوق محفوظة لشركة الاتحاد
          </p>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
