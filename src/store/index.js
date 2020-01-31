import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const profile = {
  info: {
    name: "Muhammad Ubaid Raza",
    title: "Full Stack Web Developer",
    subTitle: 'Jack of all trades, master of "some"',
    email: "mubaidr@gmail.com",
    location: "Rawalpindi, Pakistan",
    formspreeURL: "https://formspree.io/mubaidr@gmail.com",
    profiles: [
      {
        title: "Github",
        url: "https://github.com/mubaidr",
        icon: "code"
      },
      /* {
        title: 'Blog',
        url: 'https://medium.com/@mubaidr',
        icon: 'create'
      }, */
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/muhammad-ubaid-raza-b0859a100",
        icon: "business_center"
      },
      /* {
        title: 'Freelancer',
        url: 'https://www.freelancer.com/u/razamubaid',
        icon: 'work'
      } */
      {
        title: "Twitter",
        url: "https://www.twitter.com/mubaidr",
        icon: "social"
      }
    ]
  },
  sections: {
    about: {
      heading: "About Me",
      icon: "info",
      summary:
        "Web developer with more than <strong>4 years</strong> of well-rounded experience with a degree in the field of <strong>Computer Science</strong>, extensive knowledge of modern Web techniques and love for <strong>Coffee</strong>.",
      objective:
        "Looking for an opportunity to work and upgrade, as well as being involved in an organization that believes in gaining a competitive edge and giving back to the community."
    },
    skills: {
      heading: "Skills",
      icon: "view_list"
    },
    /* portfolio: {
      heading: 'Portfolio',
      icon: 'view_carousel'
    }, */
    contact: {
      heading: "Contact",
      icon: "mail"
    }
  },
  skills: [
    {
      title: "Node.js"
    },
    {
      title: "Express.js"
    },
    {
      title: "VueJS"
    },
    {
      title: "JavaScript"
    },
    {
      title: "HTML5"
    },
    {
      title: "Canvas"
    },
    {
      title: "CSS3"
    },
    {
      title: "Bulma"
    },
    {
      title: "Bootstrap"
    },
    {
      title: "jQuery"
    },
    {
      title: "Pug"
    },
    {
      title: "Stylus"
    },
    {
      title: "SCSS"
    },
    {
      title: "Webpack"
    },
    {
      title: "Git"
    },
    {
      title: "ASP.NET Web Forms"
    },
    {
      title: "MSSQL"
    },
    {
      title: "MongoDB"
    },
    {
      title: "Apache Cordova"
    },
    {
      title: "Chrome Extensions"
    }
  ]
  /*
  portfolio: [
    {
      name: 'mbo',
      title: 'Task Management',
      url: '',
      source: 'https://github.com/mubaidr/SPA-asp.net-api-vuejs-',
      description: 'Basic task management and messaging',
      skills: ['vuejs', 'vue-material', 'ASP.NET API', 'SQL Server']
    },
    {
      name: 'open-book-store',
      title: 'Open Book Store',
      url: 'https://mubaidr.github.io/Book-Trading-Club/',
      source: 'https://github.com/mubaidr/Book-Trading-Club',
      description: 'Trade or loan books with other book readers',
      skills: ['nodejs', 'expressjs', 'mongodb', 'vuejs']
    },
    {
      name: 'open-url-shortner',
      title: 'Open URL Shortner',
      url: 'https://url-shortener-mubaidr.herokuapp.com/',
      source: 'https://github.com/mubaidr/URL-Shortener-Microservice',
      description: 'Shortens the provided URL',
      skills: ['nodejs', 'expressjs', 'mongodb']
    },
    {
      name: 'pic-interest',
      title: 'Pic-Interest',
      url: 'https://mubaidr.github.io/Pic-Interest/',
      source: 'https://github.com/mubaidr/Pic-Interest',
      description: 'like Pinterest but simpler',
      skills: ['nodejs', 'expressjs', 'mongodb', 'vuejs']
    },
    {
      name: 'open-vote',
      title: 'Open Vote',
      url: 'https://mubaidr.github.io/Voting-App/',
      source: 'https://github.com/mubaidr/Voting-App',
      description: 'Create poll or participate in public polls',
      skills: ['nodejs', 'expressjs', 'mongodb', 'vuejs', 'chartsjs']
    },
    {
      name: 'stock-charts',
      title: 'Stocky Charts',
      url: 'https://stock-chart-mubaidr.herokuapp.com/',
      source: 'https://github.com/mubaidr/Stock-Market-Chart',
      description: 'Graph stock market, synced across visitors',
      skills: ['nodejs', 'expressjs', 'socket.io', 'vuejs', 'chartsjs']
    },
    {
      name: 'simon-game',
      title: 'Simon Game',
      url: 'https://mubaidr.github.io/vuejs-simon-game/',
      source: 'https://github.com/mubaidr/vuejs-simon-game',
      description: 'Implementation of Simon game',
      skills: ['vuejs', 'javascript', 'css']
    },
    {
      name: 'pomodoro-clock',
      title: 'Pomodoro Clock',
      url: 'https://mubaidr.github.io/vuejs-Pomodoro-Clock/',
      source: 'https://github.com/mubaidr/vuejs-Pomodoro-Clock',
      description: 'Implementation of The Pomodoro Clock',
      skills: ['vuejs', 'javascript', 'css']
    },
    {
      name: 'tic-tac-toe',
      title: 'Tic Tac Toe',
      url: 'https://mubaidr.github.io/vuejs-tic-tac-toe/',
      source: 'https://github.com/mubaidr/vuejs-tic-tac-toe',
      description: 'A Tick Tac Toe',
      skills: ['vuejs', 'javascript', 'css']
    }
  ] */
};

const mutations = {};

const actions = {};

const getters = {
  info(state) {
    return state.info;
  },
  skills(state) {
    return state.skills;
  },
  sections(state) {
    return state.sections;
  },
  portfolio(state) {
    return state.portfolio;
  }
};

export default () => {
  const store = new Vuex.Store({
    state: profile,
    mutations,
    actions,
    getters
  });

  return store;
};
