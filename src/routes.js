import Bestellung from "./components/Bestellung";
import Bezahlen from "./components/Bezahlen";
import Sushi from "./components/Sushi";
import Menu from "./components/Menu";
import Tisch from "./components/Tisch";
import Login from "./components/Login";
import CheckTisch from "./components/CheckTisch";
import TischWahl from "./components/TischWahl";
import DoneSushi from "./components/DoneSushi";
import Stat_Stueck from "./components/dashboard/Sushi_Stueck";
import Stat_Euro from "./components/dashboard/Sushi_Euro";
import Stat_Umsatz from "./components/dashboard/Umsatz_Tag";
import Stat_Waiting from "./components/dashboard/Waiting_Time";

export const routes = [
  {
    path: "/bestellung",
    component: Bestellung,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/sushi",
    component: Sushi,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/bezahlen",
    component: Bezahlen,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/menu",
    component: Menu,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/tisch",
    component: Tisch,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/check",
    component: CheckTisch,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/tischwahl",
    component: TischWahl,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/doneSushi",
    component: DoneSushi,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/stat_stueck",
    component: Stat_Stueck,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/stat_sushiUmsatz",
    component: Stat_Euro,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/stat_Umsatz",
    component: Stat_Umsatz,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/waiting",
    component: Stat_Waiting,
    meta: {
      requiresAuth: true
    }
  }
];
