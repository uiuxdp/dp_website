import HomeBanner from "@/widgets/HomeBanner";
import dynamic from "next/dynamic";
import HomeWidget from "@/widgets/HomeWidget";
// const HomeWidget = dynamic(() => import("@/widgets/HomeWidget"), { ssr: false });

export default async function Home({}) {
  return (
    <main className="min-h-screen">

      <HomeBanner/>
      <HomeWidget />

      <section className="min-h-screen section1  flex items-end pb-[120px] relative z-10 pointer-events-none">
        <div className="container">
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-[72px] text-white font-bold leading-tight">
                Securing Dubai from Above
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen section1  flex items-end pb-[120px] relative z-10 pointer-events-none">
        <div className="container">
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-[72px] text-white font-bold leading-tight">
                Securing Dubai from Above
              </h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
