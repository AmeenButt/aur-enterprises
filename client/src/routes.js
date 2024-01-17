import Home from 'views/home'
import About from 'views/about'
import Faqs from 'views/faqs'
import ContactUs from 'views/contactUs'
import Services from 'views/services'
const routes = [
    {
        path:'/',
        name:'Home',
        component: <Home/>
    },
    {
        path:'/about',
        name:'About us',
        component: <About/>
    },
    {
        path:'/faqs',
        name:'FAQs',
        component: <Faqs/>
    },
    {
        path:'/contactus',
        name:'Contact us',
        component: <ContactUs/>
    },
    {
        path:'/services',
        name:'Services',
        component: <Services/>
    },
]
export default routes;