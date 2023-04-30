import { Heart, HomeIcon, Library, Plus, Search } from "lucide-react";

function SideBar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <nav className="space-y-5 mt-10">
        <a
          href="#"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Search />
          Search
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Library />
          Your Library
        </a>
      </nav>
      <nav className="space-y-5 mt-8">
        <a
          href="#"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <div className="h-auto w-auto bg-zinc-300 rounded-sm">
            <Plus className="text-zinc-950" />
          </div>
          Create This is{" "}
        </a>

        <a
          href="#"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <div className="h-6 w-6 bg-purple-500/70 rounded-sm items-center flex">
            <Heart className="text-zinc-50 h-4" />
          </div>
          Liked Songs
        </a>
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          This is Fresno
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          This is BabyMetal
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          This is oBraga
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          This is Bella e o Olmo da Bruxa
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          This is Lagum
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          This is Imagine Dragons
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          This is Zimbra
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          This is O Grilo
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          This is Clarice Falção
        </a>
      </nav>
    </aside>
  );
}
export default SideBar;
