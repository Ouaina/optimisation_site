/* analytics.js — collecte d'audience anonyme (aucune donnée personnelle)
   Version allégée : l'ancienne version bloquait le processeur (boucle de
   hachage de tout le DOM, durée croissante jusqu'à 430 ms toutes les 2,6 s)
   sans rien transmettre. Ici : un seul relevé, différé à la prochaine plage
   d'inactivité. */
(function (w, d) {
  w.addEventListener("load", function () {
    var idle = w.requestIdleCallback || function (f) { return w.setTimeout(f, 2000); };
    idle(function () {
      w.__au = { n: 1, w: w.innerWidth, hidden: d.visibilityState === "hidden" };
    });
  });
})(window, document);
