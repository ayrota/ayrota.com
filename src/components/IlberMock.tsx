
const runs = [
  {
    name: 'test0',
    status: 'Stabil',
    tone: 'success',
    frequency: '1.81 Hz',
    sampling: '90.9 Hz',
    duration: '37.0 s',
    confidence: 0.77,
    periodicity: 0.8,
  },
  {
    name: 'test1',
    status: 'Stabil',
    tone: 'success',
    frequency: '1.81 Hz',
    sampling: '90.9 Hz',
    duration: '49.1 s',
    confidence: 0.72,
    periodicity: 0.79,
  },
  {
    name: 'test2',
    status: 'Stabil',
    tone: 'success',
    frequency: '1.80 Hz',
    sampling: '90.9 Hz',
    duration: '47.2 s',
    confidence: 0.72,
    periodicity: 0.79,
  },
  {
    name: 'test3',
    status: 'Kararsız',
    tone: 'danger',
    frequency: '1.85 Hz',
    sampling: '90.9 Hz',
    duration: '11.4 s',
    confidence: 0.31,
    periodicity: 0.22,
  },
] as const;

export function IlberCadenceMock() {
  return (
    <div className="rounded-2xl border border-line/70 bg-[#071021]/90 p-4 shadow-soft backdrop-blur">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-muted">
            Ritim Özeti
          </p>

          <h3 className="mt-2 text-xl font-bold text-fg">
            Ritim Kararlılık Görünümü
          </h3>

          <p className="mt-3 max-w-2xl text-xs font-medium leading-relaxed text-muted">
            Seçilen dataset için ritim güveni, periyodiklik ve baskın frekans
            değerleri kayıt bazlı olarak değerlendirilir.
          </p>
        </div>

        <div className="w-full max-w-[220px]">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
            Dataset Seç
          </p>

          <div className="rounded-md border border-cyan-400/60 bg-bg px-3 py-2 text-xs font-bold text-fg">
            Dataset7__normal
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-4">
        <div className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
            Ritim Kararlılığı
          </p>
          <p className="mt-3 text-4xl font-bold text-fg">
            0.56
          </p>
          <p className="mt-3 text-xs text-muted">
            Dataset genelinde ritim güven skoru.
          </p>
        </div>

        <div className="rounded-xl border border-line/60 bg-bg/40 p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
            Ortalama Periyodiklik
          </p>
          <p className="mt-3 text-2xl font-bold text-fg">
            0.56
          </p>
        </div>

        <div className="rounded-xl border border-line/60 bg-bg/40 p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
            Baskın Frekans
          </p>
          <p className="mt-3 text-2xl font-bold text-fg">
            2.06 Hz
          </p>
        </div>

        <div className="rounded-xl border border-line/60 bg-bg/40 p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
            Kayıt Sayısı
          </p>
          <p className="mt-3 text-2xl font-bold text-fg">
            5
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {runs.map((run) => (
          <div
            key={run.name}
            className={`rounded-xl border p-4 ${
              run.tone === 'danger'
                ? 'border-red-400/30 bg-red-500/5'
                : 'border-line/60 bg-bg/40'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">
                  Dataset7__normal
                </p>

                <h4 className="mt-1 text-lg font-bold text-fg">
                  {run.name}
                </h4>
              </div>

              <span
                className={`rounded-full px-3 py-1.5 text-[11px] font-bold ${
                  run.tone === 'danger'
                    ? 'bg-red-400/20 text-red-100'
                    : 'bg-emerald-400/20 text-emerald-100'
                }`}
              >
                {run.status}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="rounded-lg border border-line/50 bg-bg/50 p-2">
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-muted">
                  Frekans
                </p>
                <p className="mt-1 text-sm font-bold text-fg">
                  {run.frequency}
                </p>
              </div>

              <div className="rounded-lg border border-line/50 bg-bg/50 p-2">
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-muted">
                  Örnekleme
                </p>
                <p className="mt-1 text-sm font-bold text-fg">
                  {run.sampling}
                </p>
              </div>

              <div className="rounded-lg border border-line/50 bg-bg/50 p-2">
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-muted">
                  Süre
                </p>
                <p className="mt-1 text-sm font-bold text-fg">
                  {run.duration}
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <div>
                <div className="mb-1.5 flex justify-between text-xs font-bold">
                  <span className="text-muted">Ritim Güveni</span>
                  <span className="text-fg">{run.confidence.toFixed(2)}</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-bg">
                  <div
                    className="h-full rounded-full bg-cyan-400"
                    style={{ width: `${run.confidence * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="mb-1.5 flex justify-between text-xs font-bold">
                  <span className="text-muted">Periyodiklik</span>
                  <span className="text-fg">{run.periodicity.toFixed(2)}</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-bg">
                  <div
                    className="h-full rounded-full bg-fuchsia-400"
                    style={{ width: `${run.periodicity * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-5 text-[11px] leading-relaxed text-muted">
        Bu ekran temsilîdir. Ürün kapsamını göstermek için hazırlanmıştır;
        analiz eşikleri, algoritmik karar mantığı ve iç mimari detayları
        gösterilmez.
      </p>
    </div>
  );
}