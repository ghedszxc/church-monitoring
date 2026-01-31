import { createStore } from 'vuex'

export default createStore({
  getters: {
    // doubleCount: (state) => state.count * 2,
    // validate_isAuthenticated: (state) => {
    //   state.global_isAuthenticated = localStorage.getItem('isAuthenticated') != 'false'
    // },

    reconstructMenus: (state) => {
      console.log('GETTERS: ', localStorage.getItem('isAuthenticated'))
      if (localStorage.getItem('isAuthenticated') == 'true') {
        state.menus[4] = {
          text: '',
          icon: 'pi pi-user',
          url: '/login',
          isExternal: false,
          subLinks: [
            {
              text: 'Dashboard',
              action: 'redirect',
              url: '/dashboard',
              icon: '',
            },
            {
              text: 'Log Out',
              action: 'logout',
              url: '',
              icon: 'pi pi-sign-out',
            },
          ],
        }
      } else {
        state.menus[4] = {
          text: '',
          icon: 'pi pi-user',
          url: '/login',
          isExternal: false,
        }
      }
    },
  },
  state: {
    theme: 'dark',
    // global_isAuthenticated: false,

    menus: [
      {
        text: 'Home',
        url: '/',
        isExternal: false,
      },
      {
        text: 'Social Media',
        url: 'https://www.facebook.com/visionchurchbocaue',
        isExternal: true,
      },
      {
        text: 'About Us',
        url: '/about-us',
        isExternal: false,
      },
      {
        text: 'Contact Us',
        url: '/contact-us',
        isExternal: false,
      },
      {
        text: '',
        icon: 'pi pi-user',
        url: '/login',
        isExternal: false,
        subLinks: [],
      },
    ],
  },
  mutations: {
    updateTheme(state, payload) {
      state.theme = payload
    },
    updateSubLinks(state, payload) {
      state.menus[payload.key].subLinks = payload.data
    },
  },
  actions: {
    UPDATE_THEME(context, payload) {
      context.commit('updateTheme', payload)
    },
    UPDATE_MENU_FOR_USER(context, payload) {
      context.commit('updateSubLinks', {
        key: 4,
        data:
          payload == 'true'
            ? [
                {
                  text: 'Dashboard',
                  action: 'redirect',
                  url: '/dashboard',
                  icon: '',
                },
                {
                  text: 'Log Out',
                  action: 'logout',
                  url: '',
                  icon: 'pi pi-sign-out',
                },
              ]
            : [],
      })

      document.getElementById('dropdown_menu').style.visibility = 'hidden'
    },
  },
})
