import homepage1IMG from '../assets/homepage1.jpg';
import homepage2IMG from '../assets/homepage2.jpg';

function Homepage() {
  return (
    <div className="mx-auto text-center py-20">
      <div className="bg-radial-[at_20%_30%] to-50% from-[#275D65] to-darkgreen h-150 text-white font-bold ">
        <h1 className="text-6xl pt-20">Resilience for Real Estate :</h1>
        <h2 className="text-6xl pb-20 px-20">
          La plateforme d&apos;aide à la décision pour la résilience des
          bâtiments et des acteurs des territoires.
        </h2>
      </div>
      <div className="p-20">
        <h3 className="font-black text-5xl pt-40">Les outils</h3>
        <div className="mx-auto grid grid-cols-1 gap-x-8 py-12 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <img
              src={homepage1IMG}
              alt="Photo of a cyclone taken from space"
              className="rounded-lg mx-auto h-40 w-90 object-cover"
            />
            <h4 className="text-2xl font-semibold py-5">Bat-ADAPT</h4>
            <p className=" text-gray-700">
              Un outil d&apos;aide à la décision relatif aux risques climatiques
              à l&apos;échelle de la France et de l&apos;Europe, selon les
              scénarios du GIEC. À l&apos;aide d&apos;une adresse,
              l&apos;exposition au risque est déterminée face aux aléas
              climatiques, et l&apos;analyse est complétée d&apos;un score de
              vulnérabilité, évalué à partir de réponses à quelques questions
              relatives aux caractéristiques du bâtiment.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <img
              src={homepage1IMG}
              alt="Photo of a cyclone taken from space"
              className="rounded-lg mx-auto h-40 w-90 object-cover"
            />
            <h4 className="text-2xl font-semibold py-5">
              Bat-ADAPT Territoires
            </h4>
            <p className=" text-gray-700">
              En cours de développement. Il s&apos;agira d&apos;un parcours à
              destination des acteurs des collectivités, qui permettra
              d&apos;avoir des cartographies de risques climatiques plus
              précises à l&apos;échelle des régions et des informations
              relatives aux risques climatiques auxquels les collectivités
              seront confrontées.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <img
              src={homepage1IMG}
              alt="Photo of a cyclone taken from space"
              className="rounded-lg mx-auto h-40 w-90 object-cover"
            />
            <h4 className="text-2xl font-semibold py-5">BIODI-Bat</h4>
            <p className=" text-gray-700">
              Un outil d&apos;analyse de risque biodiversité pour le bâtiment.
              L&apos;outil est composé de plusieurs indicateurs analysant la
              biodiversité à l&apos;échelle du territoire, du bâtiment ou du
              projet. Un référentiel scientifique fournit le détail de la
              méthodologie de construction de chaque indicateur.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-darkgreen rounded-lg mx-20 p-20 grid grid-cols-1 gap-x-8 py-12 lg:grid-cols-2">
        <img
          src={homepage1IMG}
          alt="Photo of a cyclone taken from space"
          className="rounded-2xl h-90 w-full object-cover"
        />
        <div className="text-white text-left">
          <h3 className="font-black text-5xl pb-5">
            Un outil d&apos;intérêt général
          </h3>
          <p className="text-2xl">
            Les outils disponibles sur la plateforrme R4RE sont tous gratuits
            pour une analyse pour un bâtiment. L&apos;Observatoire de
            l&apos;Immobilier Durable défend cet objectif de sensibilisation
            large auprès des particuliers pour permettre une libre circulation
            de l&apos;information.
          </p>
          <button className="border rounded-lg px-5 py-1 my-5 text-xl">
            Accéder aux outils
          </button>
        </div>
      </div>
      <div
        className="w-full object-cover bg-bottom mt-15 p-20 text-left h-100"
        style={{ backgroundImage: `url(${homepage2IMG})` }}
      >
        <h3 className="text-white text-5xl font-semibold">
          R4RE aide les acteurs de l&apos;immobilier à répondre aux impératifs
          réglementaires de reporting.
        </h3>
        <button className="bg-white text-darkgreen font-semibold rounded-lg px-5 py-1 my-5 text-xl">
          En savoir plus
        </button>
      </div>
      <div className="mt-15 rounded-lg mx-20 p-20 grid grid-cols-1 py-12 lg:grid-cols-2">
        <div className="bg-white text-darkgreen text-left text-xl px-10 py-15">
          <h3 className="text-5xl font-semibold pb-5">Les avantages</h3>
          <p className="pb-2">
            <strong>En créant un compte</strong>, vous débloquez des
            fonctionnalités avantageuses pour les acteurs de l&apos;immobilier :
          </p>
          <ul className="pl-10 list-disc">
            <li className="pb-2">
              <strong>Prioriser les actifs</strong> sur lesquels mettre en place
              des actions pour l&apos;adaptation et la biodiversité et profiter
              de recommandations.
            </li>
            <li className="pb-2">
              <strong>Choisir un site d&apos;implantation </strong>pour votre
              projet en prenant en compte les enjeux d&apos;adaptation et de
              biodiversité.
            </li>
            <li className="pb-2">
              Répondre à vos obligations de <strong>reporting</strong>.
            </li>
            <li className="pb-2">
              Orienter vos <strong>décisions d&apos;investissements</strong>.
            </li>
          </ul>
          <button className="border rounded-lg px-5 py-1 my-5 text-xl">
            Créer mon compte
          </button>
        </div>
        <div className="bg-darkgreen text-white text-left font-semibold text-2xl px-10 py-15">
          <p>Robustesse scientifique</p>
          <p>Transparence des modèles</p>
          <p>Outils en open source</p>
          <p>Amélioration continue</p>
          <p>Déjà + 100 000 bâtiments en base</p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
