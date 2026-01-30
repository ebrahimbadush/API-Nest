import { Routes } from '@angular/router';
import { About } from './ui/about/about';
import { Contact } from './ui/contact/contact';
import { CyberSecurity } from './ui/cyber-security/cyber-security';
import { Cloudservice } from './ui/cloudservice/cloudservice';
import { Product } from './ui/product/product';
import { Services } from './ui/services/services';
import { Dataengineering } from './ui/dataengineering/dataengineering';
import { Home } from './ui/home/home';
import { Singleview } from './ui/singleview/singleview';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'about',component:About},
    {path:'contact',component:Contact},
    {path:'cybersecurity',component:CyberSecurity},
    {path:'cloudservice',component:Cloudservice},
    {path:'product',component:Product},
    {path:'services',component:Services},
    {path:'dataengineering',component:Dataengineering},
    {path:'singleview-titleid/:titleid',component:Singleview}

];
