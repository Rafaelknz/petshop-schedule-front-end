import Home from './components/home/Home.vue'
import Calendar from './components/calendar/Calendar.vue'

export const routes = [
    { path: '', component: Home, titulo: 'Home' },
    { path: '/admin/index', component: Calendar, titulo: 'Calendar' }

];