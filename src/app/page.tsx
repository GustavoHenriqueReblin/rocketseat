import Header from "@/components/header"
import { LinkTypes } from "@/types/link-types";

export default function Home() {
  const links = [
    { text: "Home" },
    { text: "Programas", type: LinkTypes.MOREOPTIONS },
    { text: "Eventos", type: LinkTypes.MOREOPTIONS },
    { text: "Blog" },
    { text: "A Rocketseat" },
    { text: "Para empresas" }
  ];

  return (
    <>
      <Header links={links}></Header>
      <div className="h-[calc(8500px)] w-full"></div>
    </>
  )
};
