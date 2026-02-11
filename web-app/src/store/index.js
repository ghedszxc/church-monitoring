import { createStore } from 'vuex'

export default createStore({
  getters: {
    reconstructMenus: (state) => {
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
    theme: localStorage.getItem('theme') || 'light',
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

    snackbar: {
      color: '',
      msg: '',
      timeout: 0,
    },

    loading: true,

    disciples: [],
    birthdayCelebrants: [],
  },
  mutations: {
    updateTheme(state, payload) {
      state.theme = payload
    },
    updateSubLinks(state, payload) {
      state.menus[payload.key].subLinks = payload.data
    },
    updateLoading(state, payload) {
      state.loading = payload
    },
    updateSnackbar(state, payload) {
      state.snackbar = payload
    },

    populateDiscipleList(state, payload) {
      state.disciples = payload
    },
    pushToDiscipleList(state, payload) {
      payload.map((people) => {
        state.disciples.push(people)
      })
    },
    populateBirthdayCelebrants(state, payload) {
      state.birthdayCelebrants = payload
    },
  },
  actions: {
    UPDATE_THEME(context, payload) {
      localStorage.setItem('theme', payload)
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

      if (document?.getElementById('dropdown_menu')?.style?.visibility) {
        document.getElementById('dropdown_menu').style.visibility = 'hidden'
      }
    },
    async GET_DISCIPLES_LIST(context) {
      context.commit('updateLoading', true)
      try {
        const response = await fetch('https://vc-bocaue-be.vercel.app/api/disciple')
        context.commit('populateDiscipleList', await response.json())
      } catch (err) {
        throw new Error(err?.message)
      } finally {
        context.commit('updateLoading', false)
      }
    },
    async GET_BIRTHDAY_CELEBRANTS(context) {
      context.commit('updateLoading', true)

      try {
        const response = await fetch(
          'https://vc-bocaue-be.vercel.app/api/disciple/birthday/celebrants',
        )
        context.commit('populateBirthdayCelebrants', await response.json())
      } catch (err) {
        throw new Error(err?.message)
      } finally {
        context.commit('updateLoading', false)
      }
    },
    async ADD_MULTIPLE_DISCIPLES(context, payload) {
      context.commit('updateLoading', true)

      try {
        const response = await fetch('http://localhost:3000/api/disciple/add/multiple/disciples', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })

        const { message, result } = await response.json()
        context.commit('pushToDiscipleList', result)

        context.commit('updateSnackbar', {
          color: 'success',
          msg: message,
          timeout: 3000,
        })
      } catch (err) {
        throw new Error(err?.message)
      } finally {
        context.commit('updateLoading', false)
      }
    },
  },
})
