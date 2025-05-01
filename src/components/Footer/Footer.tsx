const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-10 px-6 md:px-20 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <h2 className="text-xl font-bold mb-3">متجري</h2>
            <p className="text-sm text-gray-300">
              أفضل المنتجات بأفضل الأسعار، تسوق بثقة معنا في أي وقت.
            </p>
          </div>
  
          {/* روابط */}
          <div>
            <h3 className="text-lg font-semibold mb-3">روابط مهمة</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">الرئيسية</a></li>
              <li><a href="#" className="hover:text-white">المنتجات</a></li>
              <li><a href="#" className="hover:text-white">العروض</a></li>
              <li><a href="#" className="hover:text-white">اتصل بنا</a></li>
            </ul>
          </div>
  
          {/* وسائل التواصل */}
          <div>
            <h3 className="text-lg font-semibold mb-3">تواصل معنا</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>📞 01012345678</li>
              <li>📧 info@shop.com</li>
              <li>📍 القاهرة، مصر</li>
            </ul>
          </div>
  
          {/* سوشيال ميديا */}
          <div>
            <h3 className="text-lg font-semibold mb-3">تابعنا</h3>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-blue-400">🌐</a>
              <a href="#" className="hover:text-blue-500">📘</a>
              <a href="#" className="hover:text-pink-400">📷</a>
              <a href="#" className="hover:text-sky-400">🐦</a>
            </div>
          </div>
        </div>
  
        {/* حقوق النشر */}
        <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} متجري - جميع الحقوق محفوظة
        </div>
      </footer>
    );
  };
  
  export default Footer;
  