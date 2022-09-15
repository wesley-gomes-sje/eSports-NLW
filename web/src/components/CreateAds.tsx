import { MagnifyingGlassPlus } from "phosphor-react";

export  function CreateAds(){
    return(
        <div className="pt-1 bg-gradient-nlw self-stretch rounded-lg mt-8 overflow-hidden">
        <div className="bg-[#242634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>
          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 font-medium text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24} /> Publicar anúncio
          </button>
        </div>
      </div>
    )
}