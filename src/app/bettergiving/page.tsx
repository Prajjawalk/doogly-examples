"use client";
import { DooglyButton } from "@doogly/react";

export default function Page() {
  const receivingAddress = "0x83b04F6E5B58145372Ca9404B63403796C3fA6Cc"; // Receiving address
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-4xl text-[#AF3BC9] mt-5">
          Action pour la Protection des Droits de l&apos;Enfant APDE
        </div>

        <div className="text-md text-[#AF3BC9] mt-10">
          APDE est une organisation apolitique à but non lucratif, régie par
          l’article 5 de l’ordonnance N° 27/INT/SUR du 28 Juillet 1962 et
          l’article 7 du décret N°165/INT/SUR du 25 Août 1962. Enregistrée en
          octobre 2015 dans le registre des associations au Tchad et autorisée à
          fonctionner sous le Folio N°5144, le 7 juin 2017 et répertoriée sur le
          registre des ONG nationales sous le N° 014/22 depuis le 25 Janvier
          2022. APDE est dotée d’un Statut Consultatif Spécial auprès du Conseil
          Economique et Social des Nations-Unies (ECOSOC-UN) depuis 2021. APDE
          est membre exécutif de l’Initiative Présidentielle pour l’Éradication
          de la Mendicité Infantile (IPEMI) au Tchad depuis 2023. La création de
          l’APDE est l’aboutissement de l’effort de certaines personnes
          soucieuses de la situation dans laquelle vivent les enfants au Tchad.
          Afin de donner une chance égale à tous les enfants, relève de demain,
          APDE a vu le jour pour trouver des approches de solutions aux
          problèmes, juridique, éducatif, sanitaire, environnemental, sportif et
          assistance sociale aux victimes de violences, exploitation et de
          protection contre toute forme de discrimination des enfants pour un
          développement harmonieux.
        </div>
        <DooglyButton
          buttonText="Donate Now"
          modalTitle="Support Our Cause"
          apiUrl="https://api.doogly.org"
          config={{
            destinationChain: "10",
            destinationAddress: receivingAddress, // Destination address (Dummy if postSwapHook is used)
            destinationOutputTokenAddress:
              "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85", // Output token at destination
          }}
          modalStyles={{
            backgroundColor: "white",
            headingColor: "#892BE2",
            buttonColor: "#892BE2",
            textColor: "#892BE2",
          }}
          buttonClassName="bg-purple-600 text-white border-none py-2 px-4 text-center text-lg rounded transition duration-300 ease-in-out hover:bg-purple-700"
        />
      </main>
    </div>
  );
}
