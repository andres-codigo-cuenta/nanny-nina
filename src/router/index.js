import { createRouter, createWebHistory } from 'vue-router'

import Launch from '../pages/Launch.vue'
import Dashboard from '../pages/_dashboard/Dashboard.vue'

/* Registration/Onboarding */
import RegistrationContainer from '../pages/registration-and-onboarding/registration/RegistrationContainer.vue'
import OnboardingContainer from '../pages/registration-and-onboarding/onboarding/OnboardingContainer.vue'

/* Forgot Password */
import ForgotPasswordContainer from '../pages/forgot-password/ForgotPasswordContainer.vue'

/* Onboarding */
import ChildminderServiceContainer from '../pages/onboarding/childminder-service/ChildminderServiceContainer.vue'

/* Host - Nanny */
import HostNannyHome from '../pages/host/Home.vue'
import HostNannyContainer from '../pages/host/nanny/HostNannyContainer.vue'

const routes = [
	{
		path: '/',
		name: 'Launch',
		component: Launch
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: Dashboard,
		meta: { transition: 'fade' },
		beforeEnter: (to, from, next) => {
			if (from.path !== '/') {
				to.meta.transition = 'slide-left-to-right'
				next()
			} else {
				next()
			}
		}
	},
	{
		path: '/registration',
		component: RegistrationContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/onboarding',
		component: OnboardingContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/forgot-password',
		component: ForgotPasswordContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/childminder-service',
		component: ChildminderServiceContainer,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/host-nanny-home',
		component: HostNannyHome,
		meta: { transition: 'slide-right-to-left' }
	},
	{
		path: '/host-nanny',
		component: HostNannyContainer,
		meta: { transition: 'slide-right-to-left' }
	},
]
const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { top: 0 };
		}
	  }
})
export default router