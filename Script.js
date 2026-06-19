// ==========================================
// Padhai Pilot - Core Logic Engine
// ==========================================

// 1. Dynamic Exams Data (JSON format ready for database)
const examsData = [
    { id: "jee", title: "JEE Main", desc: "Top engineering mock tests.", icon: "📐", color: "text-blue-600 bg-blue-100" },
    { id: "neet", title: "NEET UG", desc: "Full-length biology focus.", icon: "🧬", color: "text-green-600 bg-green-100" },
    { id: "upsc", title: "UPSC CSE", desc: "Prelims & Current Affairs.", icon: "🏛️", color: "text-amber-600 bg-amber-100" },
    { id: "ssc", title: "SSC CGL", desc: "Tier 1 & 2 latest pattern.", icon: "📊", color: "text-purple-600 bg-purple-100" }
];

// 2. Inject Exams into Homepage Dynamically
window.addEventListener('DOMContentLoaded', () => {
    const examContainer = document.getElementById('examContainer');
    if (examContainer) {
        examContainer.innerHTML = examsData.map(exam => `
            <div class="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-brand-500 hover:shadow-xl transition-all cursor-pointer">
                <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 ${exam.color}">${exam.icon}</div>
                <h3 class="text-xl font-black mb-2">${exam.title}</h3>
                <p class="text-slate-500 text-sm mb-4">${exam.desc}</p>
                <span class="text-brand-600 font-bold text-sm">Explore →</span>
            </div>
        `).join('');
    }
    
    // Inject Reels dynamically if on reels page
    loadReels();
});

// 3. Reels/Shorts Dynamic Loading
const reelsData = [
    { title: "Maths Shortcut Tricks", likes: "12K", url: "https://assets.mixkit.co/videos/preview/mixkit-holding-a-smartphone-in-vertical-position-40093-large.mp4" },
    { title: "Vocabulary Booster", likes: "8K", url: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-working-on-a-laptop-42253-large.mp4" }
];

function loadReels() {
    const reelsContainer = document.getElementById('reelsContainer');
    if (reelsContainer) {
        reelsContainer.innerHTML = reelsData.map(reel => `
            <div class="h-full w-full snap-start relative bg-black flex items-center justify-center">
                <video src="${reel.url}" loop autoplay muted playsinline class="w-full h-full object-cover"></video>
                <div class="absolute bottom-24 left-4 z-20">
                    <h3 class="text-white font-bold">${reel.title}</h3>
                </div>
                <div class="absolute right-4 bottom-24 flex flex-col gap-4 z-20 text-white">
                    <div class="text-center"><span class="text-2xl">❤️</span><p class="text-xs font-bold">${reel.likes}</p></div>
                    <div class="text-center"><span class="text-2xl">💬</span><p class="text-xs font-bold">Share</p></div>
                </div>
            </div>
        `).join('');
    }
}

// 4. Modal Toggles (Secure UI logic)
window.toggleAuthModal = () => {
    const modal = document.getElementById('authModal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
};

window.togglePassModal = () => {
    const modal = document.getElementById('passModal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
};

// 5. Coupon Engine
let currentPrice = 299;
window.applyCoupon = () => {
    const code = document.getElementById('coupon').value.toUpperCase();
    const msg = document.getElementById('couponMsg');
    const btn = document.getElementById('checkoutBtn');
    
    if (code === 'PILOT50') {
        currentPrice = 149;
        msg.textContent = "✅ PILOT50 Applied! 50% Off.";
        msg.className = "text-xs font-bold mb-4 text-center text-green-600";
    } else {
        currentPrice = 299;
        msg.textContent = "❌ Invalid Coupon.";
        msg.className = "text-xs font-bold mb-4 text-center text-red-600";
    }
    btn.textContent = `Pay ₹${currentPrice} Securely`;
};

// 6. Secure Login Placeholder
window.handleLogin = () => {
    const email = document.getElementById('email').value;
    if(email.includes('@')) {
        alert("Secure Login Setup Active! (Database connection pending)");
        toggleAuthModal();
    } else {
        alert("Please enter valid email");
    }
};
