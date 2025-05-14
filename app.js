//MENU
    const menuBtn = document.querySelector(".menuBtn");
    const menu = document.getElementById("menu");
    let openMenu = false;

    menuBtn.addEventListener("click", ()=>{
        if(openMenu){
            menu.style.zIndex = '-1';
            menu.style.opacity = '0';
            menuBtn.classList = 'menuBtn bi bi-three-dots';
        }
        else{
            menu.style.zIndex = '10';
            menu.style.opacity = '1';
            menuBtn.classList = 'menuBtn bi bi-x';
        }
        openMenu = !openMenu;
    })
//MENU
const privacyBtn = document.getElementById("menu-privacy");
const menuList = document.getElementById("menubox");
const centerBox = document.getElementById("centerBox");
const politic = document.getElementById("politic");
const closePolitic = document.getElementById("closePolitic");

privacyBtn.addEventListener("click", () =>{
    menuList.style.display = 'none';
    centerBox.style.height = '600px';
    politic.style.height = '580px';
    politic.style.zIndex = '1';
    politic.style.opacity = '1';
});
closePolitic.addEventListener("click", () =>{
    menuList.style.display = 'block';
    centerBox.style.height = '400px';
    politic.style.height = '285px';
    politic.style.zIndex = '-1';
    politic.style.opacity = '0';
});

const aboutBtn = document.getElementById("menu-about");
const infocontent = document.getElementById("infocontent");
const closeInfo = document.getElementById("closeInfo");

aboutBtn.addEventListener("click", () =>{
    menuList.style.display = 'none';
    infocontent.style.height = '360px';
    infocontent.style.zIndex = '1';
    infocontent.style.opacity = '1';
});
closeInfo.addEventListener("click", () =>{
    menuList.style.display = 'block';
    infocontent.style.height = '295px';
    infocontent.style.zIndex = '-1';
    infocontent.style.opacity = '0';
});
//ANİMASYON
  const images = document.querySelectorAll('#canvas img');
  let current = 0;

  function showNextImage() {
    images.forEach((img, i) => {
      img.style.opacity = i === current ? '1' : '0';
    });

    current = (current + 1) % images.length;
  }

  // İlk resmi göster
  showNextImage();

  // Belirli aralıklarla resmi değiştir
  setInterval(showNextImage, 4000); // 3 saniyede bir geçiş
//ANİMASYON

const language = document.getElementById("language");

  language.addEventListener("change", function () {
    const lang = language.value;
  
    // Menü metinlerini güncelle
    document.getElementById("menu-work").textContent = translations[lang].work;
    document.getElementById("menu-contact").textContent = translations[lang].contact;
    document.getElementById("menu-about").textContent = translations[lang].about;
    document.getElementById("menu-privacy").textContent = translations[lang].privacy;
    document.getElementById("board").textContent = translations[lang].board;
    document.getElementById("tittle").textContent = translations[lang].tittle;
    document.getElementById("avantage").textContent = translations[lang].avantage;
    document.getElementById("security").textContent = translations[lang].security;
    document.getElementById("oppression").textContent = translations[lang].oppression;
    document.getElementById("speed").textContent = translations[lang].speed;
    document.getElementById("request").textContent = translations[lang].request;
    document.getElementById("annonce").textContent = translations[lang].annonce;
    document.getElementById("mass").textContent = translations[lang].mass;
    document.getElementById("views").textContent = translations[lang].views;
    document.getElementById("ads").textContent = translations[lang].ads;
    document.getElementById("requests").textContent = translations[lang].requests;
  
    // Form alanlarını güncelle
    document.getElementById("name").textContent = translations[lang].name;
    document.getElementById("mail").textContent = translations[lang].mail;
    document.getElementById("message").textContent = translations[lang].message;
  
    // Placeholder değerlerini güncelle
    document.getElementById("names").placeholder = translations[lang].names;
    document.getElementById("mails").placeholder = translations[lang].mails;
    document.getElementById("messages").placeholder = translations[lang].messages;
  
    // Form butonunun text değerini güncelle
    document.getElementById("my-form-button").textContent = translations[lang].formbutton;
    
    // Form gönderme durumunu güncelle
    document.getElementById("my-form-status").textContent = translations[lang].sendform;
    document.getElementById("inftext").textContent = translations[lang].inftext;
    document.getElementById("politic").textContent = translations[lang].politic;
    document.getElementById("warnTitle").textContent = translations[lang].warnTitle;
    document.getElementById("checkinfo").textContent = translations[lang].checkinfo;
    document.getElementById("nospace").textContent = translations[lang].nospace;
    document.getElementById("symbol").textContent = translations[lang].symbol;
    document.getElementById("sendone").textContent = translations[lang].sendone;
    document.getElementById("packLabel").textContent = translations[lang].packLabel;
    document.getElementById("sponsored").textContent = translations[lang].sponsored;
    document.getElementById("when").textContent = translations[lang].when;
    document.getElementById("aim").textContent = translations[lang].aim;
    document.getElementById("winner").textContent = translations[lang].winner;
    document.getElementById("requestsng").textContent = translations[lang].requestsng;
  });
  

const translations = {
    tr: {
      work: "Duyurular",
      contact: "İletişim",
      about: "Hakkında",
      privacy: "Gizlilik Politikası",
      board: "Duyuru Panosu",
      tittle: "Fikirler",
      avantage: "QR MENÜ",
      security: "Hijyen açısından güvenlidir.",
      oppression: "Baskı masrafı yoktur.",
      speed: "Mobil Uyumlu ve Hızlı Erişim.",
      request: "Talep Oluştur",
      annonce: "İŞLETMEM WEB'DE",
      mass: "Geniş Kitleye Ulaşım.",
      views: "7/24 Görünürlük.",
      ads: "Daha Az Maliyetle Reklam.",
      requests: "Talep Oluştur",
      sponsored: "SPONSORLUK",
      when:"Marka Görünürlüğü.",
      aim:"Hedef Kitleye Doğrudan Erişim.",
      winner:"Prestij ve Güven Kazanımı.",
      requestsng:"Talep Oluşur",
      name: "Ad Soyad",
      names: "Ad Soyad",
      mail: "E-mail",
      mails: "Mail adresiniz",
      packLabel: "Paket Seçimi",
      message: "Mesaj",
      messages: "Mesajınız",
      formbutton: "Telep Gönder",
      sendform: "Talebiniz alınmıştır...",
      warnTitle: "Dikkat edilecek hususlar",
      checkinfo: "Doğru Bilgi Girin",
      nospace: "Boş Alan Bırakmayın",
      symbol: "Özel Karakterlerden Kaçının",
      sendone: "Talebinizi tek Seferde Gönderin",
      inftext: "Merhaba, ben Mehmet, bir web tasarımcısıyım. Yaratıcı ve kullanıcı dostu web siteleri oluşturmak konusunda tutkuluyum. Modern tasarım trendlerini takip ederek, işlevsel ve estetik açıdan tatmin edici dijital deneyimler yaratmayı hedefliyorum.Müşterilerimin ihtiyaçlarını anlamak, onlara özel çözümler sunmak ve projelerini dijital dünyada en iyi şekilde temsil etmek benim için öncelikli. Web tasarımından SEO’ya kadar geniş bir yelpazede hizmet veriyorum. Eğer kaliteli ve etkili bir web tasarımına ihtiyacınız varsa, sizinle çalışmaktan mutluluk duyarım.",
      politic: "Gizlilik Politikası<br><br>1. Giriş Bu Gizlilik Politikası, [Şirket Adı] (bundan sonra biz, bizim veya şirket olarak anılacaktır) tarafından, [web sitenizin adı veya uygulamanızın adı] üzerinden toplanan kişisel bilgilerin nasıl kullanıldığını, saklandığını ve korunduğunu açıklar. Gizliliğiniz bizim için önemlidir ve bu politikanın, kişisel bilgilerinizi nasıl işlediğimiz hakkında size açık ve anlaşılır bilgiler sağlamayı amaçladığını belirtmek isteriz.<br><br>2. Toplanan Kişisel Bilgiler Web sitemizi ziyaret ettiğinizde veya hizmetlerimizi kullandığınızda, aşağıdaki kişisel bilgileri toplayabiliriz: İletişim bilgileri (ad, soyad, e-posta adresi, telefon numarası) Kullanıcı davranışları (giriş bilgileri, kullanım verileri) Diğer sağladığınız bilgiler (formlar, yorumlar, vb.)<br><br>3. Kişisel Bilgilerin Kullanımı Topladığımız kişisel bilgileri şu amaçlarla kullanabiliriz: İletişim kurmak ve taleplerinizi yerine getirmek Web sitemizin işleyişini sağlamak ve geliştirmek Size özel içerik, reklam veya teklifler sunmak Yasal gerekliliklere uymak ve düzenleyici kurumlarla iletişime geçmek<br><br>4. Kişisel Bilgilerin Paylaşılması Kişisel bilgilerinizi, şu haller dışında üçüncü şahıslarla paylaşmayacağız: Hizmet sağlamak amacıyla, güvenilir üçüncü taraf hizmet sağlayıcılarla paylaşılabilir. Yasal zorunluluklar veya yasal süreçler gereği, yetkililerle paylaşılabilir. Kullanıcı izniyle, pazarlama veya diğer ticari amaçlarla paylaşılabilir.<br><br>5. Çerezler ve İzleme Teknolojileri Web sitemizde, kullanıcı deneyimini iyileştirmek amacıyla çerezler ve izleme teknolojileri kullanılabilir. Bu teknolojiler, ziyaretçi sayısını izlemek, sayfa görüntülemelerini analiz etmek ve kişiselleştirilmiş içerik sağlamak için kullanılır.<br><br>6. Bilgilerin Güvenliği Kişisel bilgilerinizi korumak için uygun güvenlik önlemleri alıyoruz. Ancak, internet üzerinden veri iletimi tamamen güvenli değildir ve hiçbir güvenlik sisteminin mutlak güvenliği garanti edemeyeceğini unutmamalısınız.<br><br>7. Verilerin Saklanması ve Erişim Kişisel bilgilerinizi yalnızca gerekli olduğu süre boyunca saklayacağız. Ayrıca, kişisel bilgilerinizin doğru ve güncel olmasını sağlamak için gerekli adımları atacağız. Kişisel verilerinize erişim hakkınız bulunmakta olup, bu verileri güncelleme veya silme talebinde bulunabilirsiniz.<br><br>8. Yasal Haklarınız Veri koruma yasaları gereği, kişisel bilgilerinizi toplama ve işleme hakkınızla ilgili yasal haklara sahipsiniz. Bu haklar arasında, bilgilerinizi düzeltme, silme ve sınırlama hakları yer almaktadır.<br><br>9. Politika Değişiklikleri Bu Gizlilik Politikası zaman zaman güncellenebilir. Herhangi bir değişiklik yapıldığında, yeni politika metni web sitemizde yayınlanacaktır. Lütfen düzenli olarak bu sayfayı kontrol edin.<br><br>10. İletişim Bu Gizlilik Politikası ile ilgili herhangi bir sorunuz veya talebiniz olursa, bizimle iletişime geçebilirsiniz:<br><br>E-posta: adasu07@icloud.com"
,    },
    en: {
      work: "Announcements",
      contact: "Contact",
      about: "About",
      privacy: "Privacy Policy",
      board: "Notice Board",
      tittle: "Opinions",
      avantage: "QR MENU",
      security: "It is safe in terms of hygiene.",
      oppression: "There is no printing cost.",
      speed: "Mobile Compatible and Fast Access.",
      request: "Create Request",
      sponsored: "SPONSORSHIP",
      when:"Brand Visibility.",
      aim:"Direct Reach to Target Audience.",
      winner:"Gaining Prestige and Trust.",
      requestsng:"Demand Occurs",
      annonce: "DIGITAL BUSINESS",
      mass: "Reaching a Wide Audience.",
      views: "24/7 Visibility.",
      ads: "Advertising at Less Cost.",
      requests: "Create Request",
      name: "Name Surname",
      names: "Name Surname",
      mail: "E-mail",
      mails: "Your e-mail address",
      packLabel: "Package Selection",
      message: "Message",
      messages: "Messages",
      formbutton: "Send Request",
      sendform: "Your request has been received...",
      warnTitle: "Things to consider",
      checkinfo: "Enter Correct Information",
      nospace: "Don't Leave Empty Space",
      symbol: "Avoid Special Characters",
      sendone: "Send Your Request at Once",
      inftext: "Hello, we are Responsiweb.Providing creative and user-focused web solutions is what we do best.We closely follow modern design trends to develop functional and visually appealing websites. Every project is approached uniquely to ensure your brand is represented most effectively in the digital world.We analyze the needs of our clients and offer tailored solutions — delivering professional services ranging from web design to SEO.If you’re looking to build a high-quality and impactful digital presence, Responsiweb would be happy to work with you. ",
      politic: "Privacy Policy 1. Introduction This Privacy Policy explains how [Company Name] (hereinafter referred to as we, us, or the company) collects, uses, stores, and protects personal information through [your website or app name]. Your privacy is important to us, and we aim to provide clear and understandable information about how we process your data.2. Collected Personal Data When you visit our website or use our services, we may collect the following personal information: Contact details (name, surname, email address, phone number) User behavior (login data, usage data) Other information you provide (forms, comments, etc.)3. Use of Personal Information We may use the collected data for the following purposes: To communicate with you and fulfill your requests To operate and improve our website To provide personalized content, ads, or offers To comply with legal requirements and contact regulatory bodies. 4. Sharing Personal Information We will not share your personal data with third parties except in the following cases: With trusted third-party service providers to operate our services With authorities due to legal obligations or proceedings With your consent for marketing or other business purposes. 5. Cookies and Tracking Technologies We may use cookies and trackingtechnologies to enhance the user experience, monitor visitor counts, analyze page views, and provide personalized content.6. Data Security We take appropriate security measures to protect your personal data. However, no internet transmission or storage system is 100% secure. Please be aware of the inherent risks.7. Data Retention and Access We will retain your personal data only as long as necessary. You have the right to access, update, or request deletion of your data.<br><br>8. Your Legal Rights According to data protection laws, you have rights related to your data, including the right to correct, delete, or restrict processing.9. Policy Changes This Privacy Policy may be updated from time to time. Changes will be posted on our website. Please check this page regularly.<br><br>10. Contact If you have any questions or requests regarding this Privacy Policy, you may contact us: Email: adasu07@icloud.com",
    },
    alm: {
      work: "Ankündigungen",
      contact: "Kontakt",
      about: "Über Uns",
      privacy: "Datenschutz-Bestimmungen",
      board: "Schild",
      tittle: "Meinungen",
      avantage: "QR MENU",
      security: "Es ist hygienisch unbedenklich.",
      oppression: "Es fallen keine Druckkosten an.",
      speed: "Mobilkompatibel und schneller Zugriff.",
      request: "Nachfrage tritt auf",
      sponsored: "SPONSORING",
      when:"Markensichtbarkeit.",
      aim:"Direkte Ansprache der Zielgruppe.",
      winner:"Prestige und Vertrauen gewinnen.",
      requestsng:"Nachfrage tritt auf",
      annonce: "Vorteile",
      mass: "Ein breites Publikum erreichen.",
      views: "Sichtbarkeit rund um die Uhr.",
      ads: "Werbung zu geringeren Kosten.",
      requests: "Nachfrage tritt auf",
      name: "Name Nachname",
      names: "Name Nachname",
      mail: "E-mail",
      mails: "Ihre E-Mail-Adresse",
      packLabel: "Paketauswahl",
      message: "Nachricht",
      messages: "Ihre Nachricht",
      formbutton: "Anfrage senden",
      warnTitle: "Dinge, die es zu beachten gilt",
      checkinfo: "Geben Sie die korrekten Informationen ein",
      nospace: "Lassen Sie keinen leeren Raum",
      symbol: "Vermeiden Sie Sonderzeichen",
      sendone: "Senden Sie Ihre Anfrage sofort",
      sendform: "Ihre Anfrage wurde empfangen...",
      inftext: "Hallo, wir sind Responsiweb.Kreative und benutzerorientierte Weblösungen sind unsere Spezialität.Wir folgen aktuellen Designtrends und entwickeln funktionale sowie ästhetisch ansprechende Webseiten. Jedes Projekt wird individuell betrachtet, um Ihre Marke optimal in der digitalen Welt zu präsentieren.Wir analysieren die Bedürfnisse unserer Kunden und bieten maßgeschneiderte Lösungen – von Webdesign bis hin zu SEO.Wenn Sie eine hochwertige und wirkungsvolle Online-Präsenz aufbauen möchten, arbeitet Responsiweb gerne mit Ihnen zusammen.",
      politic: "Datenschutzerklärung. 1. Einführung Diese Datenschutzerklärung erläutert, wie [Firmenname] (im Folgenden als wir, uns oder das Unternehmen bezeichnet) über [Name Ihrer Website oder App] personenbezogene Daten sammelt, verwendet, speichert und schützt. Ihre Privatsphäre ist uns wichtig, und wir möchten Ihnen klare und verständliche Informationen über den Umgang mit Ihren Daten geben.2. Erhobene personenbezogene Daten Wenn Sie unsere Website besuchen oder unsere Dienste nutzen, können folgende personenbezogene Daten erfasst werden: Kontaktdaten (Name, Nachname, E-Mail-Adresse, Telefonnummer) Nutzerverhalten (Anmeldedaten, Nutzungsdaten) Weitere bereitgestellte Informationen (Formulare, Kommentare usw.)3. Nutzung der personenbezogenen Daten Die gesammelten Daten können zu folgenden Zwecken verwendet werden: Kommunikation und Bearbeitung Ihrer Anfragen Betrieb und Verbesserung unserer Website Personalisierte Inhalte, Werbung oder Angebote Bereitstellung Gesetzlichen Verpflichtungen nachkommen und mit Behörden kommunizieren<br><br>4. Weitergabe personenbezogener Daten Eine Weitergabe erfolgt nur in folgenden Fällen: An vertrauenswürdige Drittanbieter zur Erbringung unserer Dienste An Behörden im Rahmen gesetzlicher Pflichten Mit Ihrer Zustimmung zu Marketingzwecken oder geschäftlichen Zwecken.5. Cookies und Tracking-Technologien Wir verwenden ggf. Cookies und Tracking-Technologien, um die Benutzererfahrung zu verbessern, Besucherzahlen zu analysieren und personalisierte Inhalte bereitzustellen.6. Datensicherheit Wir treffen geeignete Sicherheitsmaßnahmen zum Schutz Ihrer personenbezogenen Daten. Dennoch kann keine Internetübertragung oder Speicherung absolut sicher sein. Seien Sie sich dieses Risikos bewusst.7. Speicherung und Zugriff Wir speichern Ihre Daten nur so lange wie nötig. Sie haben das Recht auf Zugriff, Aktualisierung oder Löschung Ihrer Daten.8. Ihre Rechte gemäß Gesetz Sie haben gemäß Datenschutzgesetzen Rechte in Bezug auf Ihre Daten, z. B. auf Berichtigung, Löschung oder Einschränkung der Verarbeitung.9. Änderungen dieser Richtlinie Diese Datenschutzerklärung kann gelegentlich aktualisiert werden. Änderungen werden auf unserer Website veröffentlicht. Bitte prüfen Sie diese Seite regelmäßig.10. Kontakt Bei Fragen oder Anliegen zur Datenschutzerklärung kontaktieren Sie uns bitte:E-Mail: adasu07@icloud.com",
    },
    fra: {
      work: "Annonces",
      contact: "Contact",
      about: "À propos",
      privacy: "Politique de confidentialité",
      board: "Tableau d'affichage",
      tittle: "Avis",
      avantage: "QR-MENU",
      security: "C'est sûr en termes d'hygiène.",
      oppression: "Il n'y a aucun coût d'impression.",
      speed: "Compatible mobile et accès rapide.",
      request: "La demande se produit",
      sponsored: "PARRAINAGE",
      when:"Visibilité de la marque.",
      aim:"Toucher directement le public cible.",
      winner:"Gagner du prestige et de la confiance.",
      requestsng:"La demande se produit",
      annonce: "Avantages",
      mass: "Atteindre un large public.",
      views: "Visibilité 24h/24 et 7j/7.",
      ads: "Publicité à moindre coût.",
      requests: "La demande se produit",
      name: "Prénom prénom",
      names: "Prénom prénom",
      mail: "E-mail",
      mails: "Votre adresse e-mail",
      packLabel: "Sélection de forfaits",
      message: "Message",
      messages: "Votre message",
      formbutton: "Envoyer la demande",
      warnTitle: "Choses à considérer",
      checkinfo: "Entrez les informations correctes",
      nospace: "Ne laissez pas d'espace vide",
      symbol: "Évitez les caractères spéciaux",
      sendone: "Envoyez votre demande immédiatement",
      sendform: "Votre demande a été reçue...",
      inftext: "Bonjour, nous sommes Responsiweb.Nous créons des solutions web créatives et centrées sur l’utilisateur.En suivant de près les tendances modernes du design, nous développons des sites web fonctionnels et esthétiques. Chaque projet est traité de manière unique pour représenter votre marque de la meilleure façon possible dans le monde numérique.Nous analysons les besoins de nos clients et proposons des solutions personnalisées — du design web au référencement (SEO).Si vous souhaitez créer une présence digitale de qualité et percutante, Responsiweb serait ravi de collaborer avec vous.",
      politic: "Politique de Confidentialité<br><br>1. Introduction Cette Politique de Confidentialité explique comment [Nom de l'entreprise] (ci-après désigné par nous, notre ou la société) collecte, utilise, stocke et protège les données personnelles via [le nom de votre site ou application]. Votre vie privée est importante pour nous, et nous souhaitons fournir des informations claires sur la façon dont nous traitons vos données.<br><br>2. Données Personnelles Collectées Lorsque vous visitez notre site ou utilisez nos services, nous pouvons collecter : Informations de contact (nom, prénom, adresse e-mail, numéro de téléphone) Comportement utilisateur (données de connexion, d'utilisation) Autres informations que vous fournissez (formulaires, commentaires, etc.)<br><br>3. Utilisation des Données Nous pouvons utiliser les données collectées à des fins suivantes : Communiquer avec vous et répondre à vos demandes Exploiter et améliorer notre site Fournir du contenu, des offres ou publicités personnalisées Respecter les obligations légales et communiquer avec les autorités<br><br>4. Partage des Données Nous ne partagerons vos données que dans les cas suivants : Avec des prestataires de services de confiance Pour des raisons légales ou procédures judiciaires Avec votre consentement à des fins de marketing ou commerciales<br><br>5. Cookies et Technologies de Suivi Nous utilisons des cookies et technologies similaires pour améliorer l’expérience utilisateur, analyser les visites et proposer un contenu personnalisé.<br><br>6. Sécurité des Données Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles. Cependant, aucune transmission ou stockage sur Internet n’est totalement sécurisé.<br><br>7. Conservation et Accès Nous conservons vos données aussi longtemps que nécessaire. Vous avez le droit d'accéder, de mettre à jour ou de demander la suppression de vos données.<br><br>8. Vos Droits Légaux Conformément aux lois sur la protection des données, vous disposez de droits : rectification, suppression, ou limitation de traitement.<br><br>9. Modifications de la Politique Cette Politique peut être mise à jour. Toute modification sera publiée sur notre site. Veuillez consulter régulièrement cette page.<br><br>10. Contact Pour toute question concernant cette Politique de Confidentialité, vous pouvez nous contacter :<br><br>Email : adasu07@icloud.com",
    }
  };

//REQUEST
const requests = document.querySelectorAll(".request");
const speedCreat = document.getElementById("speedCreat");
const formClose = document.getElementById("formClose");
const katman = document.getElementById("katman");

// Açma
requests.forEach((btn) => {
  btn.addEventListener("click", () => {
    speedCreat.style.opacity = "1";
    speedCreat.style.zIndex = "1";
    katman.style.zIndex = "10";
    katman.style.opacity = "1";
  });
});

// Kapatma
formClose.addEventListener("click", () => {
  speedCreat.style.opacity = "0";
  speedCreat.style.zIndex = "-1";
  katman.style.zIndex = "-10";
  katman.style.opacity = "0";
});
//REQUEST
//FORM GÖNDER
const form = document.getElementById("my-form");
const submitBtn = document.getElementById("my-form-button");
const requiredFields = form.querySelectorAll("input[required], textarea[required]");

// Alanları kontrol eden fonksiyon
function checkFormValidity() {
  const allFilled = Array.from(requiredFields).every(field => field.value.trim() !== "");
  submitBtn.disabled = !allFilled;
}

// Tüm inputlara dinleyici ekle
requiredFields.forEach(field => {
  field.addEventListener("input", checkFormValidity);
});

// Mevcut textarea input yüksekliğini ayarlama
const textarea = document.getElementById("messages");
textarea.addEventListener("input", () => {
  textarea.style.height = "0px"; // önce sıfırla
  textarea.style.height = Math.min(textarea.scrollHeight, 60) + "px";
  textarea.style.padding = '10px';
});

// Form gönderme işlemi
async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("my-form-status");
  const data = new FormData(event.target);

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      status.classList = "bi bi-check-circle";
      status.style.opacity = '1';
      status.innerHTML = "Talebiniz alınmıştır...";
      form.reset();
      submitBtn.disabled = true; // reset sonrası tekrar pasifleştir
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
        } else {
          status.classList = 'class="bi bi-dash-circle-fill';
          status.innerHTML = "İleti gönderilemedi...";
        }
      });
    }
  }).catch(error => {
    status.classList = 'class="bi bi-dash-circle-fill';
    status.innerHTML = "İleti gönderilemedi...";
  });
}

form.addEventListener("submit", handleSubmit);

//FORM GÖNDER
