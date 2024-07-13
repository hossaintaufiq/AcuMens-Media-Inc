import { baseApi } from "./baseApi"


// Define a service using a base URL and expected endpoints
export const contactApi = baseApi.injectEndpoints({

  endpoints: (builder) => ({
    submitContactForm: builder.mutation({
      query: (data) => {
        console.log(data);
        return{
            url:'/submit',
            method:"POST",
            data
        }
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSubmitContactFormMutation } = contactApi