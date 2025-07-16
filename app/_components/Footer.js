import Link from 'next/link';

function Footer() {
  return (
    <footer className="z-20 mt-28 bg-gray-900 py-6 text-white">
      <div className="container mx-auto lg:px-4">
        <div className="grid grid-cols-2 lg:gap-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="mb-4 text-base font-bold text-blue-400 lg:text-center lg:text-xl">
              معلومات الاتصال
            </h3>
            <div className="flex flex-col justify-around gap-2 lg:flex-row lg:gap-4">
              <div className="flex items-start gap-1 space-x-3 rtl:space-x-reverse">
                <span className="text-base sm:text-2xl">📱</span>
                <div className="text-sm">
                  <p className="font-semibold">رقم الجوال (الصين)</p>
                  <p className="text-gray-300" dir="ltr">
                    +86 159 1573 2732
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-1 space-x-3 rtl:space-x-reverse">
                <span className="text-base sm:text-2xl">📧</span>
                <div className="text-sm">
                  <p className="font-semibold">البريد الإلكتروني</p>
                  <p className="text-gray-300">etihadco@aol.com</p>
                </div>
              </div>

              <div className="flex items-start gap-1 space-x-3 rtl:space-x-reverse">
                <span className="text-base sm:text-2xl">🕘</span>
                <div className="flex flex-col gap-1 text-sm">
                  <p className="font-semibold">ساعات العمل</p>
                  <p className="text-gray-300">من 9:00 صباحًا حتى 6:00 مساءً</p>
                  <p className="text-sm text-gray-400">(بتوقيت الصين)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-stretch">
            <h3 className="mb-4 text-base font-bold text-blue-400 lg:text-center lg:text-xl">
              روابط سريعة
            </h3>
            <ul className="flex flex-col items-center justify-around gap-4 lg:flex-row">
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
