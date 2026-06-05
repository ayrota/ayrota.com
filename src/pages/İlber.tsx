import { Section } from '../components/Section';
import { Footer } from '../components/footer'; 
import { IlberCadenceMock } from '../components/IlberMock';
import { CapabilityCard } from '../components/CapabilityCard';
import { Link } from 'react-router-dom';

export default function Ilber() {
  return (
    <main className="relative z-10 pt-28">
      {/* Hero / Giriş Bölümü */}
      <Section id="ilber-hero" width="wide" className="py-20">
        <div className="max-w-4xl">
          <span className="block text-xs font-semibold tracking-widest text-muted uppercase">
            IMU Data Quality Assurance Platform
          </span>
          <h1 className="mt-5 text-5xl font-medium tracking-tight text-fg md:text-7xl">
            İlber
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
            IMU verilerini algoritma geliştirme sürecine girmeden önce doğrulayan, analiz eden ve raporlayan kalite güvence platformu.
          </p>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">
            İlber; zaman tutarlılığı, sensör sağlığı, sinyal kalitesi ve hareket davranışını birlikte değerlendirerek veri kaynaklı problemleri erken aşamada görünür hale getirir.
          </p>
        </div>
      </Section>

      {/* Kısa Değer Önerisi */}
      <Section id="ilber-problem" width="wide" className="py-14 border-t border-line/20">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <span className="block text-xs font-semibold tracking-widest text-muted uppercase">
              Veri Odaklı Güvence Katmanı
            </span>
            <h2 className="mt-4 text-2xl font-medium leading-tight text-fg md:text-3xl">
              Sensör verisini güvenilir hale getirin.
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-relaxed text-muted">
            <p>
              Saha verilerindeki kopmalar, zaman damgası problemleri, doygunluklar ve gürültü artışları çoğu zaman algoritma hatası gibi yorumlanır.
            </p>
            <p>
              İlber, bu ayrımı netleştirerek ekiplerin ham veriden kaynaklanan problemleri daha erken görmesini ve geliştirme sürecini daha kontrollü yürütmesini sağlar.
            </p>
          </div>
        </div>
      </Section>

      {/* Platform Modülleri */}
      <Section id="ilber-modules" width="wide" className="py-12 border-t border-line/20">
        <span className="block text-xs font-semibold tracking-widest text-muted uppercase">
          Analiz Altyapısı
        </span>
        <h2 className="mt-4 text-2xl md:text-3xl font-medium leading-tight text-fg">
          Platform Modülleri
        </h2>
        
        {/* grid-cols-1 eklenerek mobil uyumluluk garanti altına alındı */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 items-start">
          <CapabilityCard title="QC – Kalite Kontrol" description="Veri henüz işlenmeden önce eksik veri, timestamp bozuklukları ve sensör kayıt tutarlılığı kontrollerini yaparak ham verinin analizde kullanılabilirliğini denetler." />
          <CapabilityCard title="Repair – Onarım" description="QC aşamasında tespit edilen veri problemlerini işleyerek veriyi analiz süreçleri için daha hazır ve tutarlı hale getirir." />
          <CapabilityCard title="Sensör Domain Analizi" description="Doğrudan sensör sinyalinin kalitesini değerlendirir; örnekleme frekansı, RMS seviyeleri, gürültü miktarı ve sensör davranışını inceler." />
          <CapabilityCard title="Sensör Sağlık Analizi" description="Sensörlerin kayıt boyunca yapısal bütünlüğünü denetler; doygunluk, clipping, dropout ve anormal ölçüm davranışlarını görünür hale getirir." />
          <CapabilityCard title="GNSS Quality Analysis" description="GNSS alıcısından gelen verilerin güvenilirliğini ve konum doğruluğunu değerlendirir; fix type, HDOP, VDOP ve sinyal kalitesi gibi göstergeleri inceler." />
          <CapabilityCard title="Spectral Analiz" description="Ham sinyalin frekans içeriğini analiz eder; baskın frekansları, gürültü bantlarını ve periyodik davranışları ortaya çıkarır." />
          <CapabilityCard title="Physical Checks – Fiziksel Kontroller" description="Ölçümlerin fiziksel olarak anlamlı ve beklenen davranışlarla uyumlu olup olmadığını değerlendirir." />
          <CapabilityCard title="Consistency – Tutarlılık Analizi" description="Kayıtlar, oturumlar ve datasetler arasındaki benzerlikleri analiz ederek davranış ve veri tutarlılığını ölçer." />
          <CapabilityCard title="Cadence Analizi" description="Periyodik hareketlerin ritim karakteristiğini, baskın frekansını ve ritim kararlılığını değerlendirir." />
          <CapabilityCard title="Window Analizi" description="Ham zaman serilerini küçük zaman pencerelerine ayırarak ileri seviye analizler için temel özellikleri üretir." />
          <CapabilityCard title="Motion Analizi" description="Hareket segmentlerini belirleyerek aktivite davranışlarını sınıflandırır." />
          <CapabilityCard title="Flight Periodicity Analysis" description="Uçuş verilerindeki periyodik titreşim davranışlarını ve frekans karakteristiklerini analiz eder." />
          <CapabilityCard title="Flight State Classification" description="Uçuş operasyonlarını farklı durumlara ayırarak davranış analizi gerçekleştirir." />
          <CapabilityCard title="Flight Stability Analysis" description="Uçuş sırasında platformun kararlılığını ve yönelim değişkenliğini değerlendirir." />
          <CapabilityCard title="Trajectory Analysis" description="Gerçekleşen hareketin rota karakteristiğini ve sapmalarını analiz eder." />
          <CapabilityCard title="Session Report" description="Tüm analiz sonuçlarını tek bir kalite güvence raporu altında birleştirir." />
        </div>
      </Section>

      {/* Örnek Rapor Görünümü */}
      <Section id="sample-report" width="wide" className="py-16 border-t border-line/20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10">
            <span className="block text-xs font-semibold tracking-widest text-muted uppercase">
              Platform Interface Demonstration
            </span>
            <h2 className="mt-3 text-3xl font-medium text-fg">
              İlber Analiz Modülü Çıktı Raporu Örneği
            </h2>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              Aşağıda, İlber’in ritim kararlılığı analiz modülünü temsil eden örnek bir raporlama ekranı yer almaktadır.
            </p>
          </div>
          <IlberCadenceMock />
        </div>
      </Section>

      {/* CTA / Kapanış Bölümü */}
      <Section id="ilber-cta" width="wide" className="py-16 border-t border-line/20 bg-panel/10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-fg">
            IMU verisini algoritmadan önce doğrulayın.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted max-w-2xl mx-auto">
            İlber; navigasyon, PDR, UAV, robotik ve sensör füzyonu geliştiren ekipler için standartlaştırılmış veri kalite güvence katmanı sunar.
          </p>
          <div className="mt-8">
            <Link 
              to="/#contact" 
              className="inline-flex rounded-md border border-line bg-fg px-6 py-3 text-sm font-medium text-bg transition-all hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}