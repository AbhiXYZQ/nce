import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-[70vh] bg-transparent">
      <div className="relative overflow-hidden">
        <div className="bg-gradient-to-br from-[#001a33] via-[#003366] to-[#001122]">
          <div className="relative container mx-auto px-6 py-16 md:py-20">
            {/* Subtle grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.35) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.35) 1px,transparent 1px)",
                backgroundSize: "64px 64px",
              }}
            />

            <div className="relative mx-auto max-w-2xl">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-white/10 border border-white/15 p-3">
                  <Image
                    src="/images/nce-logo.png"
                    alt="Nalanda College of Engineering logo"
                    width={52}
                    height={52}
                    priority
                  />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c9a84c]">
                    Nalanda College of Engineering, Chandi
                  </p>
                  <h1 className="font-playfair text-2xl md:text-3xl font-extrabold text-white mt-1">
                    Loading…
                  </h1>
                  <p className="text-white/75 text-sm mt-1">
                    Preparing the next section for you.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-5">
                <div className="h-2 rounded-full bg-white/15 loader-bar" />

                <div className="mt-4 flex items-center justify-between text-xs text-white/70">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="loader-dot inline-block w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                    <span className="loader-dot inline-block w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                    <span className="loader-dot inline-block w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                    <span className="ml-2">Please wait</span>
                  </span>
                  <span className="font-semibold">NCE • Official Website</span>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {["Academics", "Departments", "Placements"].map((label) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                      {label}
                    </p>
                    <div className="mt-3 h-2 rounded-full bg-white/10" />
                    <div className="mt-2 h-2 w-4/5 rounded-full bg-white/10" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* White body spacing to match site */}
      <div className="container mx-auto px-6 py-10">
        <div className="h-10 w-64 rounded-xl bg-white/60 border border-slate-200/70 backdrop-blur" />
        <div className="mt-4 h-4 w-full max-w-3xl rounded-lg bg-white/60 border border-slate-200/70 backdrop-blur" />
        <div className="mt-2 h-4 w-11/12 max-w-3xl rounded-lg bg-white/60 border border-slate-200/70 backdrop-blur" />
        <div className="mt-2 h-4 w-10/12 max-w-3xl rounded-lg bg-white/60 border border-slate-200/70 backdrop-blur" />
      </div>
    </div>
  );
}
