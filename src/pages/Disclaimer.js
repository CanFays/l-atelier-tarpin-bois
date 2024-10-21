import React from 'react';
import TitleLined from '../components/TitleLined';

function Disclaimer () {
  return  (

      <pages className="disclaimer">
        <br /> <br /> <br /> <br />
        <TitleLined myTitle={"CREDITS"} />
        <p>Création site web : <strong>Candice Fays</strong> </p>
        <p>Création webdesign et refonte du logo :<strong> Clara Fays</strong></p>
        <p>Crédits photos (bannière et portrait N&B) :<strong> Amandine</strong>, de <i>amandine-marvin.fr</i>, photographe spécialisée dans les évènements de mariage.</p>
        <TitleLined myTitle={"MENTIONS LEGALES"} />
        <p>Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site atelier-tarpin-bois l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>
        <p>Edition du site : <br />
        Le présent site, accessible à l’URL atelier-tarpin-bois.fr (le « Site »), est édité par :<br />
        Benjamin Paret, résidant 24 Chemin DES PÈRES 13390 AURIOL (France),  inscrite au R.C.S. de MARSEILLE, SIRET 91928152700029. <br />
        Le numéro individuel TVA de l’éditeur est : FR54919281527. <br />
        Activité principale : Fabrication d’autres meubles et industries connexes de l’ameublement</p>
        <p>Hébergement : <br />
        Le Site est hébergé par la société Vercel, situé Avenue Huart Hamoir 71, 1030 Brussels, Belgium. Contact mail : privacy@vercel.com</p>
        <p>Directeur de publication : <br />
        Le Directeur de la publication du Site est Benjamin Paret. <br /></p>
        <p>Nous contacter : <br />
        Par téléphone : +33698837731 <br />
        Par email : tarpinbois@gmail.com <br />
        Par courrier : 24 Chemin DES PÈRES 13390 AURIOL</p>
        <TitleLined myTitle={"DONNEES PERSONNELLES ET COOKIES"} />
        <p>Aucune donnée personnelle n'est conservée sur ce site. En utilisant le formulaire, vous envoyez un mail directement à tarpinbois@gmail.com. <br /> Ce site ne dépose pas de cookie sur votre ordinateur.</p>
      </pages>

  );
}

export default Disclaimer;
