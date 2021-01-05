import Home from './components/home/Home.vue'
import Calendar from './components/calendar/Calendar.vue'
import AddAppointment from './components/addAppointment/AddAppointment.vue'

export const routes = [
    { path: '', component: Home, titulo: 'Home' },
    { path: '/admin/index', component: Calendar, titulo: 'Calendar' },
    { path: '/addAppointment', component: AddAppointment, titulo: 'AddAppointment' }
];