import {
  ChevronLeft,
  ChevronRight,
  Play
} from "lucide-react";
import Image from "next/image";

function Main() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center gap-4">
        <button className="rounded-full bg-black/40 p-1">
          <ChevronLeft className="h-auto w-auto" />
        </button>
        <button className="rounded-full bg-black/40 p-1">
          <ChevronRight className="h-auto w-auto" />
        </button>
      </div>

      <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <a
          href="#"
          className="group bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
        >
          <Image
            src="/img/albumFresno.jpg"
            width={104}
            height={104}
            alt="Capa da banda fresno"
          />
          <strong>This is Fresno</strong>
          <button className="group w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="group bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
        >
          <Image
            src="/img/albumBabyMetal.jpg"
            width={104}
            height={104}
            alt="Capa da banda baby metal"
          />
          <strong>This is BABYMETAL</strong>
          <button className="group w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="group bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
        >
          <Image
            src="/img/albumClariceFalcao.jfif"
            width={104}
            height={104}
            alt="Capa da banda clarice falcao"
          />
          <strong>This is Clarice Falção</strong>
          <button className="group w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="group bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
        >
          <Image
            src="/img/albumGrillo.jpg"
            width={104}
            height={104}
            alt="Capa da banda grilo"
          />
          <strong>This is Grilo</strong>
          <button className="group w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="group bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
        >
          <Image
            src="/img/albumZimbra.jpg"
            width={104}
            height={104}
            alt="Capa da banda zimbra"
          />
          <strong>This is Zimbra</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="group bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
        >
          <Image
            src="/img/algumImagineDragons.jfif"
            width={104}
            height={104}
            alt="Capa da banda imagine dragons"
          />
          <strong>This is Imagine Dragons</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
      </div>

      <h2 className="font-semibold text-2xl mt-10">
        Made for Braian Hudson Braga
      </h2>
      <div className="grid grid-cols-6 gap-4 mt-4">
        <a
          href="#"
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
        >
          <Image
            src="/img/daily1.jfif"
            className="w-full"
            width={120}
            height={120}
            alt="Capa da banda ... "
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Zimbra, O Terno, Fresno e mais
          </span>
        </a>
        <a
          href="#"
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
        >
          <Image
            src="/img/daily2.jfif"
            className="w-full"
            width={120}
            height={120}
            alt="Capa da banda ... "
          />
          <strong className="font-semibold">Daily Mix 2</strong>
          <span className="text-sm text-zinc-400">
            Lagum, Clarice Falcão, Hotelo e mais
          </span>
        </a>
        <a
          href="#"
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
        >
          <Image
            src="/img/daily3.jfif"
            className="w-full"
            width={120}
            height={120}
            alt="Capa da banda ... "
          />
          <strong className="font-semibold">Daily Mix 3</strong>
          <span className="text-sm text-zinc-400">
            TIAGO IORC, Vanguart, Rubel e mais
          </span>
        </a>
        <a
          href="#"
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
        >
          <Image
            src="/img/discoverWeekly.jfif"
            className="w-full"
            width={120}
            height={120}
            alt="Capa da banda ... "
          />
          <strong className="font-semibold">Descobertas da semana</strong>
          <span className="text-sm text-zinc-400">
            Sua mixtape semanal cheia de novas descobertas.
          </span>
        </a>
        <a
          href="#"
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
        >
          <Image
            src="/img/radarDeNovidades.jfif"
            className="w-full"
            width={120}
            height={120}
            alt="Capa da banda ... "
          />
          <strong className="font-semibold">Radar de Novidades</strong>
          <span className="text-sm text-zinc-400">
            Confira os lançamentos dos..
          </span>
        </a>
      </div>
    </main>
  );
}

export default Main;
