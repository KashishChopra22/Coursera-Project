// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devServer: {
    port: 5173,
  },
  devtools: { enabled: true },
  modules: [
    // ...
    "@pinia/nuxt",
  ],

  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      link: [
        {
          rel: "stylesheet",

          href: "https://cdn.jsdelivr.net/npm/tw-elements/dist/css/tw-elements.min.css",
          
        },

        {
          rel: "stylesheet",
          href: "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",
         
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
          integrity:
            "sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer",
        },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },

        { rel: "preconnect", href: "https://fonts.gstatic.com" },

        {
          href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap",
          rel: "stylesheet",
        },
      
      ],

      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/tw-elements/dist/js/tw-elements.umd.min.js",
          body: true,
        },

        // {
        //   src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
        //   integrity:
        //     "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
        //   crossorigin: "anonymous",
        //   body: true,
        // },

        {
          src: "https://code.jquery.com/jquery-3.6.2.min.js",
        },
       
      ],
    },
  },
});



 
