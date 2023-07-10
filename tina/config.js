import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.HUGO_PARAMS_TINA_CLIEN_ID, // Get this from tina.io
  token: process.env.HUGO_PARAMS_TINA_TOKEN, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "faq_en",
        label: "Faq_EN",
        path: "content/en/faq",
        fields: [
          {
            label: "Question",
            name: "dt",
            type: "string",
            isTitle: true,
            required: true,
          },
          {
            label: "Answer",
            name: "dd",
            type: "string",
            required: true,
            ui: {
              component: "textarea",
            },
          },
        ],
      },
      {
        name: "faq_ua",
        label: "Faq_UA",
        path: "content/ua/faq",
        fields: [
          {
            label: "Question",
            name: "dt",
            type: "string",
            isTitle: true,
            required: true,
          },
          {
            label: "Answer",
            name: "dd",
            type: "string",
            required: true,
            ui: {
              component: "textarea",
            },
          },
        ],
      },
      {
        name: "faq_ru",
        label: "Faq_RU",
        path: "content/ru/faq",
        fields: [
          {
            label: "Question",
            name: "dt",
            type: "string",
            isTitle: true,
            required: true,
          },
          {
            label: "Answer",
            name: "dd",
            type: "string",
            required: true,
            ui: {
              component: "textarea",
            },
          },
        ],
      },

      {
        name: "wiki_en",
        label: "Wiki_EN",
        path: "content/en/wiki",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "DateTime",
            ui: {
              timeFormat: "HH:mm",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      {
        name: "wiki_ua",
        label: "Wiki_UA",
        path: "content/ua/wiki",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "DateTime",
            ui: {
              timeFormat: "HH:mm",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      {
        name: "wiki_ru",
        label: "Wiki_RU",
        path: "content/ru/wiki",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "DateTime",
            ui: {
              timeFormat: "HH:mm",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      {
        name: "works_en",
        label: "Works_EN",
        path: "content/en/works",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "job",
            label: "Job",
          },
          {
            type: "string",
            name: "location",
            label: "Location",
          },
          {
            type: "string",
            name: "designation",
            label: "Designation",
          },
          {
            type: "string",
            name: "experience",
            label: "Experience",
          },
          {
            type: "string",
            name: "function",
            label: "Function",
          },
          {
            label: "Skills",
            name: "skills",
            type: "string",
            list: true,
          },
          {
            label: "Work Model",
            name: "work_model",
            type: "string",
            options: [{
              value: "fulltime",
              label: "Full time"
            }, {
              value: "parttime",
              label: "Part time"
            },
            {
              value: "hybrid",
              label: "Hybrid"
            }
          ]},

          {
            type: "datetime",
            name: "date",
            label: "DateTime",
            ui: {
              timeFormat: "HH:mm",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "works_ua",
        label: "Works_UA",
        path: "content/ua/works",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "job",
            label: "Job",
          },
          {
            type: "string",
            name: "location",
            label: "Location",
          },
          {
            type: "string",
            name: "designation",
            label: "Designation",
          },
          {
            type: "string",
            name: "experience",
            label: "Experience",
          },
          {
            type: "string",
            name: "function",
            label: "Function",
          },
          {
            label: "Skills",
            name: "skills",
            type: "string",
            list: true,
          },
          {
            label: "Work Model",
            name: "work_model",
            type: "string",
            options: [{
              value: "fulltime",
              label: "Full time"
            }, {
              value: "parttime",
              label: "Part time"
            },
            {
              value: "hybrid",
              label: "Hybrid"
            }
          ]},

          {
            type: "datetime",
            name: "date",
            label: "DateTime",
            ui: {
              timeFormat: "HH:mm",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "works_ru",
        label: "Works_RU",
        path: "content/ru/works",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "job",
            label: "Job",
          },
          {
            type: "string",
            name: "location",
            label: "Location",
          },
          {
            type: "string",
            name: "designation",
            label: "Designation",
          },
          {
            type: "string",
            name: "experience",
            label: "Experience",
          },
          {
            type: "string",
            name: "function",
            label: "Function",
          },
          {
            label: "Skills",
            name: "skills",
            type: "string",
            list: true,
          },
          {
            label: "Work Model",
            name: "work_model",
            type: "string",
            options: [{
              value: "fulltime",
              label: "Full time"
            }, {
              value: "parttime",
              label: "Part time"
            },
            {
              value: "hybrid",
              label: "Hybrid"
            }
          ]},

          {
            type: "datetime",
            name: "date",
            label: "DateTime",
            ui: {
              timeFormat: "HH:mm",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      {
        name: "terms_en",
        label: "Terms_EN",
        path: "content/en/terms",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      {
        name: "terms_ua",
        label: "Terms_UA",
        path: "content/ua/terms",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      {
        name: "terms_ru",
        label: "Terms_RU",
        path: "content/ru/terms",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      {
        name: "policy_en",
        label: "Policy_EN",
        path: "content/en/policy",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      {
        name: "policy_ua",
        label: "Policy_UA",
        path: "content/ua/policy",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      {
        name: "policy_ru",
        label: "Policy_RU",
        path: "content/ru/policy",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      {
        name: "cookie_en",
        label: "Cookie_EN",
        path: "content/en/cookie",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      {
        name: "cookie_ua",
        label: "Cookie_UA",
        path: "content/ua/cookie",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      {
        name: "cookie_ru",
        label: "Cookie_RU",
        path: "content/ru/cookie",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
