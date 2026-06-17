window.PRIVACY_I18N = {
  en: {
    htmlLang: "en",
    pageTitle: "Privacy Policy — PhotoPrep (iOS)",
    docBadge: "iOS Privacy Policy",
    heroEyebrow: "Legal Document · iOS",
    heroTitleHtml: "Your privacy, <em>protected.</em>",
    meta: {
      effective: { label: "Effective date", value: "June 12, 2026" },
      updated: { label: "Last updated", value: "June 17, 2026" },
      platform: { label: "Platform", value: "iOS (iPhone & iPad)" }
    },
    quickNavTitle: "Contents",
    nav: [
      { id: "s1", label: "Information We Collect" },
      { id: "s2", label: "How We Use Information" },
      { id: "s3", label: "Photo Access & Processing" },
      { id: "s4", label: "App Tracking Transparency" },
      { id: "s5", label: "Third-Party Services" },
      { id: "s6", label: "Analytics & Crash Reporting" },
      { id: "s7", label: "Advertising & Purchases" },
      { id: "s8", label: "Data Storage & Security" },
      { id: "s9", label: "Children's Privacy" },
      { id: "s10", label: "Your Rights" },
      { id: "s11", label: "Changes to This Policy" },
      { id: "s12", label: "Contact Us" }
    ],
    summaryHtml: `
      <p><strong>The short version:</strong> PhotoPrep for iOS processes your photos entirely on your device. We do not upload, store, or sell your photos to any server operated by PhotoPrep. Your images stay on your iPhone or iPad unless you choose to save or share them yourself.</p>
    `,
    sections: [
      {
        id: "s1",
        number: "01",
        title: "Information We Collect",
        bodyHtml: `
          <p>PhotoPrep is designed with a minimal data footprint. This policy applies to the iOS version distributed on the Apple App Store.</p>
          <p><strong>Information you provide directly:</strong></p>
          <ul>
            <li><strong>None required</strong> — we do not require account creation, login, email address, or any personal registration to use PhotoPrep.</li>
            <li>If you choose <strong>Send Feedback</strong> in the Menu, your email app may send a message to our support address. That message is handled by your email provider, not stored by PhotoPrep inside the app.</li>
          </ul>
          <p><strong>Information stored locally on your device:</strong></p>
          <ul>
            <li><strong>Edit history (local only):</strong> Metadata about processed images — source path, output path, original and output file sizes, dimensions, output format, display name, editor mode, and timestamp. This data never leaves your device unless you share it yourself.</li>
            <li><strong>App preferences:</strong> Language, theme, default compression quality, default save format, save-to-gallery preference, compare-screen preference, default EXIF stripping, history auto-delete period, haptic feedback, text size, onboarding status, and pipeline recipes are stored locally using iOS <code>UserDefaults</code> and local files in the app sandbox.</li>
            <li><strong>Rating prompt state:</strong> Local flags for whether the in-app rating prompt was shown, accepted, or declined (including a cooldown after decline).</li>
            <li><strong>Processed output files:</strong> When you save results, copies may be stored in the app’s Documents folder (<code>PhotoPrep</code>) and/or your Photo Library, depending on your settings.</li>
          </ul>
          <p><strong>Information that may be sent to third parties (future updates only):</strong></p>
          <ul>
            <li>In a future app update we may integrate <strong>Google Firebase Analytics and Crashlytics</strong> to measure anonymous usage events and app stability. When that update ships, we may also enable Apple's App Tracking Transparency prompt if cross-app tracking applies (see Section 04). The current App Store release does <strong>not</strong> show the ATT prompt and does <strong>not</strong> transmit analytics data.</li>
          </ul>
        `
      },
      {
        id: "s2",
        number: "02",
        title: "How We Use Information",
        bodyHtml: `
          <p>We use locally stored information solely to provide and improve the PhotoPrep experience:</p>
          <ul>
            <li>To display your edit history in the History tab and related settings summaries.</li>
            <li>To remember your preferred settings and pipeline recipes.</li>
            <li>To optionally show a before/after compare screen after processing (can be disabled in Settings).</li>
            <li>To optionally prompt you to rate the app on the App Store after successful processing milestones.</li>
            <li>To auto-delete old history entries when you choose a retention period (30 or 90 days).</li>
            <li>In future updates with Firebase enabled: to measure anonymous feature usage and fix crashes (never including photo content).</li>
          </ul>
          <p>We do not sell, rent, or trade any data to third parties. We do not build advertising profiles. PhotoPrep does not display ads.</p>
        `
      },
      {
        id: "s3",
        number: "03",
        title: "Photo Access & Processing",
        bodyHtml: `
          <p>PhotoPrep compresses, resizes, crops, converts, watermarks, blurs backgrounds, renames, strips metadata from, and converts photos to PDF — all on your device.</p>
          <div class="callout">
            <p><strong>All photo processing happens on your device.</strong> Your original photos and processed outputs are never uploaded to any server operated by PhotoPrep.</p>
          </div>
          <p><strong>Permissions declared in the iOS app:</strong></p>
          <ul>
            <li><strong>Photo Library (read):</strong> Used when you select photos with the system picker and when the app needs read access to manage saved outputs (for example, removing processed photos from your library when you choose that option in Settings).</li>
            <li><strong>Photo Library (add):</strong> Used when <strong>Save to Gallery</strong> is enabled to save processed photos to your Photo Library.</li>
          </ul>
          <p>Photo selection uses Apple’s <strong>PhotosPicker</strong>. We read photo data only when you actively select files. We do not background-scan or monitor your entire gallery.</p>
          <p><strong>What happens to your photos:</strong></p>
          <ul>
            <li>You select up to <strong>100 photos</strong> per batch using the system photo picker.</li>
            <li>Photos are processed in memory according to the tool you chose (Compress, Resize, Crop, Convert, Remove metadata, Image to PDF, Watermark, Background blur, Batch rename, HEIC to JPG, or Pipeline recipes).</li>
            <li>When <strong>Save to Gallery</strong> is enabled, outputs are saved to your Photo Library via Apple’s Photos framework.</li>
            <li>Outputs are also available in the Files app under <strong>On My iPhone → PhotoPrep</strong> (Documents folder).</li>
            <li>A metadata record is saved to local history on your device.</li>
            <li>Your original photos are <strong>not</strong> modified or deleted by PhotoPrep automatically.</li>
            <li>Processed files can be shared to other apps using Apple’s standard share sheet. PhotoPrep does not upload files during sharing.</li>
          </ul>
        `
      },
      {
        id: "s4",
        number: "04",
        title: "App Tracking Transparency (ATT)",
        bodyHtml: `
          <div class="callout callout-warn">
            <p><strong>Current App Store release (v1.0):</strong> PhotoPrep does <strong>not</strong> show Apple’s App Tracking Transparency (ATT) prompt and does <strong>not</strong> track you across other companies’ apps or websites. No advertising identifier (IDFA) is used.</p>
          </div>
          <p>Apple’s <strong>App Tracking Transparency</strong> framework asks whether an app may use your device’s advertising identifier (IDFA) for tracking across other companies’ apps and websites.</p>
          <ul>
            <li><strong>Why we may ask in the future:</strong> When we integrate Firebase Analytics in a later update, we may request ATT permission if IDFA is used for cross-app analytics — as required by Apple.</li>
            <li><strong>Current release:</strong> The ATT prompt is <strong>disabled</strong>. All editing tools work without any tracking permission.</li>
            <li><strong>No cross-app advertising:</strong> PhotoPrep does not show ads and does not sell your data. We do not use tracking for advertising.</li>
            <li><strong>When enabled in a future version:</strong> You will be able to change your choice in <strong>Settings → Privacy & Security → Tracking</strong> on your iPhone or iPad, or in <strong>Menu → Privacy → Permissions</strong> inside PhotoPrep.</li>
          </ul>
        `
      },
      {
        id: "s5",
        number: "05",
        title: "Third-Party Services",
        bodyHtml: `
          <p>PhotoPrep for iOS integrates or may integrate the following third-party services:</p>
          <ul>
            <li><strong>Apple App Store:</strong> PhotoPrep is distributed through the App Store. Apple’s policies apply to download, updates, and billing (there are no in-app purchases). Apple Privacy Policy: <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a></li>
            <li><strong>Google Firebase (Analytics & Crashlytics) — planned:</strong> May be added in a future update to collect anonymised usage and crash diagnostics. Google Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a></li>
          </ul>
          <p>PhotoPrep does <strong>not</strong> integrate advertising SDKs (such as AdMob) or in-app purchase systems.</p>
        `
      },
      {
        id: "s6",
        number: "06",
        title: "Analytics & Crash Reporting",
        bodyHtml: `
          <div class="callout callout-warn">
            <p><strong>Current App Store release:</strong> Firebase Analytics and Crashlytics are <strong>not yet integrated</strong>. No analytics or crash data is transmitted from the iOS app today.</p>
          </div>
          <p>When Firebase is enabled in a future update, it may collect:</p>
          <ul>
            <li>Screen and feature usage events (for example, which editor mode was used).</li>
            <li>Processing success or failure events with editor mode name, photo count, and bytes saved — <strong>never photo content or filenames you select</strong>.</li>
            <li>Crash stack traces and non-fatal error reports to help fix stability issues.</li>
            <li>Standard Firebase device and app instance identifiers as described in Google’s documentation. If IDFA-based cross-app tracking is used, this will be subject to your ATT choice on iOS.</li>
          </ul>
          <p>In the current release, no analytics data is collected. When Firebase is enabled in a future update, you may limit analytics via device privacy settings and by declining App Tracking if the ATT prompt is shown. Uninstalling the app stops further data collection from that installation.</p>
        `
      },
      {
        id: "s7",
        number: "07",
        title: "Advertising & In-App Purchases",
        bodyHtml: `
          <p>PhotoPrep does <strong>not</strong> display advertisements.</p>
          <p>PhotoPrep does <strong>not</strong> offer in-app purchases, subscriptions, or paid tiers. All editor tools are available without payment. Batch processing supports up to <strong>100 photos</strong> per operation.</p>
        `
      },
      {
        id: "s8",
        number: "08",
        title: "Data Storage & Security",
        bodyHtml: `
          <p><strong>Where data is stored:</strong></p>
          <ul>
            <li><strong>Application Support & Caches:</strong> History database, thumbnails, and temporary processing files.</li>
            <li><strong>Documents/PhotoPrep:</strong> Processed output files accessible via the Files app.</li>
            <li><strong>Photo Library:</strong> Saved outputs when Save to Gallery is enabled.</li>
            <li><strong>UserDefaults:</strong> App preferences and onboarding state.</li>
          </ul>
          <p>PhotoPrep does not operate servers that store your photos or personal profile data.</p>
          <p><strong>How long data is retained:</strong></p>
          <ul>
            <li>History entries remain until you delete them, clear history in Settings, or uninstall the app.</li>
            <li>Auto-delete history (30 or 90 days) removes expired entries on app startup.</li>
            <li>Output files in Documents or your Photo Library persist until you delete them manually.</li>
          </ul>
          <p><strong>Security:</strong> Data in PhotoPrep’s sandbox is protected by iOS app isolation. Your photos are not transmitted over the network by PhotoPrep’s core processing engine.</p>
          <p><strong>Backup:</strong> iOS may include app preferences and Documents folder files in iCloud or local device backups depending on your device settings. Photos saved to your Photo Library follow your iCloud Photos settings.</p>
        `
      },
      {
        id: "s9",
        number: "09",
        title: "Children's Privacy",
        bodyHtml: `
          <p>PhotoPrep is not directed at children under the age of 13 (or the applicable age of digital consent in your jurisdiction). We do not knowingly collect personal information from children.</p>
          <p>If you are a parent or guardian and believe your child has used PhotoPrep in a way that raises privacy concerns, please contact us and we will take appropriate steps.</p>
        `
      },
      {
        id: "s10",
        number: "10",
        title: "Your Rights",
        bodyHtml: `
          <ul>
            <li><strong>Access:</strong> History and settings are available directly inside the app.</li>
            <li><strong>Deletion:</strong> Delete history entries, clear all history in Settings, or uninstall the app.</li>
            <li><strong>Photo permissions:</strong> Manage Photo Library access in iOS Settings or Menu → Privacy → Permissions.</li>
            <li><strong>Tracking:</strong> The current release does not track you or show the ATT prompt. In a future version with Firebase, you may decline App Tracking without losing access to editing features.</li>
            <li><strong>Metadata control:</strong> Enable default EXIF stripping in Settings before sharing photos.</li>
            <li><strong>GDPR (EU/EEA):</strong> Additional rights may apply. For future Firebase data processed by Google, see Google’s GDPR resources.</li>
            <li><strong>CCPA (California):</strong> PhotoPrep does not sell your personal information.</li>
          </ul>
        `
      },
      {
        id: "s11",
        number: "11",
        title: "Changes to This Policy",
        bodyHtml: `
          <p>We may update this Privacy Policy to reflect changes in the app’s features, applicable law, or our practices — for example, when Firebase analytics is enabled. When we make material changes, we will update the “Last updated” date at the top of this document.</p>
          <p>Continued use of PhotoPrep after an updated policy is posted constitutes your acceptance of the revised policy.</p>
          <p>The current version is accessible via <strong>Menu → Privacy → Privacy Policy</strong> inside the app.</p>
        `
      },
      {
        id: "s12",
        number: "12",
        title: "Contact Us",
        bodyHtml: `
          <p>If you have any questions, concerns, or requests regarding this Privacy Policy or PhotoPrep’s data practices, please contact us:</p>
        `
      }
    ],
    contact: {
      title: "Get in touch",
      text: "Questions about your privacy? We aim to respond within 48 hours.",
      emailLabel: "albenstudio@gmail.com"
    },
    footer: {
      copy: "© 2026 PhotoPrep · Alben Studio. All rights reserved.",
      platform: "Platform: iOS"
    }
  },

  tr: {
    htmlLang: "tr",
    pageTitle: "Gizlilik Politikası — PhotoPrep (iOS)",
    docBadge: "iOS Gizlilik Politikası",
    heroEyebrow: "Yasal Belge · iOS",
    heroTitleHtml: "Gizliliğiniz, <em>güvende.</em>",
    meta: {
      effective: { label: "Yürürlük tarihi", value: "12 Haziran 2026" },
      updated: { label: "Son güncelleme", value: "17 Haziran 2026" },
      platform: { label: "Platform", value: "iOS (iPhone ve iPad)" }
    },
    quickNavTitle: "İçindekiler",
    nav: [
      { id: "s1", label: "Topladığımız Bilgiler" },
      { id: "s2", label: "Bilgileri Nasıl Kullanırız" },
      { id: "s3", label: "Fotoğraf Erişimi ve İşleme" },
      { id: "s4", label: "Uygulama Takip Şeffaflığı (ATT)" },
      { id: "s5", label: "Üçüncü Taraf Hizmetler" },
      { id: "s6", label: "Analitik ve Çökme Raporlama" },
      { id: "s7", label: "Reklam ve Uygulama İçi Satın Almalar" },
      { id: "s8", label: "Veri Saklama ve Güvenlik" },
      { id: "s9", label: "Çocukların Gizliliği" },
      { id: "s10", label: "Haklarınız" },
      { id: "s11", label: "Bu Politikadaki Değişiklikler" },
      { id: "s12", label: "Bize Ulaşın" }
    ],
    summaryHtml: `
      <p><strong>Kısa sürüm:</strong> iOS için PhotoPrep, fotoğraflarınızı tamamen cihazınızda işler. PhotoPrep tarafından işletilen herhangi bir sunucuya fotoğraflarınızı yüklemeyiz, depolamayız veya satmayız. Siz kaydetmeyi veya paylaşmayı seçmediğiniz sürece görselleriniz iPhone veya iPad'inizde kalır.</p>
    `,
    sections: [
      {
        id: "s1",
        number: "01",
        title: "Topladığımız Bilgiler",
        bodyHtml: `
          <p>PhotoPrep, minimum veri izi yaklaşımıyla tasarlanmıştır. Bu politika, Apple App Store üzerinden dağıtılan iOS sürümü için geçerlidir.</p>
          <p><strong>Doğrudan sağladığınız bilgiler:</strong></p>
          <ul>
            <li><strong>Zorunlu bilgi yoktur</strong> — PhotoPrep'i kullanmak için hesap oluşturma, giriş yapma, e-posta adresi veya kişisel kayıt zorunlu değildir.</li>
            <li>Menüde <strong>Geri Bildirim Gönder</strong>'i seçerseniz e-posta uygulamanız destek adresimize mesaj gönderebilir. Bu mesaj e-posta sağlayıcınız tarafından işlenir; uygulama içinde PhotoPrep tarafından saklanmaz.</li>
          </ul>
          <p><strong>Cihazınızda yerel olarak depolanan bilgiler:</strong></p>
          <ul>
            <li><strong>Düzenleme geçmişi (yalnızca yerel):</strong> İşlenen görsellere ilişkin meta veriler — kaynak yolu, çıktı yolu, orijinal ve çıktı dosya boyutları, boyutlar, çıktı biçimi, görünen ad, düzenleyici modu ve zaman damgası. Bu veriler siz paylaşmadığınız sürece cihazınızdan çıkmaz.</li>
            <li><strong>Uygulama tercihleri:</strong> Dil, tema, varsayılan sıkıştırma kalitesi, varsayılan kayıt formatı, galeriye kaydetme tercihi, karşılaştırma ekranı tercihi, varsayılan EXIF temizleme, geçmiş otomatik silme süresi, dokunsal geri bildirim, metin boyutu, tanıtım durumu ve pipeline tarifleri iOS <code>UserDefaults</code> ve uygulama kum havuzundaki yerel dosyalar kullanılarak yerel olarak depolanır.</li>
            <li><strong>Puanlama istemi durumu:</strong> Uygulama içi puanlama isteminin gösterilip gösterilmediği, kabul edilip edilmediği veya reddedilip reddedilmediğine ilişkin yerel işaretler (reddetme sonrası bekleme süresi dahil).</li>
            <li><strong>İşlenen çıktı dosyaları:</strong> Sonuçları kaydettiğinizde kopyalar, ayarlarınıza bağlı olarak uygulamanın Belgeler klasöründe (<code>PhotoPrep</code>) ve/veya Fotoğraf Arşivi'nizde saklanabilir.</li>
          </ul>
          <p><strong>Üçüncü taraflara gönderilebilecek bilgiler (yalnızca gelecekteki güncellemeler):</strong></p>
          <ul>
            <li>Gelecekteki bir uygulama güncellemesinde anonim kullanım olaylarını ve uygulama kararlılığını ölçmek amacıyla <strong>Google Firebase Analytics ve Crashlytics</strong> entegrasyonu yapılabilir. Bu güncelleme geldiğinde uygulamalar arası takip söz konusuysa Apple Uygulama Takip Şeffaflığı (ATT) istemi de etkinleştirilebilir (bkz. Bölüm 04). Mevcut App Store sürümü ATT istemi <strong>göstermez</strong> ve analitik verisi <strong>iletmez</strong>.</li>
          </ul>
        `
      },
      {
        id: "s2",
        number: "02",
        title: "Bilgileri Nasıl Kullanırız",
        bodyHtml: `
          <p>Yerel olarak depolanan bilgileri yalnızca PhotoPrep deneyimini sunmak ve iyileştirmek amacıyla kullanırız:</p>
          <ul>
            <li>Düzenleme geçmişinizi Geçmiş sekmesinde ve ilgili ayar özetlerinde göstermek için.</li>
            <li>Tercih ettiğiniz ayarları ve pipeline tariflerini hatırlamak için.</li>
            <li>İşleme sonrası isteğe bağlı olarak önce/sonra karşılaştırma ekranı göstermek için (Ayarlar'dan kapatılabilir).</li>
            <li>Başarılı işleme kilometre taşlarından sonra isteğe bağlı olarak App Store'da uygulamayı puanlamanızı istemek için.</li>
            <li>Bir saklama süresi (30 veya 90 gün) seçtiğinizde eski geçmiş kayıtlarını otomatik silmek için.</li>
            <li>Firebase etkin olduğunda gelecekteki güncellemelerde: anonim özellik kullanımını ölçmek ve çökmeleri düzeltmek için (asla fotoğraf içeriğini içermez).</li>
          </ul>
          <p>Hiçbir veriyi üçüncü taraflara satmayız, kiralamayız veya takas etmeyiz. Reklam profilleri oluşturmayız. PhotoPrep reklam göstermez.</p>
        `
      },
      {
        id: "s3",
        number: "03",
        title: "Fotoğraf Erişimi ve İşleme",
        bodyHtml: `
          <p>PhotoPrep; fotoğrafları sıkıştırır, yeniden boyutlandırır, kırpar, dönüştürür, filigran ekler, arka planı bulanıklaştırır, yeniden adlandırır, meta verileri kaldırır ve PDF'e dönüştürür — bunların tamamı cihazınızda gerçekleşir.</p>
          <div class="callout">
            <p><strong>Tüm fotoğraf işleme işlemleri cihazınızda gerçekleşir.</strong> Orijinal fotoğraflarınız ve işlenen çıktılarınız, PhotoPrep tarafından işletilen herhangi bir sunucuya asla yüklenmez.</p>
          </div>
          <p><strong>iOS uygulamasında beyan edilen izinler:</strong></p>
          <ul>
            <li><strong>Fotoğraf Arşivi (okuma):</strong> Sistem seçicisiyle fotoğraf seçtiğinizde ve uygulamanın kaydedilmiş çıktıları yönetmek için okuma erişimine ihtiyaç duyduğu durumlarda kullanılır (örneğin Ayarlar'da bu seçeneği belirlediğinizde işlenen fotoğrafları arşivinizden kaldırmak için).</li>
            <li><strong>Fotoğraf Arşivi (ekleme):</strong> <strong>Galeriye Kaydet</strong> etkin olduğunda işlenen fotoğrafları Fotoğraf Arşivi'nize kaydetmek için kullanılır.</li>
          </ul>
          <p>Fotoğraf seçimi Apple'ın <strong>PhotosPicker</strong> bileşeniyle yapılır. Fotoğraf verilerini yalnızca siz dosyaları aktif olarak seçtiğinizde okuruz. Tüm galeriyi arka planda taramayız veya izlemeyiz.</p>
          <p><strong>Fotoğraflarınıza ne olur:</strong></p>
          <ul>
            <li>Sistem fotoğraf seçicisini kullanarak parti başına en fazla <strong>100 fotoğraf</strong> seçersiniz.</li>
            <li>Fotoğraflar seçtiğiniz araca göre bellekte işlenir (Sıkıştır, Yeniden Boyutlandır, Kırp, Dönüştür, Meta verileri kaldır, Görselden PDF, Filigran, Arka plan bulanıklaştırma, Toplu yeniden adlandırma, HEIC'ten JPG'ye veya Pipeline tarifleri).</li>
            <li><strong>Galeriye Kaydet</strong> etkin olduğunda çıktılar Apple Photos çatısı aracılığıyla Fotoğraf Arşivi'nize kaydedilir.</li>
            <li>Çıktılar ayrıca Dosyalar uygulamasında <strong>iPhone'umda → PhotoPrep</strong> altında (Belgeler klasörü) kullanılabilir.</li>
            <li>Cihazınızda yerel geçmişe bir meta veri kaydı kaydedilir.</li>
            <li>Orijinal fotoğraflarınız PhotoPrep tarafından otomatik olarak <strong>değiştirilmez</strong> veya silinmez.</li>
            <li>İşlenen dosyalar Apple'ın standart paylaşım sayfası aracılığıyla diğer uygulamalarla paylaşılabilir. PhotoPrep paylaşım sırasında dosya yüklemez.</li>
          </ul>
        `
      },
      {
        id: "s4",
        number: "04",
        title: "Uygulama Takip Şeffaflığı (ATT)",
        bodyHtml: `
          <div class="callout callout-warn">
            <p><strong>Mevcut App Store sürümü (v1.0):</strong> PhotoPrep, Apple Uygulama Takip Şeffaflığı (ATT) istemini <strong>göstermez</strong> ve diğer şirketlerin uygulamaları/web siteleri arasında sizi <strong>takip etmez</strong>. Reklam tanımlayıcısı (IDFA) kullanılmaz.</p>
          </div>
          <p>Apple'ın <strong>Uygulama Takip Şeffaflığı</strong> çerçevesi, bir uygulamanın cihazınızın reklam tanımlayıcısını (IDFA) diğer şirketlerin uygulamaları ve web siteleri arasında takip amacıyla kullanıp kullanamayacağını sorar.</p>
          <ul>
            <li><strong>Gelecekte neden isteyebiliriz:</strong> Firebase Analytics entegre edildiğinde, IDFA uygulamalar arası analitik için kullanılıyorsa Apple'ın gerektirdiği şekilde ATT izni istenebilir.</li>
            <li><strong>Mevcut sürüm:</strong> ATT istemi <strong>devre dışıdır</strong>. Tüm düzenleme araçları takip izni olmadan çalışır.</li>
            <li><strong>Uygulamalar arası reklam yok:</strong> PhotoPrep reklam göstermez ve verilerinizi satmaz. Takibi reklam amacıyla kullanmayız.</li>
            <li><strong>Gelecekte etkinleştirildiğinde:</strong> Tercihinizi iPhone/iPad'de <strong>Ayarlar → Gizlilik ve Güvenlik → Takip</strong> veya PhotoPrep içinde <strong>Menü → Gizlilik → İzinler</strong> bölümünden değiştirebileceksiniz.</li>
          </ul>
        `
      },
      {
        id: "s5",
        number: "05",
        title: "Üçüncü Taraf Hizmetler",
        bodyHtml: `
          <p>iOS için PhotoPrep aşağıdaki üçüncü taraf hizmetleri entegre eder veya edebilir:</p>
          <ul>
            <li><strong>Apple App Store:</strong> PhotoPrep, App Store üzerinden dağıtılır. İndirme, güncellemeler ve faturalandırma için Apple politikaları geçerlidir (uygulama içi satın alma yoktur). Apple Gizlilik Politikası: <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a></li>
            <li><strong>Google Firebase (Analytics ve Crashlytics) — planlanan:</strong> Gelecekteki bir güncellemede anonim kullanım ve çökme tanılama verilerini toplamak için eklenebilir. Google Gizlilik Politikası: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a></li>
          </ul>
          <p>PhotoPrep, reklam SDK'ları (örneğin AdMob) veya uygulama içi satın alma sistemleri entegre etmez.</p>
        `
      },
      {
        id: "s6",
        number: "06",
        title: "Analitik ve Çökme Raporlama",
        bodyHtml: `
          <div class="callout callout-warn">
            <p><strong>Mevcut App Store sürümü:</strong> Firebase Analytics ve Crashlytics <strong>henüz entegre edilmemiştir</strong>. Bugün iOS uygulamasından hiçbir analitik veya çökme verisi iletilmez.</p>
          </div>
          <p>Firebase gelecekteki bir güncellemede etkinleştirildiğinde şu verileri toplayabilir:</p>
          <ul>
            <li>Ekran ve özellik kullanım olayları (örneğin hangi düzenleyici modunun kullanıldığı).</li>
            <li>Düzenleyici modu adı, fotoğraf sayısı ve kaydedilen bayt miktarı içeren işleme başarı/başarısızlık olayları — <strong>asla fotoğraf içeriği veya seçtiğiniz dosya adları değil</strong>.</li>
            <li>Kararlılık sorunlarını gidermeye yardımcı olmak için çökme yığın izleri ve kritik olmayan hata raporları.</li>
            <li>Google belgelerinde açıklandığı şekilde standart Firebase cihaz ve uygulama örneği tanımlayıcıları. IDFA tabanlı uygulamalar arası takip kullanılırsa iOS'taki ATT tercihinize tabi olur.</li>
          </ul>
          <p>Mevcut sürümde analitik verisi toplanmaz. Firebase gelecekte etkinleştirildiğinde, ATT istemi gösterilirse cihaz gizlilik ayarlarından ve Uygulama Takibini reddederek analitiği sınırlayabilirsiniz. Uygulamayı kaldırmak, o kurulumdan sonraki veri toplanmasını durdurur.</p>
        `
      },
      {
        id: "s7",
        number: "07",
        title: "Reklam ve Uygulama İçi Satın Almalar",
        bodyHtml: `
          <p>PhotoPrep <strong>reklam göstermez</strong>.</p>
          <p>PhotoPrep uygulama içi satın alma, abonelik veya ücretli katman sunmaz. Tüm düzenleme araçları ödeme olmadan kullanılabilir. Toplu işleme, işlem başına en fazla <strong>100 fotoğrafı</strong> destekler.</p>
        `
      },
      {
        id: "s8",
        number: "08",
        title: "Veri Saklama ve Güvenlik",
        bodyHtml: `
          <p><strong>Veriler nerede saklanır:</strong></p>
          <ul>
            <li><strong>Application Support ve Caches:</strong> Geçmiş veritabanı, küçük görseller ve geçici işleme dosyaları.</li>
            <li><strong>Documents/PhotoPrep:</strong> Dosyalar uygulaması üzerinden erişilebilen işlenmiş çıktı dosyaları.</li>
            <li><strong>Photo Library:</strong> Galeriye Kaydet etkin olduğunda kaydedilen çıktılar.</li>
            <li><strong>UserDefaults:</strong> Uygulama tercihleri ve tanıtım durumu.</li>
          </ul>
          <p>PhotoPrep, fotoğraflarınızı veya kişisel profil verilerinizi depolayan sunucular işletmez.</p>
          <p><strong>Veriler ne kadar süreyle tutulur:</strong></p>
          <ul>
            <li>Geçmiş kayıtları siz silene, Ayarlar'dan geçmişi temizleyene veya uygulamayı kaldırana kadar kalır.</li>
            <li>Geçmişi otomatik silme (30 veya 90 gün), süresi dolan kayıtları uygulama başlangıcında kaldırır.</li>
            <li>Documents klasöründeki veya Fotoğraf Arşivi'nizdeki çıktı dosyaları siz manuel olarak silene kadar kalır.</li>
          </ul>
          <p><strong>Güvenlik:</strong> PhotoPrep kum havuzundaki veriler iOS uygulama izolasyonu ile korunur. PhotoPrep'in çekirdek işleme motoru fotoğraflarınızı ağ üzerinden iletmez.</p>
          <p><strong>Yedekleme:</strong> iOS, cihaz ayarlarınıza bağlı olarak uygulama tercihlerini ve Documents klasörü dosyalarını iCloud'a veya yerel cihaz yedeklerine dahil edebilir. Fotoğraf Arşivi'ne kaydedilen fotoğraflar iCloud Photos ayarlarınızı izler.</p>
        `
      },
      {
        id: "s9",
        number: "09",
        title: "Çocukların Gizliliği",
        bodyHtml: `
          <p>PhotoPrep, 13 yaşın altındaki çocuklara (veya yargı bölgenizde geçerli dijital rıza yaşının altındaki kişilere) yönelik değildir. Çocuklardan bilerek kişisel bilgi toplamayız.</p>
          <p>Ebeveyn veya vasiyseniz ve çocuğunuzun PhotoPrep'i gizlilik endişesi doğuracak şekilde kullandığına inanıyorsanız lütfen bizimle iletişime geçin; uygun adımları atarız.</p>
        `
      },
      {
        id: "s10",
        number: "10",
        title: "Haklarınız",
        bodyHtml: `
          <ul>
            <li><strong>Erişim:</strong> Geçmiş ve ayarlar doğrudan uygulama içinde kullanılabilir.</li>
            <li><strong>Silme:</strong> Geçmiş kayıtlarını silin, Ayarlar'dan tüm geçmişi temizleyin veya uygulamayı kaldırın.</li>
            <li><strong>Fotoğraf izinleri:</strong> Fotoğraf Arşivi erişimini iOS Ayarları'ndan veya Menü → Gizlilik → İzinler bölümünden yönetin.</li>
            <li><strong>Takip:</strong> Mevcut sürüm sizi takip etmez ve ATT istemi göstermez. Firebase'li gelecek sürümde düzenleme özelliklerine erişimi kaybetmeden Uygulama Takibini reddedebilirsiniz.</li>
            <li><strong>Meta veri kontrolü:</strong> Fotoğrafları paylaşmadan önce Ayarlar'da varsayılan EXIF temizlemeyi etkinleştirin.</li>
            <li><strong>GDPR (AB/AEA):</strong> Ek haklar geçerli olabilir. Google tarafından işlenen gelecekteki Firebase verileri için Google'ın GDPR kaynaklarına bakın.</li>
            <li><strong>CCPA (Kaliforniya):</strong> PhotoPrep kişisel bilgilerinizi satmaz.</li>
          </ul>
        `
      },
      {
        id: "s11",
        number: "11",
        title: "Bu Politikadaki Değişiklikler",
        bodyHtml: `
          <p>Bu Gizlilik Politikası'nı, uygulama özelliklerindeki, geçerli hukuktaki veya uygulamalarımızdaki değişiklikleri yansıtmak için güncelleyebiliriz — örneğin Firebase analitiği etkinleştirildiğinde. Önemli değişiklik yaptığımızda bu belgenin üst kısmındaki "Son güncelleme" tarihini yenileriz.</p>
          <p>Güncellenmiş bir politika yayımlandıktan sonra PhotoPrep'i kullanmaya devam etmeniz, revize edilmiş politikayı kabul ettiğiniz anlamına gelir.</p>
          <p>Geçerli sürüme uygulama içinde <strong>Menü → Gizlilik → Gizlilik Politikası</strong> üzerinden erişilebilir.</p>
        `
      },
      {
        id: "s12",
        number: "12",
        title: "Bize Ulaşın",
        bodyHtml: `
          <p>Bu Gizlilik Politikası veya PhotoPrep'in veri uygulamaları hakkında sorularınız, endişeleriniz ya da talepleriniz varsa lütfen bizimle iletişime geçin:</p>
        `
      }
    ],
    contact: {
      title: "İletişime geçin",
      text: "Gizliliğiniz hakkında sorularınız mı var? 48 saat içinde yanıtlamayı hedefliyoruz.",
      emailLabel: "albenstudio@gmail.com"
    },
    footer: {
      copy: "© 2026 PhotoPrep · Alben Studio. Tüm hakları saklıdır.",
      platform: "Platform: iOS"
    },
    langNoteLabel: "Not:",
    langNote:
      "Hukuki yorum veya uyuşmazlık durumlarında bu politikanın İngilizce sürümü esas alınır."
  },

  fr: {
    htmlLang: "fr",
    pageTitle: "Politique de confidentialité — PhotoPrep (iOS)",
    docBadge: "Politique de confidentialité iOS",
    heroEyebrow: "Document juridique · iOS",
    heroTitleHtml: "Votre vie privée, <em>protégée.</em>",
    meta: {
      effective: { label: "Date d'effet", value: "12 juin 2026" },
      updated: { label: "Dernière mise à jour", value: "17 juin 2026" },
      platform: { label: "Plateforme", value: "iOS (iPhone et iPad)" }
    },
    quickNavTitle: "Sommaire",
    nav: [
      { id: "s1", label: "Informations que nous collectons" },
      { id: "s2", label: "Comment nous utilisons les informations" },
      { id: "s3", label: "Accès aux photos et traitement" },
      { id: "s4", label: "App Tracking Transparency (ATT)" },
      { id: "s5", label: "Services tiers" },
      { id: "s6", label: "Analytique et rapports de plantage" },
      { id: "s7", label: "Publicité et achats intégrés" },
      { id: "s8", label: "Stockage des données et sécurité" },
      { id: "s9", label: "Confidentialité des enfants" },
      { id: "s10", label: "Vos droits" },
      { id: "s11", label: "Modifications de cette politique" },
      { id: "s12", label: "Nous contacter" }
    ],
    summaryHtml: `
      <p><strong>Version courte :</strong> PhotoPrep pour iOS traite vos photos entièrement sur votre appareil. Nous ne téléversons pas, ne stockons pas et ne vendons pas vos photos sur un serveur exploité par PhotoPrep. Vos images restent sur votre iPhone ou iPad sauf si vous choisissez de les enregistrer ou de les partager vous-même.</p>
    `,
    sections: [
      {
        id: "s1",
        number: "01",
        title: "Informations que nous collectons",
        bodyHtml: `
          <p>PhotoPrep est conçu avec une empreinte de données minimale. Cette politique s'applique à la version iOS distribuée sur l'Apple App Store.</p>
          <p><strong>Informations que vous fournissez directement :</strong></p>
          <ul>
            <li><strong>Aucune information obligatoire</strong> — nous n'exigeons pas la création de compte, la connexion, une adresse e-mail ou une inscription personnelle pour utiliser PhotoPrep.</li>
            <li>Si vous choisissez <strong>Envoyer des commentaires</strong> dans le menu, votre application e-mail peut envoyer un message à notre adresse de support. Ce message est traité par votre fournisseur e-mail et n'est pas stocké par PhotoPrep dans l'application.</li>
          </ul>
          <p><strong>Informations stockées localement sur votre appareil :</strong></p>
          <ul>
            <li><strong>Historique des modifications (local uniquement) :</strong> Métadonnées sur les images traitées — chemin source, chemin de sortie, tailles de fichier d'origine et de sortie, dimensions, format de sortie, nom d'affichage, mode d'édition et horodatage. Ces données ne quittent jamais votre appareil sauf si vous les partagez vous-même.</li>
            <li><strong>Préférences de l'application :</strong> Langue, thème, qualité de compression par défaut, format d'enregistrement par défaut, préférence d'enregistrement dans la galerie, préférence d'écran de comparaison, suppression EXIF par défaut, période de suppression automatique de l'historique, retour haptique, taille de texte, état d'onboarding et recettes pipeline sont stockés localement via <code>UserDefaults</code> d'iOS et des fichiers locaux dans le sandbox de l'application.</li>
            <li><strong>État de la demande d'évaluation :</strong> Indicateurs locaux indiquant si l'invite de notation intégrée a été affichée, acceptée ou refusée (y compris un délai de reprise après refus).</li>
            <li><strong>Fichiers de sortie traités :</strong> Lorsque vous enregistrez des résultats, des copies peuvent être stockées dans le dossier Documents de l'application (<code>PhotoPrep</code>) et/ou dans votre Photothèque, selon vos paramètres.</li>
          </ul>
          <p><strong>Informations pouvant être envoyées à des tiers (mises à jour futures uniquement) :</strong></p>
          <ul>
            <li>Dans une future mise à jour de l'application, nous pourrions intégrer <strong>Google Firebase Analytics et Crashlytics</strong> afin de mesurer des événements d'utilisation anonymes et la stabilité de l'application. Lors de cette mise à jour, nous pourrions aussi activer l'invite App Tracking Transparency si un suivi inter-apps s'applique (voir section 04). La version actuelle de l'App Store n'affiche <strong>pas</strong> l'invite ATT et ne transmet <strong>pas</strong> de données analytiques.</li>
          </ul>
        `
      },
      {
        id: "s2",
        number: "02",
        title: "Comment nous utilisons les informations",
        bodyHtml: `
          <p>Nous utilisons les informations stockées localement uniquement pour fournir et améliorer l'expérience PhotoPrep :</p>
          <ul>
            <li>Afficher votre historique de modifications dans l'onglet Historique et les résumés de paramètres associés.</li>
            <li>Mémoriser vos paramètres préférés et vos recettes pipeline.</li>
            <li>Afficher facultativement un écran de comparaison avant/après après le traitement (désactivable dans Réglages).</li>
            <li>Vous proposer facultativement d'évaluer l'application sur l'App Store après des étapes de traitement réussies.</li>
            <li>Supprimer automatiquement les anciennes entrées d'historique lorsque vous choisissez une période de conservation (30 ou 90 jours).</li>
            <li>Dans de futures mises à jour avec Firebase activé : mesurer l'usage anonyme des fonctionnalités et corriger les plantages (sans jamais inclure le contenu des photos).</li>
          </ul>
          <p>Nous ne vendons, ne louons ni n'échangeons aucune donnée avec des tiers. Nous ne créons pas de profils publicitaires. PhotoPrep n'affiche pas de publicité.</p>
        `
      },
      {
        id: "s3",
        number: "03",
        title: "Accès aux photos et traitement",
        bodyHtml: `
          <p>PhotoPrep compresse, redimensionne, recadre, convertit, ajoute des filigranes, floute les arrière-plans, renomme, supprime les métadonnées et convertit des photos en PDF — entièrement sur votre appareil.</p>
          <div class="callout">
            <p><strong>Tout le traitement photo se fait sur votre appareil.</strong> Vos photos originales et les sorties traitées ne sont jamais téléversées vers un serveur exploité par PhotoPrep.</p>
          </div>
          <p><strong>Autorisations déclarées dans l'application iOS :</strong></p>
          <ul>
            <li><strong>Photothèque (lecture) :</strong> Utilisée lorsque vous sélectionnez des photos avec le sélecteur système et lorsque l'application a besoin d'un accès en lecture pour gérer les sorties enregistrées (par exemple, supprimer des photos traitées de votre photothèque lorsque vous choisissez cette option dans Réglages).</li>
            <li><strong>Photothèque (ajout) :</strong> Utilisée lorsque <strong>Enregistrer dans la galerie</strong> est activé pour enregistrer les photos traitées dans votre Photothèque.</li>
          </ul>
          <p>La sélection de photos utilise le <strong>PhotosPicker</strong> d'Apple. Nous lisons les données photo uniquement lorsque vous sélectionnez activement des fichiers. Nous n'analysons pas ni ne surveillons votre galerie complète en arrière-plan.</p>
          <p><strong>Ce qui arrive à vos photos :</strong></p>
          <ul>
            <li>Vous sélectionnez jusqu'à <strong>100 photos</strong> par lot via le sélecteur système.</li>
            <li>Les photos sont traitées en mémoire selon l'outil choisi (Compresser, Redimensionner, Recadrer, Convertir, Supprimer les métadonnées, Image vers PDF, Filigrane, Flou d'arrière-plan, Renommage par lot, HEIC vers JPG ou recettes pipeline).</li>
            <li>Lorsque <strong>Enregistrer dans la galerie</strong> est activé, les sorties sont enregistrées dans votre Photothèque via le framework Photos d'Apple.</li>
            <li>Les sorties sont également disponibles dans l'app Fichiers sous <strong>Sur mon iPhone → PhotoPrep</strong> (dossier Documents).</li>
            <li>Un enregistrement de métadonnées est sauvegardé dans l'historique local de votre appareil.</li>
            <li>Vos photos originales ne sont <strong>pas</strong> modifiées ni supprimées automatiquement par PhotoPrep.</li>
            <li>Les fichiers traités peuvent être partagés vers d'autres apps via la feuille de partage standard d'Apple. PhotoPrep ne téléverse pas de fichiers pendant le partage.</li>
          </ul>
        `
      },
      {
        id: "s4",
        number: "04",
        title: "App Tracking Transparency (ATT)",
        bodyHtml: `
          <div class="callout callout-warn">
            <p><strong>Version actuelle de l'App Store (v1.0) :</strong> PhotoPrep n'affiche <strong>pas</strong> l'invite App Tracking Transparency (ATT) d'Apple et ne vous suit <strong>pas</strong> à travers les apps ou sites web d'autres entreprises. Aucun identifiant publicitaire (IDFA) n'est utilisé.</p>
          </div>
          <p>Le cadre <strong>App Tracking Transparency</strong> d'Apple demande si une application peut utiliser l'identifiant publicitaire (IDFA) de votre appareil pour le suivi à travers les apps et sites web d'autres entreprises.</p>
          <ul>
            <li><strong>Pourquoi nous pourrions demander plus tard :</strong> Lors de l'intégration de Firebase Analytics, nous pourrions demander l'autorisation ATT si l'IDFA est utilisé pour des analyses inter-apps — comme l'exige Apple.</li>
            <li><strong>Version actuelle :</strong> L'invite ATT est <strong>désactivée</strong>. Tous les outils d'édition fonctionnent sans autorisation de suivi.</li>
            <li><strong>Aucune publicité inter-apps :</strong> PhotoPrep n'affiche pas de publicité et ne vend pas vos données. Nous n'utilisons pas le suivi à des fins publicitaires.</li>
            <li><strong>Lorsqu'elle sera activée dans une future version :</strong> Vous pourrez modifier votre choix dans <strong>Réglages → Confidentialité et sécurité → Suivi</strong> sur votre iPhone ou iPad, ou dans <strong>Menu → Confidentialité → Autorisations</strong> dans PhotoPrep.</li>
          </ul>
        `
      },
      {
        id: "s5",
        number: "05",
        title: "Services tiers",
        bodyHtml: `
          <p>PhotoPrep pour iOS intègre ou peut intégrer les services tiers suivants :</p>
          <ul>
            <li><strong>Apple App Store :</strong> PhotoPrep est distribué via l'App Store. Les politiques d'Apple s'appliquent au téléchargement, aux mises à jour et à la facturation (aucun achat intégré). Politique de confidentialité d'Apple : <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a></li>
            <li><strong>Google Firebase (Analytics et Crashlytics) — prévu :</strong> Peut être ajouté dans une future mise à jour pour collecter des diagnostics d'usage et de plantage anonymisés. Politique de confidentialité de Google : <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a></li>
          </ul>
          <p>PhotoPrep n'intègre <strong>pas</strong> de SDK publicitaires (tels qu'AdMob) ni de systèmes d'achats intégrés.</p>
        `
      },
      {
        id: "s6",
        number: "06",
        title: "Analytique et rapports de plantage",
        bodyHtml: `
          <div class="callout callout-warn">
            <p><strong>Version actuelle de l'App Store :</strong> Firebase Analytics et Crashlytics ne sont <strong>pas encore intégrés</strong>. Aucune donnée analytique ni de plantage n'est transmise depuis l'application iOS aujourd'hui.</p>
          </div>
          <p>Lorsque Firebase sera activé dans une future mise à jour, il pourra collecter :</p>
          <ul>
            <li>Des événements d'utilisation d'écran et de fonctionnalités (par exemple, quel mode d'édition a été utilisé).</li>
            <li>Des événements de réussite ou d'échec du traitement avec le nom du mode d'édition, le nombre de photos et les octets économisés — <strong>jamais le contenu des photos ni les noms de fichiers sélectionnés</strong>.</li>
            <li>Des traces de pile de plantage et des rapports d'erreurs non fatales pour aider à corriger les problèmes de stabilité.</li>
            <li>Les identifiants standards d'appareil et d'instance d'application Firebase décrits dans la documentation Google. Si un suivi inter-apps basé sur l'IDFA est utilisé, cela sera soumis à votre choix ATT sur iOS.</li>
          </ul>
          <p>Dans la version actuelle, aucune donnée analytique n'est collectée. Lorsque Firebase sera activé dans une future mise à jour, vous pourrez limiter l'analytique via les réglages de confidentialité de l'appareil et en refusant le suivi des apps si l'invite ATT est affichée. La désinstallation de l'application arrête toute collecte ultérieure depuis cette installation.</p>
        `
      },
      {
        id: "s7",
        number: "07",
        title: "Publicité et achats intégrés",
        bodyHtml: `
          <p>PhotoPrep <strong>n'affiche pas</strong> de publicités.</p>
          <p>PhotoPrep ne propose ni achats intégrés, ni abonnements, ni offres payantes. Tous les outils d'édition sont disponibles sans paiement. Le traitement par lot prend en charge jusqu'à <strong>100 photos</strong> par opération.</p>
        `
      },
      {
        id: "s8",
        number: "08",
        title: "Stockage des données et sécurité",
        bodyHtml: `
          <p><strong>Où les données sont stockées :</strong></p>
          <ul>
            <li><strong>Application Support et Caches :</strong> Base de données d'historique, vignettes et fichiers temporaires de traitement.</li>
            <li><strong>Documents/PhotoPrep :</strong> Fichiers de sortie traités accessibles via l'app Fichiers.</li>
            <li><strong>Photo Library :</strong> Sorties enregistrées lorsque Enregistrer dans la galerie est activé.</li>
            <li><strong>UserDefaults :</strong> Préférences de l'application et état d'onboarding.</li>
          </ul>
          <p>PhotoPrep n'exploite pas de serveurs stockant vos photos ou vos données de profil personnel.</p>
          <p><strong>Durée de conservation des données :</strong></p>
          <ul>
            <li>Les entrées d'historique restent jusqu'à ce que vous les supprimiez, vidiez l'historique dans Réglages ou désinstalliez l'application.</li>
            <li>La suppression automatique de l'historique (30 ou 90 jours) retire les entrées expirées au démarrage de l'application.</li>
            <li>Les fichiers de sortie dans Documents ou votre Photothèque restent jusqu'à suppression manuelle.</li>
          </ul>
          <p><strong>Sécurité :</strong> Les données dans le sandbox de PhotoPrep sont protégées par l'isolation des apps iOS. Vos photos ne sont pas transmises sur le réseau par le moteur de traitement principal de PhotoPrep.</p>
          <p><strong>Sauvegarde :</strong> iOS peut inclure les préférences de l'application et les fichiers du dossier Documents dans les sauvegardes iCloud ou locales, selon les réglages de votre appareil. Les photos enregistrées dans votre Photothèque suivent vos réglages iCloud Photos.</p>
        `
      },
      {
        id: "s9",
        number: "09",
        title: "Confidentialité des enfants",
        bodyHtml: `
          <p>PhotoPrep n'est pas destiné aux enfants de moins de 13 ans (ou à l'âge applicable du consentement numérique dans votre juridiction). Nous ne collectons pas sciemment d'informations personnelles concernant les enfants.</p>
          <p>Si vous êtes parent ou tuteur et pensez que votre enfant a utilisé PhotoPrep d'une manière soulevant des préoccupations de confidentialité, veuillez nous contacter et nous prendrons les mesures appropriées.</p>
        `
      },
      {
        id: "s10",
        number: "10",
        title: "Vos droits",
        bodyHtml: `
          <ul>
            <li><strong>Accès :</strong> L'historique et les réglages sont disponibles directement dans l'application.</li>
            <li><strong>Suppression :</strong> Supprimez des entrées d'historique, videz tout l'historique dans Réglages ou désinstallez l'application.</li>
            <li><strong>Autorisations photos :</strong> Gérez l'accès à la Photothèque dans les réglages iOS ou Menu → Confidentialité → Autorisations.</li>
            <li><strong>Suivi :</strong> La version actuelle ne vous suit pas et n'affiche pas l'invite ATT. Dans une future version avec Firebase, vous pourrez refuser le suivi des apps sans perdre l'accès aux fonctionnalités d'édition.</li>
            <li><strong>Contrôle des métadonnées :</strong> Activez la suppression EXIF par défaut dans Réglages avant de partager des photos.</li>
            <li><strong>GDPR (UE/EEE) :</strong> Des droits supplémentaires peuvent s'appliquer. Pour les futures données Firebase traitées par Google, consultez les ressources GDPR de Google.</li>
            <li><strong>CCPA (Californie) :</strong> PhotoPrep ne vend pas vos informations personnelles.</li>
          </ul>
        `
      },
      {
        id: "s11",
        number: "11",
        title: "Modifications de cette politique",
        bodyHtml: `
          <p>Nous pouvons mettre à jour cette Politique de confidentialité afin de refléter des changements dans les fonctionnalités de l'application, le droit applicable ou nos pratiques — par exemple lorsque l'analytique Firebase est activée. En cas de modification substantielle, nous mettrons à jour la date « Dernière mise à jour » en haut de ce document.</p>
          <p>L'utilisation continue de PhotoPrep après publication d'une politique mise à jour vaut acceptation de la politique révisée.</p>
          <p>La version actuelle est accessible dans l'application via <strong>Menu → Confidentialité → Politique de confidentialité</strong>.</p>
        `
      },
      {
        id: "s12",
        number: "12",
        title: "Nous contacter",
        bodyHtml: `
          <p>Si vous avez des questions, des préoccupations ou des demandes concernant cette Politique de confidentialité ou les pratiques de PhotoPrep en matière de données, veuillez nous contacter :</p>
        `
      }
    ],
    contact: {
      title: "Nous contacter",
      text: "Des questions sur votre confidentialité ? Nous visons une réponse sous 48 heures.",
      emailLabel: "albenstudio@gmail.com"
    },
    footer: {
      copy: "© 2026 PhotoPrep · Alben Studio. Tous droits réservés.",
      platform: "Plateforme : iOS"
    },
    langNoteLabel: "Remarque :",
    langNote:
      "En cas d'interprétation juridique ou de litige, la version anglaise de cette politique prévaut."
  }
};

window.initPrivacyPolicy = function initPrivacyPolicy() {
  const LANGS = ["en", "tr", "fr"];
  const STORAGE_KEY = "photoprep_privacy_lang";

  function normalizeLang(input) {
    if (!input || typeof input !== "string") {
      return "";
    }
    const lower = input.toLowerCase();
    if (lower.startsWith("tr")) {
      return "tr";
    }
    if (lower.startsWith("fr")) {
      return "fr";
    }
    if (lower.startsWith("en")) {
      return "en";
    }
    return "";
  }

  function resolveInitialLang() {
    const params = new URLSearchParams(window.location.search);
    const queryLang = normalizeLang(params.get("lang"));
    if (queryLang) {
      return queryLang;
    }

    let storedLang = "";
    try {
      storedLang = normalizeLang(window.localStorage.getItem(STORAGE_KEY));
    } catch (error) {
      storedLang = "";
    }
    if (storedLang) {
      return storedLang;
    }

    const navLang = normalizeLang(window.navigator.language || "");
    return navLang || "en";
  }

  function sectionHtml(section) {
    return `
      <section class="section" id="${section.id}">
        <p class="section-number">${section.number}</p>
        <h2>${section.title}</h2>
        ${section.bodyHtml}
      </section>
    `;
  }

  function render(lang) {
    const locale = window.PRIVACY_I18N[lang] || window.PRIVACY_I18N.en;

    document.documentElement.setAttribute("lang", locale.htmlLang || lang);
    document.title = locale.pageTitle;

    const docBadge = document.getElementById("doc-badge");
    if (docBadge) {
      docBadge.textContent = locale.docBadge;
    }

    const root = document.getElementById("privacy-root");
    if (!root) {
      return;
    }

    const navHtml = locale.nav
      .map(function mapNav(item) {
        return `<li><a href="#${item.id}">${item.label}</a></li>`;
      })
      .join("");

    const sectionsHtml = locale.sections.map(sectionHtml).join("");
    const langNoteHtml = locale.langNote
      ? `<div class="callout callout-warn" style="margin-top: 24px;"><p><strong>${locale.langNoteLabel || "Note:"}</strong> ${locale.langNote}</p></div>`
      : "";

    root.innerHTML = `
      <div class="hero">
        <p class="hero-eyebrow">${locale.heroEyebrow}</p>
        <h1>${locale.heroTitleHtml}</h1>
        <div class="hero-meta">
          <span><strong>${locale.meta.effective.label}:</strong> ${locale.meta.effective.value}</span>
          <span><strong>${locale.meta.updated.label}:</strong> ${locale.meta.updated.value}</span>
          <span><strong>${locale.meta.platform.label}:</strong> ${locale.meta.platform.value}</span>
        </div>
      </div>

      <div class="page-wrap">
        <nav class="quick-nav" aria-label="Page contents">
          <p class="quick-nav-title">${locale.quickNavTitle}</p>
          <ol>${navHtml}</ol>
        </nav>

        <div class="callout" style="margin-bottom: 48px;">
          ${locale.summaryHtml}
        </div>

        ${sectionsHtml}

        ${langNoteHtml}

        <div class="contact-card">
          <h3>${locale.contact.title}</h3>
          <p>${locale.contact.text}</p>
          <a href="mailto:albenstudio@gmail.com">${locale.contact.emailLabel}</a>
        </div>
      </div>

      <footer>
        <span>${locale.footer.copy}</span>
        <span>${locale.footer.platform}</span>
      </footer>
    `;

    LANGS.forEach(function updateSwitch(code) {
      const button = document.getElementById("lang-" + code);
      if (!button) {
        return;
      }
      button.classList.toggle("active", code === lang);
    });

    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      // Ignore storage errors in private mode.
    }

    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url.toString());
  }

  const initialLang = resolveInitialLang();
  const safeLang = LANGS.includes(initialLang) ? initialLang : "en";

  LANGS.forEach(function bindSwitch(code) {
    const button = document.getElementById("lang-" + code);
    if (!button) {
      return;
    }
    button.addEventListener("click", function onLangClick() {
      render(code);
    });
  });

  render(safeLang);
};
