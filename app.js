// انتظار تحميل كامل عناصر الصفحة
document.addEventListener('DOMContentLoaded', () => {
    
    // إعداد Intersection Observer لمراقبة العناصر أثناء التمرير (Scroll)
    const observerOptions = {
        root: null, // يعني مراقبة الشاشة بأكملها
        rootMargin: '0px',
        threshold: 0.15 // العنصر يظهر عندما يظهر 15% منه على الشاشة
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // إذا كان العنصر مرئياً على الشاشة
            if (entry.isIntersecting) {
                // إضافة كلاس 'show' لتفعيل الأنيميشن من ملف الـ CSS
                entry.target.classList.add('show');
                // إيقاف مراقبة العنصر بعد ظهوره لمرة واحدة (لتخفيف العبء على المتصفح)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // تحديد كل الأقسام (Sections) التي تحتوي على كلاس 'hidden'
    const hiddenElements = document.querySelectorAll('.hidden');
    
    // مراقبة كل عنصر
    hiddenElements.forEach((el) => observer.observe(el));

    // إضافة تأثير Parallax خفيف للخلفية (الأشكال الهندسية) عند التمرير
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const bgShapes = document.querySelectorAll('.shape');
        
        bgShapes.forEach((shape, index) => {
            const speed = index === 0 ? 0.3 : -0.2;
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
});
