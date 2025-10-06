👕 T-Shirt Design App

Kendi tişört tasarımını oluştur, görselleştir ve kaydet! 🎨

T-Shirt Design App, kullanıcıların kendi tişört tasarımlarını kolayca oluşturabileceği, renk, yazı ve görsel ekleyebileceği, interaktif bir React uygulamasıdır. Tasarımlar Firebase Storage ile güvenli bir şekilde yönetilir ve Redux ile uygulama genelinde saklanır.

---

🎯 Proje Hedefi:

Bu proje, tasarım odaklı bir deneyim sunarak kullanıcıların hayalindeki tişörtü yaratmasına olanak sağlar. Hem React geliştiricileri hem de frontend öğrenenler için component tasarımı, state yönetimi ve görsel etkileşim örneği sunar.

---

🧩 Kullanıcı Kitlesi:

Kendi tişört tasarımını yapmak isteyen kullanıcılar

Frontend geliştirme ile ilgilenen yazılımcılar

Tasarım ve React component yapısını öğrenmek isteyen öğrenciler

---

🚀 Özellikler:

Dashboard: Tişört rengini seçme, üst ve alt yazı ekleme, metin boyutu ve rengini değiştirme

Görsel Yükleme: Firebase Storage üzerinden görsel ekleyip anında önizleme

Display: Tasarımı canlı olarak gösterme

Project / ProjectList: Kaydedilen tüm tasarımları listeleme

Redux Reducers:

designReducer — Tasarımları state’de saklar, SAVE_DESIGN action’ı ile kaydeder

authReducer — Kullanıcı oturumları için (ileride genişletilebilir)

React Router DOM: Sayfa geçişleri ve navigasyon

---

⚙️ Kullanılan Teknolojiler:

React — Component yapısı ve kullanıcı arayüzü

Redux & Redux Thunk — State yönetimi

Firebase Storage — Kullanıcı görsellerinin yüklenmesi ve alınması

Cloudinary — Tişört görselleri için hızlı ve güvenilir kaynak

Bootstrap & CSS — Responsive ve modern tasarım

---
📂 Proje Yapısı:
src/
 ├─ components/
 │   ├─ dashboard/      # Dashboard, Display, Setting
 │   ├─ navbar/         # Navbar
 │   └─ project/        # Project, ProjectList
 ├─ store/
 │   ├─ actions/        # saveDesignAction
 │   ├─ reducers/       # designReducer, authReducer, mainReducer
 │   └─ store.js        # Redux store
 ├─ App.jsx
 └─ index.jsx
 
---

📅 Gelecek Planları:

👩‍🎨 Kişisel portfolyo bölümü eklenerek projelerin tanıtılması.

💬 İletişim formu entegrasyonu ile ziyaretçilerle etkileşim sağlanması.

🌍 Çoklu dil desteği (TR / EN) eklenmesi.

🌍Kullanıcı oturum açma ve profil yönetimi ekleme

🌍Tasarım paylaşma ve indirilebilir görsel formatları sunma

🌍Farklı ürünler (hoodie, çanta vb.) için tasarım seçenekleri

🌍Responsive ve mobil deneyimi daha da iyileştirme

---

💡 Kullanım:

Projeyi klonlayın:

git clone https://github.com/esraakgundogdu/tshirt-app.git


Bağımlılıkları yükleyin:

npm install


Uygulamayı başlatın:

npm start


src/firebase.js dosyasındaki Firebase Storage bilgilerini kendi projenize göre güncelleyin.

---

🖋️ Sonuç:

Bu proje, React geliştiricileri için örnek bir frontend uygulamadır.
Kullanıcılar tasarım yaparken, component tabanlı yapı, state yönetimi ve Firebase Storage ile görsel yükleme özelliklerini deneyimleyebilir.

---

💬 İletişim Proje hakkında sorularınız varsa, lütfen benimle iletişime geçin: E-posta: akgundogduesr@gmail.com

---

🖼️ Proje Ekran Görüntüleri:


https://github.com/user-attachments/assets/9cc42bd3-bbd9-42bd-a9c5-d312a78e14b8





