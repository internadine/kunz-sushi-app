import Bestellung from './components/Bestellung'; 
import Bezahlen from './components/Bezahlen'; 
import Sushi from './components/Sushi'; 
import Menu from './components/Menu';
import Tisch from './components/Tisch';
import Login from './components/Login'


export const routes = [
    {path: '/bestellung', component: Bestellung},
    {path: '/sushi', component: Sushi},
    {path: '/bezahlen', component: Bezahlen},
    {path: '/menu', component: Menu},
    {path: '/tisch', component: Tisch},
    {path: '/login', component: Login},
]
    
    
 

