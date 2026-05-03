import { media } from "@/lib/media";

export type CarouselItem = {
  src: string;
  alt: string;
  label: string;
  caption: string;
  className: string;
};

export const homeCarouselItems: CarouselItem[] = [
  {
    src: media.hero.benedictRedgrove.architectureWhite,
    alt: "Imagem arquitetônica de abertura do portfólio",
    label: "Entrada",
    caption: "Imagem de respiro para abrir a narrativa.",
    className: "w-[20rem] sm:w-[24rem] aspect-[16/10]",
  },
  {
    src: media.cases.shared.macleBuilderShowcase,
    alt: "Construtor de sites Macle em notebook",
    label: "Macle",
    caption: "Construtor de sites com montagem modular.",
    className: "w-[22rem] sm:w-[28rem] aspect-[16/10] mt-8",
  },
  {
    src: media.cases.shared.documentValidationScreen,
    alt: "Portal validador de documentos",
    label: "Validação",
    caption: "Documento conferido em tela de operação.",
    className: "w-[21rem] sm:w-[26rem] aspect-[16/10]",
  },
  {
    src: media.cases.shared.documentListing,
    alt: "Listagem de documentos em tablet",
    label: "Listagem",
    caption: "Visão de fila e análise operacional.",
    className: "w-[22rem] sm:w-[27rem] aspect-[16/10] mt-6",
  },
  {
    src: media.cases.shared.macleLoginScreen,
    alt: "Tela de login do ecossistema Macle",
    label: "Portal",
    caption: "Tela de entrada e autenticação.",
    className: "w-[21rem] sm:w-[25rem] aspect-[16/10]",
  },
];
