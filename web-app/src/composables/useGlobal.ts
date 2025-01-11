import { ref } from "vue";
export default function useGlobal() {

  const discipleList = ref([]);
  const selectedDisciple = ref(null);

  const snackbar = ref({
    msg: '',
    isActive: false,
    timeout: 3000,
    color: ''
  })

//   async function deleteAnnouncementById(id: string) {
//     const { error, data } = await useLocalFetch(`/api/announcements/v1/${id}`, {
//       method: "DELETE",
//     });

//     if (error && error.value && error.value.data) {
//       return Promise.reject(error.value.data.message as string);
//     }

//     const result = data as any;

//     if (result && result.value) {
//       return Promise.resolve(result.value.message as string);
//     }
//   }
  function displaySnackbar(payload) {
    snackbar.value.isActive = payload.isActive
    snackbar.value.color = payload.color
    snackbar.value.msg = payload.msg
    console.log("!!! snackbar: ", JSON.stringify(snackbar.value))
    console.log("!!! payload: ", payload)
    // snackbar.value = payload
  }

  function getAge(payload) {
    var today = new Date();
    var birthDate = new Date(payload);

    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    
    

    return age;
  }

  function formatDate(date) {
    let formatDate = new Date(date)
    let month = formatDate.getMonth() + 1; // Months are zero-based
    let day = formatDate.getDate();
    let year = formatDate.getFullYear();

    let months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    // Add leading zero to month and day if they are single digits
    // if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    
    return `${months[month+1]} ${day}, ${year}`;
  }

  return {
    getAge,
    formatDate,
    
    discipleList,
    selectedDisciple,
    snackbar,
    displaySnackbar
  };
}
