import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <Image src="/mascot.png" alt="Logo" width={32} height={32} />
          <span className="font-bold text-lg">WS32</span>
        </div>
        <nav className="flex items-center gap-3">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Se connecter
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 text-sm font-medium rounded-lg bg-black text-white hover:bg-gray-800 transition-colors"
          >
            S&apos;inscrire
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center gap-12 px-8 py-20 text-center">
        <div className="flex flex-col items-center gap-6 max-w-2xl">
          <Image src="/mascot.png" alt="Mascot" width={96} height={96} priority />
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
            Gérez votre association<br />
            <span className="text-gray-400">simplement.</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-md">
            Connectez-vous à vos données AssoConnect, suivez vos membres et
            pilotez votre organisation depuis un seul endroit.
          </p>
          <div className="flex gap-3 mt-2">
            <Link
              href="/signup"
              className="px-6 py-3 text-base font-semibold rounded-xl bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Commencer gratuitement
            </Link>
            <Link
              href="/login"
              className="px-6 py-3 text-base font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Se connecter
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl w-full mt-8">
          {[
            {
              icon: "🏛️",
              title: "Données en temps réel",
              desc: "Synchronisation directe avec l'API AssoConnect.",
            },
            {
              icon: "👥",
              title: "Gestion des membres",
              desc: "Consultez et filtrez vos adhérents en un clic.",
            },
            {
              icon: "🔒",
              title: "Accès sécurisé",
              desc: "Authentification via Supabase, données protégées.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="border border-gray-100 rounded-2xl p-6 text-left flex flex-col gap-2"
            >
              <span className="text-3xl">{f.icon}</span>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-xs text-gray-400 border-t border-gray-100">
        © 2026 WS32 · Propulsé par AssoConnect
      </footer>
    </div>
  );
}
